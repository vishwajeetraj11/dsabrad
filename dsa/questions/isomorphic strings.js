/** https://leetcode.com/problems/isomorphic-strings
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    for (let i=0; i<s.length; i++) {
        if (s.indexOf(s[i], i + 1) !== t.indexOf(t[i], i + 1)) {
            return false;
        }
    }
    return true;
};

console.log(isIsomorphic('bbbaaaba', 'aaabbbba'))
// console.log(isIsomorphic('paper', 'title'))
// console.log(isIsomorphic('egg', 'add'))
// console.log(isIsomorphic('foo', 'bar'))