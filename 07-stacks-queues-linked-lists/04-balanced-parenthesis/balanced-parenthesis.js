const Stack = require('./stack');

function balancedParenthesis(string) {
    const stringArr = string.split('');
    const stack = new Stack();
    
 
    for(let i = 0; i<string.length;i++){
        if(string[i] ==='(') {
            stack.push('(')
        } else if(string[i] === ')') {
            if(stack.isEmpty()) {
                return false
            }
            stack.pop()
        }
    }
    
    return stack.isEmpty();

}

module.exports = balancedParenthesis;
