
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const res =[];
    const dfs = (i, orgNums ,nums, slate) => {
        if(slate.length === orgNums.length) {
            res.push(slate)
            return;
        }
        for(let j=0; j<nums.length; j++) {
            dfs(j+1, orgNums,[...nums.slice(0,j), ...nums.slice(j+1)], slate.concat(nums[j]))
        }

    }
    dfs(0, nums ,nums, [])
    return res;
};

console.log(permute([1,2,3]))

