/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(Onums) {
    const results = [];
    Onums.sort((a,b) => a-b)
    const dfs = (i, nums, slate) => {
        if(slate.length === Onums.length) {
            results.push(slate)
            return;
        }
        for(let j=0; j<nums.length; j++) {
            if(j>0 && nums[j] === nums[j-1]) {
                continue
            }
            dfs(j+1, [...nums.slice(0,j), ...nums.slice(j+1)], slate.concat(nums[j]))
        }
    }
    dfs(0, Onums, [])
    return results;
};

console.log(permuteUnique([1,1,3]))
// const nums = [1,2,3]
// const i = 2;
// console.log([...nums.slice(0,i), ...nums.slice(i+1)])
