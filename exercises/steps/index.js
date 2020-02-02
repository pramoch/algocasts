// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//   for (let i = 0; i < n; i++) {
//     let text = '';
//     for (let j = 0; j < n; j++) {
//       if (j <= i) {
//         text += '#';
//       }
//       else {
//         text += ' ';
//       }
//     }

//     console.log(text);
//   }
// }

function steps(n) {
  for (let i = 0; i < n; i++) {
    console.log('#'.repeat(i + 1) + ' '.repeat(n - 1 - i));
  }
}

module.exports = steps;
