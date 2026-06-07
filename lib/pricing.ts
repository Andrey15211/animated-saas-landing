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

export function estimateMonthlyCost(leads: number) {
  const volume = clamp(leads, 0, 100_000);

  if (volume <= 2_500) return 49;
  if (volume <= 5_000) return interpolate(volume, 2_500, 5_000, 49, 99);
  if (volume <= 25_000) return interpolate(volume, 5_000, 25_000, 99, 229);

  return interpolate(volume, 25_000, 100_000, 229, 649);
}
