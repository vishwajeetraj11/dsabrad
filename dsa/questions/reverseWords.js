/** https://leetcode.com/problems/reverse-words-in-a-string/?envType=study-plan-v2&envId=leetcode-75
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const arr = s.trim().split(' ');
    const revArr = [];
    for(let i=arr.length-1; i>=0; i--) {
        if(arr[i] === '') continue
        revArr.push(arr[i]);
    }
    return revArr.join(' ')
};

console.log(reverseWords("a good   example"))