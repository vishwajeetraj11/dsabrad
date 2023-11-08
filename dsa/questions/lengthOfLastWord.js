// https://leetcode.com/problems/length-of-last-word/

// const lengthOfLastWord = (str) => {
//     const trimmedString = str.trim();
//     const strArr = trimmedString.split(' ').filter(Boolean);
//     return strArr[strArr.length-1].length
// }

const lengthOfLastWord = (str) => {
    let count = 0;
    for(let i=str.length-1;i>=0;i--) {
         if(str[i] !== ' ') {
             count++;
         } else if(count === 0) {
            continue
         } else {
            break;
         }
    }
 
    return count;
 }
console.log(lengthOfLastWord('Hello World'))

console.log(lengthOfLastWord("   fly me   to   the moon  "))

console.log(lengthOfLastWord('luffy is still joyboy'))