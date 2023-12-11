// 1382. Balance a Binary Search Tree
// https://leetcode.com/problems/balance-a-binary-search-tree/description/

const inOrder = (root, arr) => {
    if(!root) return;
    inOrder(root.left);
    arr.push(root.val);
    inOrder(root.right);
}

const buildTree = (arr) => {
    if(arr.length === 0) return null;
    let mid = Math.floor(arr.length/2);
    let head = new TreeNode(arr[mid]);
    let left = arr.slice(0,mid);
    let right = arr.slice(mid+1);
    head.left = buildTree(left);
    head.right = buildTree(right);
    return head;
}

const balanceBST = (root) => {
    let arr = [];
    inOrder(root, arr);
    return buildTree(arr);
}