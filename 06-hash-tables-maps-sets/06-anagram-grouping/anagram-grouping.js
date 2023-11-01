
const isAnagram = (word1, word2) => {
    if(word1.length !== word2.length) return false;
    const freq1 = {}, freq2 = {};
    word1.split('').forEach(letter => {
        freq1[letter] = (freq1[letter]||0)+1
    });
    word2.split('').forEach(letter => {
        freq2[letter] = (freq2[letter]||0)+1
    });
    let isAnagram = true;
    Object.entries(freq1).forEach(([key, value]) => {
        if(freq2[key] !== value) {
            isAnagram = false;
        }
    })
    return isAnagram
}

function anagramGrouping(wordArr) {
    const map = new Map();

    for(let i=0;i<wordArr.length;i++) {
        for(let j=0; j<wordArr.length; j++) {
            if(isAnagram(wordArr[i], wordArr[j])) {
                const sortedWord =  wordArr[j].split('').sort().join('');
               if(map.has(sortedWord)) {
                const words = map.get(sortedWord);
                const wordExists = words.find(word => wordArr[j] === word);
                if(wordExists) continue
                map.set(sortedWord, words.concat(wordArr[j]))
               } else {
                map.set(sortedWord, [wordArr[j]])
               }
            }
        }
    }
    
    const arr =[];

    const mapKeys = Array.from(map.keys());

    mapKeys.forEach((key) => arr.push(map.get(key)));
    
    return arr
}

const result = anagramGrouping(['cat','act', 'dog', 'god', 'tac']);
    


module.exports = anagramGrouping;
