function isPalindrome(string) {
    let newString = string.split('').filter(str => str !== ' ' && str !== ',').join('');
    for(let i=0;i<newString.length;i++) {
        if(newString[i].toLowerCase() !== newString[newString.length-i-1].toLowerCase()) {
            return false;
        }
    }
    return true
}



module.exports = isPalindrome;
