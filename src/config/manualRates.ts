/**
 * Tasas gestionadas manualmente por DK Remesas (sin API).
 * Actualizar aquí cuando el cliente indique un nuevo valor.
 */
export const MANUAL_USD_RATES: Record<string, number> = {
  CUP: 800,
};

export function isManualRateCurrency(currency: string): boolean {
  return currency in MANUAL_USD_RATES;
}

export function getManualUsdRate(currency: string): number | null {
  return MANUAL_USD_RATES[currency] ?? null;
}
