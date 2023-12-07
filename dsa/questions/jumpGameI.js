/**
 * 55. Jump Game
 * https://leetcode.com/problems/jump-game/description/?envType=study-plan-v2&envId=top-interview-150
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let finalPosition = nums.length -1;
    for(let i=nums.length-2; i>=0; i--) {
        if(i+nums[i]>=finalPosition) {
            finalPosition = i;
        }
    }
    return finalPosition === 0
};

console.log(canJump([2,3,1,1,4]))
// console.log(canJump([3,2,1,0,4]))
// console.log(canJump([2,0]))
