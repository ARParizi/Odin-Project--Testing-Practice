import { caesarCipher } from './caesarCipher.js';


test('Cipher abCdEf, shift by 2', () => {
    expect(caesarCipher('abCdEf', 2)).toBe('cdEfGh');
});

test('Cipher xyz, shift by 3', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('Cipher HeLLo, shift by 3', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test('Cipher Hello, World!, shift by 3', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});