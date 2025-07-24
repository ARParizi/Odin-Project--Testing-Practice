export function caesarCipher(str, shift) {
    return str.split('').map((char) =>
         isLetter(char) ? cipherChar(char, shift) : char).join('');
}

function isLetter(char) {
  return /^[a-zA-Z]$/.test(char);
}

function isLowerCase(char) {
  return /^[a-z]$/.test(char);
}

function cipherChar(char, shift) {
    const charCode    = char.charCodeAt(0);
    const baseCode    = isLowerCase(char) ? 97 : 65;
    const newCharCode = baseCode + (charCode - baseCode + shift + 26) % 26 ;
    return String.fromCharCode(newCharCode);
}