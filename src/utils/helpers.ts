export const formatCurrency = (value: number) => {
    if (Math.abs(value) < 0.01) {
        return parseFloat(value.toPrecision(2)).toString();
    } else {
        return value.toFixed(2);
    }
}

export function formatBigNumbers(number) {
    const suffixes = ['', 'K', 'M', 'B', 'T'];
    const tier = Math.log10(Math.abs(number)) / 3 | 0;
  
    if (tier === 0) return number;
  
    const suffix = suffixes[tier];
    const scale = Math.pow(10, tier * 3);
  
    const scaled = number / scale;
  
    return scaled.toFixed(2) + suffix;
  }
