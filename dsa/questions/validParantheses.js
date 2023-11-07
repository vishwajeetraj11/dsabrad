const isValid = (str) => {
    const stack = [];

    for(let i=0; i<str.length;i++) {
      
        if(str[i] ==='(' || str[i]==='{' || str[i] === '[') {
            stack.push(str[i])
        } else if(str[i] ===')' || str[i]==='}' || str[i] === ']') {
           
            const top = stack[stack.length-1];
            if(top === '(' && str[i] === ')') {
                stack.pop()
            } else if (top === '{' && str[i] === '}') {
                stack.pop()
            } else if (top === '[' && str[i] === ']') {
                stack.pop()
            } else {
                stack.push(str[i])
            }
        }
    }
    return stack.length === 0
}

console.log(isValid('(]'))