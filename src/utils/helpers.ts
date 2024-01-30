export const formatCurrency = (value: number) => {
    if (Math.abs(value) < 0.01) {
        return parseFloat(value.toPrecision(2)).toString();
    } else {
        return value.toFixed(2);
    }
}
