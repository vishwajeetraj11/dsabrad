const diagonalTraverse = (mat) => {
    const m = mat.length;
    const n = mat[0].length;
    const ans = [];
    for(let i=0; i<m; i++) {
        for(let j=0; j<n; j++) {
            if(!(ans[i+j] instanceof Array)) {
                ans[i+j] = []
            }
            if(i===j || (i+j)%2 ===0) {
                ans[i+j].unshift(mat[i][j])
            } else {
                ans[i+j].push(mat[i][j])
            }
        }
    }
    return ans.flat()
}  

console.log((diagonalTraverse([[1,2,3],[4,5,6],[7,8,9]])))

