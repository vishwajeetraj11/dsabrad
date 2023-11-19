/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const res = [];
    candidates.sort((a,b) => a-b)
    const dfs =(i,candidates, currentSum, slate)=> {

        if(currentSum < 0) return;
        if(currentSum === 0) {
            res.push(slate)
        }
        
        for(let j=i; j<candidates.length; j++) {
            dfs(j,candidates, currentSum-candidates[j], slate.concat(candidates[j]))
        }
    };

    dfs(0,candidates, target, [])
    return res;
};

console.log(combinationSum([2,3,6,7], 7))