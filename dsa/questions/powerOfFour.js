
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    if(n<=0) return false;
    let power = 0;
    while(n>1) {
        if(n%4 !== 0) {
            return false;
        }
        n = n/4;
        power++;
    }
    return power
};

console.log(isPowerOfFour(-1))
console.log(isPowerOfFour(0))
console.log(isPowerOfFour(1))
console.log(isPowerOfFour(4))
console.log(isPowerOfFour(8))
console.log(isPowerOfFour(16))
console.log(isPowerOfFour(80))
console.log(isPowerOfFour(27))
console.log(isPowerOfFour(0))