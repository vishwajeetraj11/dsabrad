/**
 * https://leetcode.com/problems/increment-submatrices-by-one/description/
 * 2536. Increment Submatrices by One
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[][]}
 */

var rangeAddQueries = function(n, queries) {
    let matrix = [];
    for(let i=0; i<n; i++) {
        const row = [];
        for(let j=0; j<n; j++) {
            row.push(0)
        }
        matrix.push(row);
    }
    for (let [i1, j1, i2, j2] of queries) {
        for (let i = i1; i <= i2; i++) {
            for (let j = j1; j <= j2; j++) {
                matrix[i][j]++;
            }
        }
    }
    return matrix
};


console.log(rangeAddQueries(
    3,
    [[1,1,2,2],[0,0,1,1]]
))