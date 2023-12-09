// 1328. Break a Palindrome
// https://leetcode.com/problems/break-a-palindrome/

const breakPalindrome = (palindrome) => {
    if(palindrome.length === 0) return '';
    let arr = palindrome.split('');
    for(let i=0; i<Math.floor(arr.length/2); i++) {
        if(arr[i] !== 'a') {
            arr[i] = 'a';
            return arr.join('')
        }
    }
    arr[arr.length-1] = 'b';
    return arr.join('');
}
console.log(
    breakPalindrome('abccba'))