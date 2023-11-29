// https://leetcode.com/problems/happy-number/

// const helper = (num) => String(num)
//                             .split('')
//                             .map(numStr => parseInt(numStr)*parseInt(numStr))
//                             .reduce((total, curr) => total+curr,0)

// const helper = (num) => {
//     if(!num) return 0;
//     let sum = 0;
//     let strNum = String(num).split('');
//     for(let i=0;i<strNum.length;i++) {
//         sum = sum + parseInt(strNum[i])*parseInt(strNum[i])
//     }
//     return sum;
// }

const helper = (num) => {
    if(!num) return 0;
    let sum = 0;
    let remainingNum=num;
    // let strNum = String(num).split('');
    while(remainingNum) {
        const current = remainingNum % 10;
        remainingNum = Math.floor(remainingNum / 10);
        sum = sum+current*current;
    }
    return sum;
}


const happyNumber =(num) => {
const seen = {};
let sum = num;
while(sum !==1 && !seen.hasOwnProperty(sum)) {
    seen[sum] = 1;
    sum = helper(sum);
} 
return sum === 1
}

console.log(happyNumber(19))


// 2nd version

const sumSquare1 = (num) => {
    let total = 0;
    while(num !== 0) {
        let lastDigit = num%10;
        num = Math.floor(num/10);
        total += Math.pow(lastDigit, 2);
    }
    return total;
}

const happyNumber1 = (n) => {
    let fast = n;
    let slow = n;
    while(true) {
        fast = sumSquare1(sumSquare1(fast));
        slow = sumSquare1(slow);
        if(fast === slow)  {
            return fast === 1
        }
    } 
}