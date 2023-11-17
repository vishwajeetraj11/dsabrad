//  https://leetcode.com/problems/subsets/
var subsets = function(nums) {
    const result = [];
    const bkt = (i, nums, slate) => {
        if(i === nums.length) {
            result.push(slate);
            return;
        }

        bkt(i+1, nums, slate.concat(nums[i]))
        bkt(i+1, nums, slate)
    }
    bkt(0, nums, [])
    return result;
};
console.log(subsets([1,2,3]))