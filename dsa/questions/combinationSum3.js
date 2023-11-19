/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    const res = [];
    const arr = [];

    for(let i=1; i<=9; i++) {
        arr.push(i);
    }

    const dfs = (i, target, slate) => {
        if(target<0) return;

        if(slate.length === k) {
            if(target === 0) {
                res.push(slate)
                return;
            }
            return;
        }


        for(let j=i; j<arr.length; j++) {
            dfs(j+1, target-arr[j],slate.concat(arr[j]))
        }
    }

    dfs(0, n, [])
    return res;
};

console.log(combinationSum3(3,7))