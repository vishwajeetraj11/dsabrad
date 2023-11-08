/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if(n<=0) return false;
    let power = 0;
    while(n>1) {
        if(n%3 !== 0) {
            return false;
        }
        n = n/3;
        power++;
    }
    return power
};

console.log(isPowerOfThree(-1))
console.log(isPowerOfThree(0))
console.log(isPowerOfThree(1))
console.log(isPowerOfThree(3))
console.log(isPowerOfThree(9))
console.log(isPowerOfThree(81))
console.log(isPowerOfThree(80))
console.log(isPowerOfThree(27))
console.log(isPowerOfThree(0))