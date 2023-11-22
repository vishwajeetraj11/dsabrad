/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(n === 0) return 1;
    if (n < 0) {
        x = 1 / x;
        n = -n;
      }
    return x*myPow(x, n-1)
};

console.log(myPow(2.00000,-2))