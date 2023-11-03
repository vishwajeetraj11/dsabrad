class Node {
  constructor(data) {
    this.data = data;
    this.right = null;
    this.left = null;
  }
}

function maxDepth(root) {
  
   if(root === null) return [];

  const leftRoot = maxDepth(root.left);
  const rightRoot = maxDepth(root.right);

  return Math.max(leftRoot, rightRoot) + 1
  
}

module.exports = {
  maxDepth,
  Node,
};
