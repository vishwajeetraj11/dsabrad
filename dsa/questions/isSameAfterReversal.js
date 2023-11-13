/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
    if(num === 0) return 0
    if(num%10 === 0) return false
    return true;
};

// console.log(isSameAfterReversals(1800))
console.log(isSameAfterReversals(76))