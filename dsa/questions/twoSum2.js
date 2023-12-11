/**
 * 167. Two Sum II - Input Array Is Sorted
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left =0;
    let right=numbers.length-1;
    while(left <= right) {
        const sum = numbers[left] + numbers[right];
        if(sum > target) {
            right--;
        } else if(sum < target) {
            left++;
        } else {
            return [left+1, right+1]
        }
    }
    return [-1,-1]
};

console.log(twoSum([2,7,11,15], 9))