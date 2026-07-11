import { useCallback, useEffect, useState } from 'react';
import {
  fetchExchangeRates,
  getUsdRate,
  type ExchangeRatePayload,
} from '@/services/exchangeRates';

const REFRESH_INTERVAL_MS = 60 * 60 * 1000;

export function useExchangeRates() {
  const [rates, setRates] = useState<Record<string, number>>({});
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [isLive, setIsLive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const applyPayload = useCallback((payload: ExchangeRatePayload) => {
    setRates(payload.rates);
    setLastUpdated(payload.lastUpdated);
    setIsLive(true);
  }, []);

  const loadRates = useCallback(async () => {
    try {
      const payload = await fetchExchangeRates();
      applyPayload(payload);
    } catch {
      setIsLive(false);
    } finally {
      setIsLoading(false);
    }
  }, [applyPayload]);

  useEffect(() => {
    loadRates();
    const intervalId = window.setInterval(loadRates, REFRESH_INTERVAL_MS);
    return () => window.clearInterval(intervalId);
  }, [loadRates]);

  const getRate = useCallback(
    (currency: string, fallbackRate: number) => getUsdRate(rates, currency, fallbackRate),
    [rates],
  );

  return {
    getRate,
    lastUpdated,
    isLive,
    isLoading,
    refreshRates: loadRates,
  };
}
