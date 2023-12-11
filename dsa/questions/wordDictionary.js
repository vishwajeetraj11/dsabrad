
class WordDictionary {
    constructor() {
        this.root = {};
    }
    addWord(word) {
        let node = this.root;
        for(let char of word) {
            if(node[char] == null) node[char] = {};
            node = node[char];
        }
        node.isWord = true;
    }

    search(word) {
       return this.dfs(word, this.root, 0)
    }

    dfs(word, root, index) {
        if(word.length === index) {
            return root.isWord ? true : false
        }
        let char = word[index];

        if(char === '.') {
            for(let key in root) {
                if(this.dfs(word, root[key], index+1)) return true
            }
        } else {
            if(root[char] != null) {
                return this.dfs(word, root[char], index+1)
            }
        }
        return false;
    }

}

const trie = new WordDictionary();
trie.addWord('bad')
trie.addWord('dad')
trie.addWord('mad')
trie.addWord('mad')
console.log(trie.search('pad'))