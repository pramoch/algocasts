// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let max = 0;
  let maxChar = '';
  let map = {};

  for (let char of str) {
    if (!map[char]) {
      map[char] = 1;
    }
    else {
      map[char]++;
    }

    if (map[char] > max) {
      max = map[char];
      maxChar = char;
    }
  }

  return maxChar;
}

module.exports = maxChar;
