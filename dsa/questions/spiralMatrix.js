/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const res = [];
    const len = matrix.length * matrix[0].length;
    let top = 0;
    let left = 0;
    let right = matrix[0].length-1;
    let bottom = matrix.length-1;

    while(res.length !== len) {
            for(let i=left; i<=right && res.length < len; i++) {
                res.push(matrix[top][i])
            }
            top++;
            for(let i=top; i<=bottom && res.length < len; i++) {
                res.push(matrix[i][right])
            }
            right--;
            for(let i=right; i>=left && res.length < len; i--) {
                res.push(matrix[bottom][i]);
            }
            bottom--;
            for(let i=bottom; i>=top && res.length < len; i--) {
                res.push(matrix[i][left]);
            }
            left++;
    }

    return res;
};

console.log(spiralOrder([
    [1,2,3],
    [4,5,6],
    [7,8,9]
]))
// [1,2,3,6,9,8,7,4,5]