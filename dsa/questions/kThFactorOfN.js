/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function(n, k) {
    let factorCount = 0;
    for(let i=0; i<=n/2; i++) {
        if(n%i === 0) {
            factorCount++;
        }
        if(factorCount === k) {
            return i
        }
    }
    if(factorCount+1 === k) {
        return n;
    }
    return -1;
};

console.log(kthFactor(24, 8))
// 1,2,3,4,6,8,12,24