/**
 * @param {number[][]} grid
 * @return {number}
 */


var minPathSum = function(grid) {
    let dp = JSON.parse(JSON.stringify(grid));
    for(let i=0; i<grid.length; i++) {
        for(let j=0; j<grid[i].length; j++) {
            if (i === 0 && j === 0) continue;
            if (i === 0 && j !== 0) dp[i][j] = dp[i][j] + dp[i][j - 1];
            if (i !== 0 && j === 0) dp[i][j] = dp[i][j] + dp[i - 1][j];
            if (i !== 0 && j !== 0) dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + dp[i][j];
        }
    }
    return dp[dp.length-1][dp[0].length-1]
};

console.log(minPathSum([
    [1,3,1],
    [1,5,1],
    [4,2,1]
]))