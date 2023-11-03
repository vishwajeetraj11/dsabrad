const { Node, recDepthFirstTraversal } = require('./depth-first-traversal-recursive');

// Create a binary tree:      a
//                          /   \
//                         b     c
//                        / \    /
//                       d   e  f

const root = new Node('a');
root.left = new Node('b');
root.right = new Node('c');
root.left.left = new Node('d');
root.left.right = new Node('e');
root.right.left = new Node('f');

console.log(recDepthFirstTraversal(root))