/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// only satisfits 3x3 matrix 
// var setZeroes = function(matrix) {
//     let found = false;
//     for(let i=0; i<matrix.length; i++) {
//         for(let j=0; j<matrix.length; j++) {
//             if(matrix[i][j] === 0) {
//                 found = true;

//                 matrix[i][j+1] = 0;
//                 matrix[i][j-1] = 0;
//                 matrix[i+1][j] = 0;
//                 matrix[i-1][j] = 0;
//                 break
//             }
//             if(found) break
//         }
//     }
//     console.log(matrix)
// };

// console.log(setZeroes([
//     [1,1,1],
//     [1,0,1],
//     [1,1,1]
// ]));

// org
// var setZeroes = function(matrix) {
//     let found = [];
//     let r = matrix.length;
//     let c = matrix[0].length;
//     for(let i=0; i<r; i++) {
//         for(let j=0; j<c; j++) {
//             if(matrix[i][j] === 0) {
//                 found.push([i,j])
//             }
//         }
//     }

//     for(let i=0; i<r; i++) {
//         for(let j=0; j<c; j++) {
//             for(let k=0; k<found.length; k++) {
//                 const [row, col] = found[k];
//                 matrix[row][j] = 0;
//                 matrix[i][col] = 0;
//             }
//         }
//     }
// };

var setZeroes = function(matrix) {
    let rowSet = new Set();
    let colSet = new Set();
    let r = matrix.length;
    let c = matrix[0].length;
    for(let i=0; i< matrix.length; i++) {
        for(let j=0; j<matrix[0].length; j++) {
            if(matrix[i][j] === 0) {
                if(!rowSet.has(i)) {
                    rowSet.add(i)
                }
                if(!colSet.has(j)) {
                    colSet.add(j)
                }
            }
        }
    }

    for(let i=0; i<matrix.length; i++) {
        for(let j=0; j<matrix[0].length; j++) {
            if(rowSet.has(i)||colSet.has(j)) {
                matrix[i][j]=0
            }
        }
    }

    console.log(matrix)
};

console.log(setZeroes([
    [1,1,1,0],
    [1,1,1,1],
    [1,1,1,1]
]));