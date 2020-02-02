// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function cleanString(str) {
  return str.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('');
}

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

// function getCharMap(str) {
//   const map = {};

//   for (let char of str.toLowerCase()) {
//     if (/[a-z]/.test(char)) {
//       if (!map[char]) {
//         map[char] = 1;
//       }
//       else {
//         map[char]++;
//       }
//     }
//   }

//   return map;
// }

// function anagrams(stringA, stringB) {
//   const mapA = getCharMap(stringA);
//   const mapB = getCharMap(stringB);

//   if (Object.keys(mapA).length !== Object.keys(mapB).length ) {
//     return false;
//   }

//   for (let key in mapA) {
//     if (mapA[key] !== mapB[key]) {
//       return false;
//     }
//   }

//   return true;
// }

// anagrams('rail safety', 'fairy tales');
// anagrams('hello', 'llohe');

module.exports = anagrams;
