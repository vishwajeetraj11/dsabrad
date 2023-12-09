

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

const root = new TreeNode(-10);
const node20 = new TreeNode(20);
root.left = new TreeNode(9)
root.right = node20;
node20.left = new TreeNode(15);
node20.right = new TreeNode(7)
console.log(root)

/**
 * https://leetcode.com/problems/binary-tree-maximum-path-sum/description/
 * 124. Binary Tree Maximum Path Sum
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    let max = -Infinity;
    const dfs = (node) => {
        if(!node) return 0;
        let left = Math.max(0, dfs(node.left));
        let right = Math.max(0, dfs(node.right));
        let currMax = left+node.val+right;
        max = Math.max(currMax, max);
        return node.val + Math.max(left, right);
    }
    dfs(root);
    return max;
};

console.log(maxPathSum(root))