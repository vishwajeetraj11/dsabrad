const Stack = require('./stack');

function reverseStringStack(string) {
    const stack = new Stack();
    let reverseString = ''
    const stringArr = string.split('')
    stringArr.forEach((letter => stack.push(letter)));
    stringArr.forEach(letter => {
        reverseString=reverseString+stack.pop();
    })
    return reverseString;   
}

module.exports = reverseStringStack;
