const pascalTriangle = (n) => {
    const arr = [];
    arr[0] = [1];
    for(let i=1; i<n; i++) {
        if(!arr[i]) arr[i] = []
        for(let j=0; j<i+1; j++) {
            // arr[i][j] = j
            if(j===0) {
                arr[i][j] = 1
            } else if (j===i) {
                arr[i][j] = 1
            } else {
                arr[i][j] = arr[i-1][j-1]+arr[i-1][j]
            }
        }
        }
    return arr;
}

console.log(pascalTriangle(5))