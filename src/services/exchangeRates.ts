export interface ExchangeRatePayload {
  rates: Record<string, number>;
  lastUpdated: Date;
  nextUpdate: Date | null;
}

interface ExchangeRateApiResponse {
  result: string;
  base_code: string;
  rates: Record<string, number>;
  time_last_update_unix: number;
  time_next_update_unix?: number;
}

const API_URL = 'https://open.er-api.com/v6/latest/USD';
const CACHE_KEY = 'dk-remesas-exchange-rates';
const CACHE_TTL_MS = 60 * 60 * 1000;
const RATE_MARKUP_FACTOR = 0.95;
const RATE_ADJUSTMENT_EXCLUDED = new Set(['VES', 'USD']);

export function applyRateAdjustment(rate: number, currency: string): number {
  if (RATE_ADJUSTMENT_EXCLUDED.has(currency)) return rate;
  return rate * RATE_MARKUP_FACTOR;
}

interface CachedRates {
  rates: Record<string, number>;
  lastUpdated: string;
  nextUpdate: string | null;
  cachedAt: number;
}

function readCache(): ExchangeRatePayload | null {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    if (!raw) return null;

    const cached = JSON.parse(raw) as CachedRates;
    if (Date.now() - cached.cachedAt > CACHE_TTL_MS) return null;

    return {
      rates: cached.rates,
      lastUpdated: new Date(cached.lastUpdated),
      nextUpdate: cached.nextUpdate ? new Date(cached.nextUpdate) : null,
    };
  } catch {
    return null;
  }
}

function writeCache(payload: ExchangeRatePayload) {
  try {
    const cached: CachedRates = {
      rates: payload.rates,
      lastUpdated: payload.lastUpdated.toISOString(),
      nextUpdate: payload.nextUpdate?.toISOString() ?? null,
      cachedAt: Date.now(),
    };
    sessionStorage.setItem(CACHE_KEY, JSON.stringify(cached));
  } catch {
    // Ignore storage errors (private mode, quota, etc.)
  }
}

export async function fetchExchangeRates(): Promise<ExchangeRatePayload> {
  const cached = readCache();
  if (cached) return cached;

  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error(`Exchange rate API error: ${response.status}`);
  }

  const data = (await response.json()) as ExchangeRateApiResponse;
  if (data.result !== 'success' || !data.rates) {
    throw new Error('Exchange rate API returned an invalid payload');
  }

  const payload: ExchangeRatePayload = {
    rates: data.rates,
    lastUpdated: new Date(data.time_last_update_unix * 1000),
    nextUpdate: data.time_next_update_unix
      ? new Date(data.time_next_update_unix * 1000)
      : null,
  };

  writeCache(payload);
  return payload;
}

export function getUsdRate(
  rates: Record<string, number>,
  currency: string,
  fallbackRate: number,
): number {
  if (currency === 'USD') return 1;

  const liveRate = rates[currency];
  const baseRate =
    typeof liveRate === 'number' && liveRate > 0 ? liveRate : fallbackRate;

  return applyRateAdjustment(baseRate, currency);
}
