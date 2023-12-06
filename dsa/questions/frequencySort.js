/**
 * 451. Sort Characters By Frequency
 * https://leetcode.com/problems/sort-characters-by-frequency/description/
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const freq = {};
    for(let i=0; i<s.length; i++) {
        freq[s[i]] = (freq[s[i]]||0)+1;
    }
    const sorted = Object.entries(freq).sort((a,b) => b[1]-a[1]);
    let r = '';
    for(let i=0; i<sorted.length; i++) {
        for(let j=0; j<sorted[i][1]; j++) {
            r=r+sorted[i][0]
        }
    }
    return r;
};

console.log(frequencySort('tree'))