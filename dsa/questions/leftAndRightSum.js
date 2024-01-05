/**
 * @param {number[]} nums
 * @return {number[]}
 * https://leetcode.com/problems/left-and-right-sum-differences/description/
 * 2574. Left and Right Sum Differences
 */
var leftRightDifference = function(nums) {
    const leftSumArr = [];
    const rightSumArr = [];
    let leftSum = 0;
    let rightSum = 0;
    for(let i=0; i<nums.length; i++) {
        leftSumArr.push(leftSum)
        leftSum = (leftSumArr[leftSumArr.length-1]||0)+nums[i];
        rightSumArr.push(rightSum);
        rightSum = (rightSumArr[rightSumArr.length-1]||0) + nums[nums.length-1-i];
    }
    rightSumArr.reverse();
    const diffArr = [];
    for(let i=0; i<nums.length; i++) {
        diffArr[i] = Math.abs(leftSumArr[i] - rightSumArr[i])
    }
    return diffArr
};

console.log(leftRightDifference([10,4,8,3]))
/*
    10, 4, 8, 3
lS  0
*/