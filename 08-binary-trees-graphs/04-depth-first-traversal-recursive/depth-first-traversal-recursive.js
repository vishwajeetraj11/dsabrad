class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function recDepthFirstTraversal(root) {
  const result=[];
 
  function traverse(node) {
    
    if(node!==null) {
      const data = node.data;
      result.push(data)
      if(node.left) {
        traverse(node.left);
      }
      if(node.right){
         traverse(node.right);
        }
    }
  }

  traverse(root)

  return result 
}

module.exports = {
  Node,
  recDepthFirstTraversal,
};
