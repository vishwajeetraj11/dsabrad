

const integerBreak = (n) => {
    const remainder = n % 3;
    const countOf3 = Math.floor(n / 3);

    if(n<=3) return n-1;
    let res=0;
    
    if (remainder === 1) {
        res = Math.pow(3, countOf3 - 1) * 4;
    } else if (remainder === 0) {
        res= Math.pow(3, countOf3);
    } else {
        res= Math.pow(3, countOf3) * 2;
    }
    return res;
}
