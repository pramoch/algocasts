// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

const Node = require('./node');

function levelWidth(root) {
  let arr = [root];
  const answer = [];

  while (arr.length) {
    answer.push(arr.length);
    const newArr = [];
    arr.forEach((node) => {
      newArr.push(...node.children);
    });

    arr = newArr;
  }

  return answer;
}

module.exports = levelWidth;
