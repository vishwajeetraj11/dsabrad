function validAnagrams(word1, word2) {
    if(word1.length !== word2.length) return false

    const frequency1 = {};
    const frequency2 = {};

    word1.split('').forEach((letter,i)=> {
        frequency1[letter] = (frequency1[letter]||0)+1
    })

    const bool = word2.split('').every(letter => frequency1[letter]);
    if(!bool) return false;

    word2.split('').forEach((letter,i) => {
        frequency2[letter] = (frequency2[letter]||0)+1
    })

    const sumFrequencies1 = Object.values(frequency1).reduce((total, curr) => total+curr, 0)
    const sumFrequencies2 = Object.values(frequency1).reduce((total, curr) => total+curr, 0)
  
    return sumFrequencies1 === sumFrequencies2
}

module.exports = validAnagrams;

// const result = validAnagrams('hello', 'world');

// console.log(result);
