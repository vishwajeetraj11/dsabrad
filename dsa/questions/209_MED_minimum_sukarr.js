/**
 * 209. Minimum Size Subarray Sum
// https://leetcode.com/problems/minimum-size-subarray-sum/
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen1 = function(target, nums) {
    let start = 0;
    let min = Infinity;
    let _target = target;
    let currentSum = 0;
    for(let i = 0; i<nums.length; i++) {
        const num = nums[i];
        currentSum += num;
        while(currentSum >= _target) {
            min = Math.min(min, i+1-start)
            currentSum = currentSum-nums[start];
            start++;
        }
    }
    return min === Infinity ? 0 : min
};

const minSubArrayLen = (target, nums) => {
    let result = Infinity;
    let left = 0;
    let sum = 0;
    for(let i=0; i<nums.length; i++) {
        sum += nums[i];
        while(sum >= target) {
            result = Math.min(i-left+1, result);
            sum -= nums[left++];
        }
    }
    return result === Infinity ? 0 : result
}

// console.log(minSubArrayLen(7,[2,3,1,2,4,3]))
console.log(minSubArrayLen(11,[1,2,3,4,5]))

console.log(minSubArrayLen1(11,[1,2,3,4,5]))