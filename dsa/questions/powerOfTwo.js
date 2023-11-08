// https://leetcode.com/problems/power-of-two/submissions/1094536833/


const powerOfTwo = (num) => {
    if(num<1) return false;
    let flag = true;
    while(num>1) {
        if(num%2 === 0) {
            num = num/2;
        } else {
            flag = false;
            break;
        }
    }
    
    return flag
}

console.log(powerOfTwo(0))
console.log(powerOfTwo(1))
console.log(powerOfTwo(2))
console.log(powerOfTwo(3))
console.log(powerOfTwo(4))
console.log(powerOfTwo(5))
console.log(powerOfTwo(8))