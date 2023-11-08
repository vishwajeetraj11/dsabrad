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

