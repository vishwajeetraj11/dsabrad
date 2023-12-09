// https://leetcode.com/problems/kth-smallest-element-in-a-bst/description/
// 230. Kth Smallest Element in a BST

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    const arr = [];
    const inOrder = (root) => {
        if(!root) return null;
        inOrder(root.left);
        arr.push(root.val);
        inOrder(root.right);
    }
    inOrder(root);
    return arr[k-1]
};