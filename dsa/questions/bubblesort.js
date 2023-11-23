/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    for(let i=0; i<nums.length; i++) {
        for(let j=i; j<nums.length-1; j++) {
            if(nums[i] > nums[j]) {
                [nums[i], nums[j]] = [nums[j], nums[i]]
            }
        }
    }
    return nums
};

console.log(sortArray([5,1,3,2,4]))