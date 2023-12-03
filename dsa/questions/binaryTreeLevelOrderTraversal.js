// 102 BINARY TREE LEVEL ORDER TRAVERSAL
// https://leetcode.com/problems/binary-tree-level-order-traversal/

/*
T: Traversing the tree only once: O(n)
S: O(n)
*/
const levelOrder = (root) => {
    if(!root) return [];

    const queue = [root];
    const result = [];

    while(queue.length) {
        let len = queue.length;
        result.push(queue.map(node => node.val));
        while(len--) {
            let node = queue.shift();
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
    }
    return result;
}