const pascalTriangle = (n) => {
    const arr = [];

    for(let i=0; i<n;i++) {
        if(!(arr[i] instanceof Array)) {
            arr[i] = []
        }
        for(let j=0; j<i+1; j++) {
            if(j===0||j===i) {
                arr[i][j] = 1
            } else {
                arr[i][j] = arr[i-1][j] + arr[i-1][j-1]
            }
        }
    }

    return arr
}

console.log(pascalTriangle(5))