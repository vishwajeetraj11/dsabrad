/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function(s) {
//     if(!s.length) return 0
//     const globalHash = [];
//     let hash = {};
//     for(let i=0; i<s.length; i++) {
//         if(hash[s[i]]) {
//             globalHash.push(hash);
//             hash = {};
//             hash[s[i]] = 1;
//         } else {
//             hash[s[i]] = 1;
//         }
//         if(i === s.length-1) {
//             globalHash.push(hash)
//         }
//     }
//     console.log(globalHash)
//     return Math.max(...globalHash.map(e => Object.keys(e).length))
// };

var lengthOfLongestSubstring = function(s) {
    if(!s.length) return 0
    let hash = {};
    let start = 0;
    let max = 0;

    for(let i = 0; i<s.length; i++) {
        const char = s[i];
        hash[char] = hash[char] +1 || 1;
        while(hash[char] > 1) {
            let leftChar = s[start];
            if(hash[leftChar] > 1) {
                hash[leftChar]--;
            } else {
                delete hash[leftChar]
            }
            start++;
        }
        max = Math.max(max, i-start+1);
    }
    return max;
};

console.log(lengthOfLongestSubstring('abcabcbb'))
// console.log(lengthOfLongestSubstring('dvdf'))