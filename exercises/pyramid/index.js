// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n) {
//   for (let row = 0; row < n; row++) {
//     let space = ' '.repeat(n - row - 1);
//     let text = space + '#'.repeat((2 * (row + 1)) - 1) + space;
//     console.log(text);
//   }
// }

function pyramid(n) {
  for (let row = 0; row < n; row++) {
    let text = '';
    for (let col = 0; col < 2*n - 1; col++) {
      if (col < n - 1 - row || col > n - 1 + row ) {
        text += ' ';
      }
      else {
        text += '#';
      }
    }
    console.log(text);
  }
}

pyramid(4);

module.exports = pyramid;
