function reverseString(string) {
    // 1.
    // const reversed = string.split('').reverse().join('');
    // return reversed;

    // 2.
    let reversed = '';
    for(let i =0;i<string.length;i++) {
        console.log(string[string.length -1- i])
        reversed = reversed + string[string.length -1- i]
    }
    return reversed
}

module.exports = reverseString;

console.log(reverseString('apples'))