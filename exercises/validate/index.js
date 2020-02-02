// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

const Node = require('./node');

// function validate(node, min = null, max = null) {
//   if (max && node.data > max) {
//     return false;
//   }
//   else if (min && node.data < min) {
//     return false;
//   }

//   if (node.left && node.right) {
//     return validate(node.left, null, node.data) && validate(node.right, node.data, null);
//   }
//   else if (node.left) {
//     return validate(node.left, null, node.data)
//   }
//   else if (node.right) {
//     return validate(node.right, node.data, null);
//   }
//   else {
//     return true;
//   }
// }

function validate(node, min = null, max = null) {
  if (max !== null && node.data > max) {
    return false;
  }

  if (min !== null && node.data < min) {
    return false;
  }

  if (node.left && !validate(node.left, min, node.data)) {
    return false;
  }

  if (node.right && !validate(node.right, node.data, max)) {
    return false;
  }

  return true;
}

// function validate(node, min = null, max = null) {

// }

const n = new Node(10);
n.insert(5);
n.insert(15);
n.insert(0);
n.insert(20);

validate(n);

module.exports = validate;
