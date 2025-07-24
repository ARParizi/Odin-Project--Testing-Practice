import { capitalize } from './capitalize.js';


test('Capitalize abcd', () => {
    expect(capitalize('abcd')).toBe('Abcd');
});

test('Capitalize Abcd', () => {
    expect(capitalize('Abcd')).toBe('Abcd');
});

test('Capitalize AbCd', () => {
    expect(capitalize('AbCd')).toBe('AbCd');
});