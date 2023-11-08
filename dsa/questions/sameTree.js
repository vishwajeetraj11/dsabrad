// https://leetcode.com/problems/same-tree/description/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    let arrp =[], arrq=[];

    const traverse = (node, arr) => {
        if(!node) {
            arr.push(null);
            return
        };
        arr.push(node.val);
        traverse(node.left, arr);
        traverse(node.right, arr);
        
    }

    traverse(p, arrp);
    traverse(q, arrq);

    if(arrp.length !== arrq.length) {
        return false;
    }

    for(let i=0;i<arrp.length;i++) {
        if(arrp[i] !== arrq[i]) {
            return false;
        }
    }
    return true

};