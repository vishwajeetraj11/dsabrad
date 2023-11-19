/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const res = [];
    candidates.sort((a,b) => a-b)
    const dfs =(i,candidates, currentSum, slate)=> {
        if(currentSum < 0) return;
        if(currentSum === 0) {
            res.push(slate)
        }
        
        for(let j=i; j<candidates.length; j++) {
            if(i!==j&&candidates[j]===candidates[j-1]) {
                continue;
            }
            dfs(j+1,candidates, currentSum-candidates[j], slate.concat(candidates[j]))
        }
    };

    dfs(0,candidates, target, [])
    return res;
};

// console.log(combinationSum2([2,3,6,7], 8))
console.log(combinationSum2([ 1, 1, 2, 5, 6, 7, 10 ]    , 8))