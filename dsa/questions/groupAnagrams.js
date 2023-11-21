
function anagramGrouping(wordArr) {
    const map = new Map();

        for(let j=0; j<wordArr.length; j++) {
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
    
    const arr =[];

    const mapKeys = Array.from(map.keys());

    mapKeys.forEach((key) => arr.push(map.get(key)));
    
    return arr
}


// console.log(anagramGrouping(["eat","tea","tan","ate","nat","bat"]))
console.log(anagramGrouping(['','']))