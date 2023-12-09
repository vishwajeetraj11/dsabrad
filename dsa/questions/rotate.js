
const rotate = (matrix) => {
    for(let i=0; i<matrix.length; i++) {
        for(let j=i; j<matrix[i].length; j++) {
            [matrix[j][i], matrix[i][j]] = [matrix[i][j], matrix[j][i]]
        }
    }

    for(let i=0; i<matrix.length; i++) {
        for(let j=0; j<matrix[i].length/2; j++) {
            [matrix[i][j], matrix[i][matrix[i].length-1-j]] = [matrix[i][matrix[i].length-1-j], matrix[i][j]]
        }
    }
    console.log(matrix)
}

console.log(rotate([
    [1,2,3],
    [4,5,6],
    [7,8,9]
]))
