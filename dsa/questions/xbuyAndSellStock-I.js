/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(prices) {
//     let idxLow = 0;
//     let lowest = prices[0];

//     for(let i=0; i<prices.length; i++) {
//         if(lowest > prices[i]) {
//             lowest = prices[i];
//             idxLow = i;
//         }
//     }

//     if(idxLow === prices.length-1) {
//         return 0
//     }

//     let max = 0;
//     for(let i=idxLow; i<prices.length; i++) {
//         if(prices[i]>max && prices[i]>lowest) {
//             max = prices[i]
//         }
//     }
//     if(max===0) return 0
//     return max-lowest
// };
var maxProfit = function(prices) {
   let l=0;
   let r=1;
   let profit = 0;
   while(r<prices.length) {
    if(prices[r]-prices[l]>profit) {
        profit = Math.max(profit, prices[r]-prices[l])
    } else {
        l++;
    }
    r++;
   }
   return profit
};

console.log(maxProfit([2,4,1]))
console.log(maxProfit([7,1,5,3,6,4]))