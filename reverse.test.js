import { reverseString } from './reverse.js';


test('Reverse abcd', () => {
    expect(reverseString('abcd')).toBe('dcba');
});

test('Reverse Abcd', () => {
    expect(reverseString('Abcd')).toBe('dcbA');
});

test('Reverse AbCd', () => {
    expect(reverseString('AbCd')).toBe('dCbA');
});

test('Reverse a b  Cd', () => {
    expect(reverseString('a b  Cd')).toBe('dC  b a');
});