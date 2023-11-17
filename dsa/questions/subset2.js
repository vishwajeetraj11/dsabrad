// https://leetcode.com/problems/subsets-ii/
var subsetsWithDup = function(nums) {
    const result = new Set();
    const hash = {};
    const bkt = (i, nums, slate) => {
        if(i === nums.length) {
            if(hash[slate]) return
            hash[slate] = slate;
            result.add(slate)
            // result.push(slate);
            return;
        }

        bkt(i+1, nums, slate.concat(nums[i]))
        bkt(i+1, nums, slate)
    }
    bkt(0, nums, [])
    
    return Object.values(hash);
};

console.log(subsetsWithDup([4,4,4,1,4]))