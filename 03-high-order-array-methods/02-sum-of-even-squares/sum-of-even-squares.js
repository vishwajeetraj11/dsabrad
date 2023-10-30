function sumOfEvenSquares(arr) {
    let sum = 0;
    arr.forEach(num => {
        if(num%2===0) {
            sum = sum+num*num
        }
    })
    return sum;
}

module.exports = sumOfEvenSquares;
