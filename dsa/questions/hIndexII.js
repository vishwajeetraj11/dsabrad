// 275. H-Index II
// https://leetcode.com/problems/h-index-ii/

/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    let hIndex = 0;
    for (let i = citations.length-1; i >=0; i--) {
        if (citations[i] >= (citations.length-i-1 + 1)) {
            hIndex = citations.length-i-1 + 1; 
        } else {
            break; 
        }
    }
    return hIndex;
};