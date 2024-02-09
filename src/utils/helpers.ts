export const formatCurrency = (value: number, roundTo: number = 2) => {
  if (Math.abs(value) < 0.01) {
    return parseFloat(value.toPrecision(roundTo)).toString();
  } else {
    return value.toFixed(roundTo);
  }
};

export function formatBigNumbers(number: number) {
  const suffixes = ["", "K", "M", "B", "T"];
  const tier = (Math.log10(Math.abs(number)) / 3) | 0;

  if (tier === 0) return number;

  const suffix = suffixes[tier];
  const scale = Math.pow(10, tier * 3);

  const scaled = number / scale;

  return scaled.toFixed(2) + suffix;
}
