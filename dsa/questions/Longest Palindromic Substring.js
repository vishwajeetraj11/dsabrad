/**
 * 5. Longest Palindromic Substring
 * https://leetcode.com/problems/longest-palindromic-substring/
 * @param {string} s
 * @return {string}
*/

// var longestPalindrome = function(s) {
//     if(s===''||s.length>1000) return false;
//     if(s.length===1) return s;
//    let updatedStr = s+'';
//     let longestPalindrome = ''; 
//     for(let i=0; i<updatedStr.length; i++) {
//         let l = i-1, r=i;
//         let currentPalindrome = updatedStr[i];
//         while(r>l) {
//             if(r<=0 || l<0) {
//                 longestPalindrome = currentPalindrome.length > longestPalindrome.length ? currentPalindrome : longestPalindrome;
//                 break;
//             }
//              if (updatedStr[l] === updatedStr[r+1]) {
//                 currentPalindrome = updatedStr.substring(l,r+2);
//                 l--; r += 2;
//             } else if(updatedStr[l] === updatedStr[r]) {
//                 currentPalindrome = updatedStr.substring(l,r+1);
//                 l--; r++;
//             }  else if(r===s.length&&isPalindrome(s)) {
//                 currentPalindrome = updatedStr.substring(l,r+1);
//                 l--; r++;
//             }  else {
//                 longestPalindrome = currentPalindrome.length > longestPalindrome.length ? currentPalindrome : longestPalindrome;
//                 break;
//             }
//         }
//     }
//     return longestPalindrome
// };

// function isPalindrome (string) {
//     if(string === '' && string.length > 1000) return false;
//     const updatedString = string.replaceAll(' ', '');
//     for(let i=0; i<updatedString.length;i++) {
//         if(updatedString[i] !== updatedString[updatedString.length -1-i]) return false
//     }
//     return true
// }


/**
 * @param {string} s
 * @return {string}
 */
const getPalindrome =(l,r,s) => {
    while(l>= 0 && r<s.length) {
        if(s[l]!==s[r]) break;
        l--;
        r++;
    }
    return [l, r];
}
var longestPalindrome = function(s) {
    let max = [0,1];
    for(let i=0; i<s.length;i++) {
        const odd = getPalindrome(i-1, i+1, s);
        const even = getPalindrome(i-1, i,s);
        const currMax = odd[1]-odd[0] > even[1]-even[0]?odd:even;
        max = max[1]-max[0]>currMax[1]-currMax[0]?max:currMax;
    }
    return s.slice(max[0]+1, max[1])
}

console.log(longestPalindrome("cbbd"))