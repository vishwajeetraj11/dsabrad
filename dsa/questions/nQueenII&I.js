
const formatBoard = (board) => {
    let result = [];
    for(let col=0; col<board.length;col++) {
        let newRow = new Array(board.length).fill('');
        newRow[board[col]]='Q';
        result.push(newRow.join('.'));
    }
    return result
}

const solveNQueens = (n) => {
    const result = [];
    const dfs = (i,n,slate) => {
        // backtracking case
        let lastQ = i-1;
        for(let prevQ = 0; prevQ < lastQ; prevQ++) {
            // if column conflict
            if(slate[prevQ] === slate[lastQ]) return;
            // if diagonal conflict
            let rowDiff = Math.abs(prevQ-lastQ);
            let colDiff = Math.abs(slate[prevQ]-slate[lastQ])
            if(rowDiff===colDiff) return;
        }
        // base case
        if(i===n){
            result.push(slate);
            return;
        }
        // dfs recursive case
        for(let col = 0; col < n; col++) {
            dfs(i+1, n, slate.concat(col));
        }

    }
    dfs(0,n,[]);
    return result.map(board => formatBoard(board))
    // return result.length nQueen 2
}

console.log(solveNQueens(4))