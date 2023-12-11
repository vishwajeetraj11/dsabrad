// 1979. Find Greatest Common Divisor of Array
// https://leetcode.com/problems/find-greatest-common-divisor-of-array/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
const gcd = (a,b) => {
    if(!b) {
        return a;
    }
    return gcd(b,a%b);
}

var findGCD = function(nums) {
    let min=Infinity;
    let max=-Infinity;
    nums.forEach(num => {
        min = Math.min(min, num);
        max = Math.max(max, num);
    })
    return gcd(max,min)
};