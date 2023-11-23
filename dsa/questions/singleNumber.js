/** https://leetcode.com/problems/single-number-ii/description/?envType=study-plan-v2&envId=top-interview-150
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i += 3) {
        if (nums[i] !== nums[i + 1]) {
            return nums[i];
        }
    }
};

console.log(singleNumber([0,1,0,1,0,1,99]))