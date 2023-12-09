// https://leetcode.com/problems/sum-root-to-leaf-numbers/description/
// 129. Sum Root to Leaf Numbers

  function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }
 
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
    let nums = [];
    const dfs = (node, s) => {
        if(!node) {
            return 0
        }
        s = s*10+node.val;
        if(!node.left && !node.right) {
                nums.push(s)
        }
        dfs(node.left, s);
        dfs(node.right, s);
    }
    dfs(root, 0);
    return nums.reduce((total, curr) => curr+total, 0)
};


// const root = new TreeNode(1);
// root.right = new TreeNode(0);


const root = new TreeNode(4);
root.right = new TreeNode(0);
const node9 = new TreeNode(9);
root.left = node9;
node9.left = new TreeNode(5);
node9.right = new TreeNode(1);


console.log(sumNumbers(root))

