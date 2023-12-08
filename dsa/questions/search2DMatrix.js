// 74 Search a 2D Matrix
// https://leetcode.com/problems/search-a-2d-matrix/

const searchMatrix = (matrix, target) => {
    const rows = matrix.length;
    const cols = matrix[0].length;

    let left = 0;
    let right = rows*cols-1;

    while(left <= right) {
        let mid = Math.floor(left+(right-left));
        let midVal = matrix[Math.floor(right/cols)][right%cols]
        if(midVal === target) return true;
        if(target < midVal) right = mid - 1;
        else left = mid +1;
    }
    return false
}

console.log(searchMatrix([
    [1,3,5,7],
    [10,11,16,20],
    [23,30,34,60]
], 2))