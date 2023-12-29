const setMatricesZero = (mat) => {
    const m=mat.length;
    const n=mat[0].length;

    let colSet = new Set();
    let rowSet = new Set();

    for(let i=0; i<m;i++) {
        for(let j=0; j<n; j++) {
            if(mat[i][j]===0) {
                if(!rowSet.has(i)) {
                    rowSet.add(i)
                }
                if(!colSet.has(j)) {
                    colSet.add(j)
                }
            }
        }
    }

    for(let i=0; i<m;i++) {
        for(let j=0; j<n; j++) {
            if(rowSet.has(i)||colSet.has(j)) {
                mat[i][j] = 0
            }
        }
    }

    return mat
};

console.log(
  setMatricesZero([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
);
