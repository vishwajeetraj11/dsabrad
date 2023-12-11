/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function(n) {
    if(n<2) return false;
    const isPalindromic = (str) => str === str.split('').reverse().join('');
    for(i=2; i<=n-2; i++) {
        const isBase = n.toString(i);
        if(!isPalindromic(isBase)) {
            return false;
        }
    }
    return true;
};

console.log(isStrictlyPalindromic(9))