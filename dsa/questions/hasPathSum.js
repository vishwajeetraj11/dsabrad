// 112 Path Sum
// https://leetcode.com/problems/path-sum/

const hasPathSum = (root, targetSum) => {
    if(!root) return false;
    let hasPath = false;
    const dfs = (node, sum) => {
        if(node.left === null && node.right === null) {
            if(sum === node.val) {
                hasPath = true;
            }
            return 
        }
        if(node.left) {
            dfs(node.left, sum - node.val);
        }
        if(node.right) {
            dfs(node.right, sum -  node.val);
        }
    }
    dfs(root, targetSum);
    return hasPath
}