function wordFrequencyCounter(string) {
    const map=new Map();
    const arr = string.toLowerCase().split(/\W+/);
    arr.forEach((word) => {
        if (word === '') return;
        if(map.has(word)) {
            map.set(word, map.get(word)+1)
        } else {
            map.set(word, 1)
        }
    })
    return map;
}

module.exports = wordFrequencyCounter;
