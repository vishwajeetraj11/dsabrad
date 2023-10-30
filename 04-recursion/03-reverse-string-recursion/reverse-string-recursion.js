function reverseString(str) {
    if(str.length === 1) {
        return str[0]
    }
    return str[str.length-1] + reverseString(str.slice(0,str.length-1))
}

module.exports = reverseString;
