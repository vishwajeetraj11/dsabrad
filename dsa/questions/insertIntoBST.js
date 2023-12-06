
/*
701: Insert into a Binary Search Tree
https://leetcode.com/problems/insert-into-a-binary-search-tree/
*/

 function TreeNode(val, left, right) {
         this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
}
// Sol 1
const insertIntoBST = (root, val) => {
    const newNode = new TreeNode(val);
    if(!root) return newNode;
    let cur = root;

    while(cur) {
        if(val > cur.val) {
            if(!cur.right) { cur.right = newNode; return root; }
            cur = cur.right;
        } else {
            if(!cur.left) { cur.left = newNode; return root; }
            cur = cur.left;
        }
    }
}

const root = new TreeNode(30);
root.left = new TreeNode(29);
root.right = new TreeNode(31);

console.log(insertIntoBST(root, 20))

// Sol 2
const insertIntoBST1 = (root, val) => {
    const newNode = new TreeNode(val);
    if(!root) return newNode;
    let curr = root;
    let prev = null;

    while(curr) {
        if(val > curr.val) {
            prev = curr;
            curr = curr.right;
        } else {
            prev = curr;
            curr = curr.left;
        }
    }
    if(val < prev.val) prev.left = newNode;
    else prev.right = newNode;

    return root;
}