function isPalindrome(string) {
    let newString = string.split('').filter(str => str !== ' ' && str !== ',').join('');
    console.log(newString)
    for(let i=0;i<newString.length;i++) {
        if(newString[i].toLowerCase() !== newString[newString.length-i-1].toLowerCase()) {
            return false;
        }
    }
    return true
}

console.log(isPalindrome('A man, a plan, a canal, Panama'))


module.exports = isPalindrome;
