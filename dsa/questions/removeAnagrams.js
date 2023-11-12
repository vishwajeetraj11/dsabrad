
// https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/

/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function(words) {
    var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    const freq1 = {}, freq2={};
    
    for(let i=0; i<s.length;i++) {
        freq1[s[i]] = (freq1[s[i]]||0)+1
        freq2[t[i]] = (freq2[t[i]]||0)+1
    }
    let isValid = true;
    Object.keys(freq1).forEach((key) => {
        if(freq1[key] !== freq2[key]) {
            isValid = false;
        }
    })

    return isValid
    };

    let arr = [words[0]];
    let j=0;
    for(let i=0; i<words.length;i++) {
        if(isAnagram(arr[j], words[i])) {
        } else {
            arr.push(words[i])
            j++;
        }
    }
    return arr
};
console.log(removeAnagrams(["abba","baba","bbaa","cd","cd"]))