export function caesarCipher(str, shift) {
    shift = shift % 26;
    return str.split('').map((char) =>
        isLetter(char) ? cipherChar(char, shift) : char).join('');
}

function isLetter(char) {
    return char >= 'A' && char <= 'Z' || char >= 'a' && char <= 'z';
}

function isLowerCase(char) {
    return char >= 'a' && char <= 'z';
}

function cipherChar(char, shift) {
    const charCode    = char.charCodeAt(0);
    const baseCode    = isLowerCase(char) ? 97 : 65;
    const newCharCode = baseCode + (charCode - baseCode + shift + 26) % 26 ;
    return String.fromCharCode(newCharCode);
}