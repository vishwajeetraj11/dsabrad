/** https://leetcode.com/problems/combinations/
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const result = [];
    const nums = [];
    for(let i=0; i<n; i++) {
        nums.push(i+1)
    }


    const dfs = (i, k, nums, slate) => {
        if(i===k) {
            result.push(slate);
            return;
        }
        
        for(let j=0;j<nums.length; j++) {
            dfs(i+1, k, nums.slice(j+1), slate.concat(nums[j]))
        }

    }

    dfs(0, k,nums, [])

    return result
};

console.log(combine(4,2))