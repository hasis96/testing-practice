function caesarCipher(string, shift) {
  const cipher = [];
  const lowerString = string.toLowerCase();

  for (let i = 0; i < lowerString.length; i += 1) {
    const char = lowerString[i];

    if (/[^a-z]/.test(char)) {
      cipher.push(char);
    } else {
      let ascii = char.charCodeAt(0) + shift;

      while (ascii > 122) {
        ascii = (ascii - 122) + 96;
      }
      cipher.push(String.fromCharCode(ascii));
    }
  }
  return cipher.join('');
}

module.exports = caesarCipher;
