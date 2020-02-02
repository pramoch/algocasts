// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // #1
  return str.split('').reverse().join('');

  // #2
  // let value = '';
  // for (let i = str.length - 1; i >= 0; i--) {
  //   value += str[i];
  // }

  // return value;
}

module.exports = reverse;
