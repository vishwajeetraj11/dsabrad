// 199. Binary Tree Right Side View
// https://leetcode.com/problems/binary-tree-right-side-view/

const rightSideView = (root) => {
    if(!root) return [];
    const result = [];
    const queue = [root];
    while(queue.length) {
        let len = queue.length;
        result.push(queue[queue.length-1].val)
        while(len--) {
            let node = queue.shift();
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
    }
    return result;
}