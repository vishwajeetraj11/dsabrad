/** 62. Unique Paths
https://leetcode.com/problems/unique-paths/submissions/
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const dp = [];
    for(let i=0; i<m; i++) {
        const row = [];
        for(let j=0; j<n; j++) {
            row.push(0);
        }
        dp.push(row)
    }

    for(let i=0; i<m; i++) {
        dp[i][0] = 1
    }
    for(let i=0; i<n; i++) {
        dp[0][i] = 1
    }

    for(let i=1; i<m; i++) {
        
        for(let j=1; j<n; j++) {
            dp[i][j] = dp[i-1][j]+dp[i][j-1]
        }
        
    }
    return dp[m-1][n-1]
};

console.log(uniquePaths(3,7))