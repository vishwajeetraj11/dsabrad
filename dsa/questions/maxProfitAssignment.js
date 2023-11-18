/** https://leetcode.com/problems/most-profit-assigning-work/description/
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function(difficulty, profit, worker) {
    let maxProfit = 0;
    for(let i=0; i<worker.length; i++) {
        let cp = 0;
        for(let j=0; j<difficulty.length; j++) {
            if(worker[i] >= difficulty[j]) {
                cp = Math.max(cp, profit[j]);
            }
        }
        maxProfit += cp
    }
    return maxProfit
};

// Input: difficulty = [2,4,6,8,10], profit = [10,20,30,40,50], worker = [4,5,6,7]
console.log(maxProfitAssignment([2,4,6,8,10],[10,20,30,40,50],[4,5,6,7]))
console.log(maxProfitAssignment([68,35,52,47,86],[67,17,1,81,3],[92,10,85,84,82]))