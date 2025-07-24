export function analyzeArray(arr) {
    const average = arr.reduce((prev, curr) => prev + curr, 0) / arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const length = arr.length;

    return { average, min, max, length };
}