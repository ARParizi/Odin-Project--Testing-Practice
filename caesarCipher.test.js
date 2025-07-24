import { caesarCipher } from './caesarCipher.js';


test('Cipher abCdEf, shift by 2', () => {
    expect(caesarCipher('abCdEf')).toBe('cdEfGh');
});

test('Cipher xyz, shift by 3', () => {
    expect(caesarCipher('xyz')).toBe('abc');
});

test('Cipher HeLLo, shift by 3', () => {
    expect(caesarCipher('HeLLo')).toBe('KhOOr');
});

test('Cipher Hello, World!, shift by 3', () => {
    expect(caesarCipher('Hello, World!')).toBe('Khoor, Zruog!');
});