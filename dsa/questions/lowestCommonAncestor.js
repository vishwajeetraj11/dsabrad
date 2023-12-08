/*
236. Lowest Common Ancestor of a Binary Tree
https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
*/

const lowestCommonAncestor = function(root, p,q) {
    let res = null;
    const backtracking = (node) => {
        if(node === null) return false;
        let left = backtracking(node.left);
        let right = backtracking(node.right);
        let curr = node === p||node===q;
        if(left+right+curr>=2) res = node;
        return left || right || curr;
    }
    backtracking(root);
    return res;
}