const { Node, isValidBST } = require('./validate-bst');

// Create the binary tree:
//       8
//      / \
//     4   10
//    / \
//   2   6

const root = new Node(8);
const node10 = new Node(10);
const node4 = new Node(4);
const node2 = new Node(2);
const node6 = new Node(6);

root.left = node4;
root.right = node10;
node4.left = node2;
node4.right=node6;

const isValid = isValidBST(root);
