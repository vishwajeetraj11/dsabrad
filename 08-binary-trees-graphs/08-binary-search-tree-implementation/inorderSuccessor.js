// 285 Inorder Successor in BST

const inorderSuccessor = (root, p) => {

     if(p.right) {
        let curr = p.right;
        let prev = null;
        while(curr) {
            prev = curr;
            curr = curr.left;
        }
        return prev;
     }
     
     let curr = root;
     let prev = null;

     while(curr !== p) {
        if(p.val < curr.val) {
            prev = curr;
            curr = curr.left;
        } else {
            curr = curr.right;
        }
     }
     return prev;
}