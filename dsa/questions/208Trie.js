// 208. Implement Trie (Prefix Tree)
// https://leetcode.com/problems/implement-trie-prefix-tree/
class Trie {
    constructor() {
        this.root = {};
    }
    insert(word) {
        let node = this.root;
        for(let c of word) {
            if(node[c] == null) {
                node[c] = {}
            }
            node = node[c];
        }
        node.isWord = true;
    }
    traverse(word) {
        let node = this.root;
        for(let c of word) {
            node = node[c];
            if(node == null) return null;
        }
        return node;
    }

    search(word) {
        let node = this.traverse(word);
        return node !== null && node.isWord === true;
    }

    startsWith(prefix) {
        let node = this.traverse(prefix);
        return node !== null
    }
}