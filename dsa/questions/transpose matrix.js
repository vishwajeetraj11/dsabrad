/**
 * https://leetcode.com/problems/transpose-matrix/description/?envType=daily-question&envId=2023-12-10
 * 867. Transpose Matrix
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    const res = [];
    for(let i=0; i<matrix.length; i++) {
        for(let j=0; j<matrix[0].length; j++) {
            if(!(res[j] instanceof Array)) {
                res[j] = [];
            }
            res[j].push(matrix[i][j])
        }
    }
    return res;
};

console.log(transpose(
        [
            [1,2,3],
            [4,5,6]
        ]
))