// https://leetcode.com/problems/house-robber/description/
// 198. House Robber
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(houses) {
    if(houses.length === 0) return 0;
    if(houses.length === 1) return houses[0];
    const dp = Array(houses+1).fill(0);
    dp[0] = houses[0];
    dp[1] = Math.max(houses[0], houses[1]);

    for(let i=2; i<houses.length; i++) {
        dp[i] = Math.max(houses[i]+dp[i-2], dp[i-1])
    }
    return Math.max(...dp) 
};

console.log(rob([1,3,1,3,100]))