const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(Number.isFinite(value) ? value : min, min), max);

const interpolate = (
  value: number,
  start: number,
  end: number,
  startPrice: number,
  endPrice: number,
) => {
  const progress = (value - start) / (end - start);
  return Math.round(startPrice + (endPrice - startPrice) * progress);
};

export function estimateMonthlyCost(leads: number, currency: "USD" | "RUB" = "USD") {
  const volume = clamp(leads, 0, 100_000);
  let usdPrice: number;

  if (volume <= 2_500) usdPrice = 49;
  else if (volume <= 5_000) usdPrice = interpolate(volume, 2_500, 5_000, 49, 99);
  else if (volume <= 25_000) usdPrice = interpolate(volume, 5_000, 25_000, 99, 229);
  else usdPrice = interpolate(volume, 25_000, 100_000, 229, 649);

  return currency === "RUB" ? usdPrice * 100 : usdPrice;
}
