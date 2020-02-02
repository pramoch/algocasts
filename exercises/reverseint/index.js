// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n) {
//   let str = n.toString();
//   let minus = false;
//   if (str[0] === '-') {
//     minus = true;
//     str = str.substr(1);
//   }

//   let reversed = str.split('').reverse().join('');
//   let n2 = parseInt(reversed);
//   if (minus) {
//     n2 = 0 - n2;
//   }
//   return n2;
// }

function reverseInt(n) {
  const reversed = n.toString().split('').reverse().join('');
  return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
