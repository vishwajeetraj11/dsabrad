// 2352. Equal Row and Column Pairs
// https://leetcode.com/problems/equal-row-and-column-pairs/
/**
 * @param {number[][]} grid
 * @return {number}
 */
// var equalPairs = function(grid) {
//     const r = grid.length;
//     const c = grid[0].length;
//     console.log(r)
//     console.log(c)
//     const rowHash = {};
//     const columnHash = {};
//     for(let i=0; i<r; i++) {
//         const key = grid[i].join(',')+i;
//         // console.log(key)
//         rowHash[key] = (rowHash[key]||0)||1
//     }


//     for(let i=0; i<r; i++) {
//         const colsData = [];
//         for(let j=0; j<c; j++) {
//             colsData.push(grid[j][i])
//         }
//         const key = colsData.join(',')+i;
//         columnHash[key] = (columnHash[key]||0)||1
//     }

//     const rows = Object.keys(rowHash).map((r,i) => r.split('').slice(0,r.length-1).join(''))
//     const columns = Object.keys(columnHash).map((r,i) => r.split('').slice(0,r.length-1).join(''))
//     let count = 0;
//     console.log(rows)
//     console.log(columns)
//     for(let i=0; i<r.length; i++) {
//         for(let j=0; j<c.length; j++) {
//             if(rows[i] === columns[j]) {
//                 count++;
//             }
//         }
//     }
//     return count
// };

var equalPairs = function(grid) {

    const n = grid.length
    let count = 0
    const rows = new Map()

    for(let r = 0; r < n; r++){
        const row = JSON.stringify(grid[r])
        rows.set(row, 1 + (rows.get(row) || 0))
    }

    for(let i=0; i<grid.length; i++) {
        const colsData = [];
        for(let j=0; j<grid.length; j++) {
            colsData.push(grid[j][i])
        }
        count+= rows.get(JSON.stringify(colsData))||0
    }
    
    return count
};

console.log(equalPairs([
    [3,1,2,2],
    [1,4,4,5],
    [2,4,2,2],
    [2,4,2,2]
]))

// console.log(equalPairs(
//     [
//     [8,8,8,8,8,8,10,8,8,8,8,8,8,8,8],
//     [8,8,8,8,8,8,19,8,8,8,8,8,8,8,8],
//     [8,8,8,8,8,8,6,8,8,8,8,8,8,8,8],
//     [8,8,8,8,8,8,6,8,8,8,8,8,8,8,8],
//     [8,8,8,8,8,8,4,8,8,8,8,8,8,8,8],
//     [8,8,8,8,8,8,14,8,8,8,8,8,8,8,8],
//     [6,6,6,6,6,6,7,6,6,6,6,6,6,6,6],
//     [8,8,8,8,8,8,17,8,8,8,8,8,8,8,8],
//     [8,8,8,8,8,8,16,8,8,8,8,8,8,8,8],
//     [8,8,8,8,8,8,19,8,8,8,8,8,8,8,8],
//     [8,8,8,8,8,8,6,8,8,8,8,8,8,8,8],
//     [8,8,8,8,8,8,16,8,8,8,8,8,8,8,8],
//     [8,8,8,8,8,8,10,8,8,8,8,8,8,8,8],
//     [8,8,8,8,8,8,19,8,8,8,8,8,8,8,8],
//     [8,8,8,8,8,8,4,8,8,8,8,8,8,8,8]
// ]
// ))

// console.log(equalPairs([
//     [3,1,2,2,3,2,1,2,3,2,3,2,1],
//     [1,4,4,5,5,6,5,4,3,2,5,3,2],
//     [2,4,2,2,4,5,4,3,2,4,2,3,3],
//     [2,4,2,2,7,6,5,4,3,2,5,6,4],
//     [2,4,2,2,7,6,5,4,3,2,5,6,4],
//     [2,4,2,2,7,6,5,4,3,2,5,6,4],
//     [2,4,2,2,7,6,5,4,3,2,5,6,4],
//     [2,4,2,2,7,6,5,4,3,2,5,6,4],
//     [2,4,2,2,7,6,5,4,3,2,5,6,4],
//     [2,4,2,2,7,6,5,4,3,2,5,6,4],
//     [2,4,2,2,7,6,5,4,3,2,5,6,4],
//     [2,4,2,2,7,6,5,4,3,2,5,6,4],
//     [2,4,2,2,7,6,5,4,3,2,5,6,4],
// ]))