// 113. Path Sum II
// https://leetcode.com/problems/path-sum-ii/

const hasPathSum = (root, targetSum) => {
    if(!root) return false;
    let paths = [];
    const dfs = (node, sum, slate) => {
        if(node.left === null && node.right === null) {
            if(sum === node.val) {
                slate.push(node.val);
                paths.push(slate);
            }
        }
        if(node.left) {
            dfs(node.left, sum - node.val, slate.concat(node.val));
        }
        if(node.right) {
            dfs(node.right, sum -  node.val, slate.concat(node.val));
        }
    }
    dfs(root, targetSum, []);
    return paths
}