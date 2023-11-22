const sqrt = (x) => {
    if(x===0||x===1) return x;
    for(let i=2; i<=(x/2)+1; i++) {
        console.log(i)
        if(i*i === x) {
            return i
        } else if(i*i > x) {
            return i-1
        }
    }
}

console.log(sqrt(2))