// 120. Triangle
// https://leetcode.com/problems/triangle/description/
const minimumTotal = (triangle) => {
    const sumTriangle = [];
    triangle.forEach(row => {
        sumTriangle.push(new Array(row.length).fill(0))
    })
    sumTriangle[0] = triangle[0];

    for(let i=1; i<sumTriangle.length;i++) {
        for(let j=0; j<sumTriangle[i].length; j++) {
            if(j === 0) {
                sumTriangle[i][j] = sumTriangle[i-1][j]+triangle[i][j];
                console.log(sumTriangle[i][j])
            } else if(j === sumTriangle[i].length - 1) {
                sumTriangle[i][j] = sumTriangle[i-1][sumTriangle[i-1].length-1]+triangle[i][j];
            } else {
                sumTriangle[i][j] = Math.min(sumTriangle[i-1][j], sumTriangle[i-1][j-1])+triangle[i][j]
            }
        }
    }
    return Math.min(...sumTriangle[sumTriangle.length-1])
}

console.log(minimumTotal([[2],[3,4], [6,5,7], [4,1,8,3]]))