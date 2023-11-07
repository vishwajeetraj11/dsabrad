const palindromeNumber = (x) => {
    const strNumber = x+'';
    for(let i=0; i<strNumber.length;i++) {
        if(strNumber[i] !== strNumber[strNumber.length -1-i ])  return false
    }
    return true
}

console.log(palindromeNumber(-121))
console.log('first')

const palindromeNumberWithoutString = (x) => {
    let number = x;
    let reverse = 0;
    
        while(number>0) {
            const digit = number%10;
            reverse = reverse*10+digit;
            number = Math.floor(number / 10);
        }
        
    return x === reverse
}

console.log(palindromeNumberWithoutString(133))