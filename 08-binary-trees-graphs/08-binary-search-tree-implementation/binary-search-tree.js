class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        const node = new Node(data);

        if(this.root === null) {
             this.root = node;
        } else {

            let current = this.root;
            while(true) {
                // console.log(data, current.data)
                if(data < current.data) {
                    // console.log('left',current)
                    // traverse left
                    if(!current.left) {
                        current.left = node;
                         return this;
                    } else {
                        current = current.left;
                    }
                } else {
                    // console.log('right',current)
                    // traverse right
                    if(!current.right) {
                        current.right = node; 
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }

    }

    printTree() {
        const printNode = (node) => {
            if(node === null) return null;
            printNode(node.left);
            console.log(node.data)
            printNode(node.right);
        } 
        printNode(this.root)
    }

    lookup(data) {
        if(!this.root) return null;
        let current = this.root;
        while(true) {
            if(current.data === data) return current;
            if(current.data < data) {
                if(!current.right) {
                    return null;
                }
                current = current.right;
            } else {
                if(!current.left) {
                    return null;
                }
                current = current.left;
            }
        }
    }

    remove(value) {
        const removeNode = (node, value) => {
            
            if(node === null) return null;

            if(value < node.data) {
                node.left = removeNode(node.left, value)
                return node
            } else if (value > node.data) {
                node.right = removeNode(node.right, value)
                return node;
            } else {
                if(node.left === null) {
                    return node.right;
                } else if (node.right === null) {
                    return node.left;
                }

                let tempNode = node.right;
                while(tempNode.left !== null) {
                    tempNode = tempNode.left;
                }
                node.data = tempNode.data;
                node.right = removeNode(node.right, tempNode.data);
                return node
            }
        }

        this.root = removeNode(this.root, value)
    }
}

module.exports = { Node, BinarySearchTree };
