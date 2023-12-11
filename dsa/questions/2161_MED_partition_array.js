/**
 * 2161. Partition Array According to Given Pivot
https://leetcode.com/problems/partition-array-according-to-given-pivot/description/
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    if(nums.length === 1) return nums;
    const left = [], right = [], equal = [];
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] === pivot) {
            equal.push(nums[i]);
            continue
        }
        if (nums[i] < pivot) {
          left.push(nums[i]);
        } else {
          right.push(nums[i]);
        }
      }
      return [...left, ...equal, ...right]
};

console.log(pivotArray([9,12,5,10,14,3,10], 10))