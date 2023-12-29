/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths2 = function(obstacleGrid) {
    const m=obstacleGrid.length;
    const n = obstacleGrid[0].length;

        if (obstacleGrid[0][0] === 1) {
          return 0;
        }

    const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
    dp[0][0] = 1;

    for (let i = 1; i < m; i++) {
        dp[i][0] = (obstacleGrid[i][0] === 0 && dp[i - 1][0] === 1) ? 1 : 0;
      }
      
      for (let j = 1; j < n; j++) {
        dp[0][j] = (obstacleGrid[0][j] === 0 && dp[0][j - 1] === 1) ? 1 : 0;
      }
    for(let i=1; i<m; i++) {
        
        for(let j=1; j<n; j++) {
            if (obstacleGrid[i][j] === 0) {
            const aboveElem = dp[i-1][j]
            const leftElem =  dp[i][j-1]
            dp[i][j] = aboveElem + leftElem;
            }
        }
        
    }
    return isNaN(dp[m-1][n-1]) ? 0 : dp[m-1][n-1]
};
console.log(uniquePaths2([[0,0,0],[0,1,0],[0,0,0]]))
console.log(uniquePaths2([[1,0]]))
console.log(uniquePaths2([
    [0,0],
    [1,1],
    [0,0]
]))