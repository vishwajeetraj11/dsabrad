/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {

        const empty = [];
        for(let i=0; i<9; i++) {
            for(let j=0; j<9; j++) {
                if(board[i][j] === '.') {
                    empty.push({row:i,col:j})
                }
            }
        }

        const solve = (index) => {
            if(index>=empty.length) return true;

            const {row, col} = empty[index];

            for(let num=1; num<=9; num++) {
                if(isValid(row, col, board, num)) {
                    board[row][col] = String(num);
                    if(solve(index+1)) {
                        return true
                    }
                    board[row][col] = '.'
                }
            }
            return false;
        }

    solve(0);
};

const isValid = (row, col, board, num) => {

    for(let i=0; i<9; i++) {
        if(board[row][i] === String(num) || board[i][col] === String(num)) {
            return false;
        }
    }

    const boxRow = Math.floor(row/3)*3;
    const boxCol = Math.floor(col/3)*3;

    for(let i=boxRow; i<boxRow+3; i++) {
        for(let j=boxCol; j<boxCol+3; j++) {
            if(board[i][j] === String(num)) {
                return false;
            }
        }
    }
    return true;
}

console.log(solveSudoku([
        ["5","3",".",".","7",".",".",".","."],
        ["6",".",".","1","9","5",".",".","."],
        [".","9","8",".",".",".",".","6","."],
        ["8",".",".",".","6",".",".",".","3"],
        ["4",".",".","8",".","3",".",".","1"],
        ["7",".",".",".","2",".",".",".","6"],
        [".","6",".",".",".",".","2","8","."],
        [".",".",".","4","1","9",".",".","5"],
        [".",".",".",".","8",".",".","7","9"]
    ]))

// console.log(isValid(5,5,
//     [
//         ["5","3",".",".","7",".",".",".","."],
//         ["6",".",".","1","9","5",".",".","."],
//         [".","9","8",".",".",".",".","6","."],
//         ["8",".",".",".","6",".",".",".","3"],
//         ["4",".",".","8",".","3",".",".","1"],
//         ["7",".",".",".","2",".",".",".","6"],
//         [".","6",".",".",".",".","2","8","."],
//         [".",".",".","4","1","9",".",".","5"],
//         [".",".",".",".","8",".",".","7","9"]
//     ],
//     5
// ))