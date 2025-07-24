import { calculator } from './calculator.js';


test('Calculate 1 + 2', () => {
    expect(calculator.add(1, 2)).toBe(1 + 2);
});

test('Calculate 0.1 + 0.2', () => {
    expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
});

test('Calculate 3 - 2', () => {
    expect(calculator.subtract(3, 2)).toBe(3 - 2);
});

test('Calculate 4 / 3', () => {
    expect(calculator.divide(4, 3)).toBe(4 / 3);
});

test('Calculate 4 * 3', () => {
    expect(calculator.multiply(4, 3)).toBe(4 * 3);
});