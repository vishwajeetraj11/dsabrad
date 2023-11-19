// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/
var maxProfit = function(prices) {
    let l=0;
    let r=1;
    let max = 0;
    while(r<prices.length) {
        if(prices[l]<prices[r]) {
            max = max + prices[r] - prices[l];
        } 
        l++;
        r++;
    }
    return max
};

console.log(maxProfit([7,1,5,3,6,4]))
