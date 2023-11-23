/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const hash = {};

    for(let i=0; i<nums.length; i++) {
        if(hash[nums[i]]) return true;
        hash[nums[i]] = (hash[nums[i]]||0)+1;
    }
    
    return false;
};

console.log(containsDuplicate([1,2,3,1]))