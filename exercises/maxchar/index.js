// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let count = {};
  let char;
  let maxCount = 0;

  for (let letter of str) {
    count[letter] = count[letter]++ || 1;
  }

  for (let key in count) {
    if (count[key] > maxCount) {
      char = key;
      maxCount = count[key];
    }
  }

  return char;
}

console.log(maxChar('abcdefghijklmnaaaaa'));

module.exports = maxChar;
