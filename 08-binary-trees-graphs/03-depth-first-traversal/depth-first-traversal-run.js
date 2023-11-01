const { Node, depthFirstTraversal } = require('./depth-first-traversal');

// Create a binary tree:      a
//                          /   \
//                         b     c
//                        / \    /
//                       d   e  f

const root = new Node('a');

const b = new Node('b')
const c = new Node('c')
const d = new Node('d')
const e = new Node('e')
const f = new Node('f')

root.left = b;
b.left = d
b.right = e
root.right = c
c.left = f

const result = depthFirstTraversal(root);
console.log(result);
