// 150 Evaluate Reverse Polish Notation
// https://leetcode.com/problems/min-stack/

// sol 1
const evalRPN = (tokens) => {
    const stack = [];

    for(let i=0; i<tokens.length; i++) {
        if(!isNaN(tokens[i])) {
            stack.push(tokens[i])
        } else if(isNaN(tokens[i])) {
            switch(tokens[i]) {
                case '+': {
                    const num1 = stack.pop();
                    const num2 = stack.pop();
                    stack.push(parseInt(num1)+parseInt(num2));       
                    break
                }
                case '-': {
                    const num1 = stack.pop();
                    const num2 = stack.pop();
                    stack.push(parseInt(num2)-parseInt(num1));
                    break
                }
                case '*': {
                    const num1 = stack.pop();
                    const num2 = stack.pop();
                    stack.push(parseInt(num1)*parseInt(num2));
                    break
                }
                case '/': {
                    const num1 = stack.pop();
                    const num2 = stack.pop();
                    const res = Math.trunc(parseInt(num2)/parseInt(num1));
                    stack.push(res === -0 ? 0: res);
                    break
                }
            }
        }
    }
    return stack.pop()
}

// console.log(evalRPN(["2", '1','+','3','*']))
// console.log(evalRPN(["4","13","5","/","+"]))
console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]))

// sol 2
const evalRPN1 = (tokens) => {
    const stack = [];
    const operators = {
        "+": (num1, num2) => num1+num2,
        "-": (num1, num2) => num1-num2,
        "*": (num1, num2) => num1*num2,
        "/": (num1, num2) => Math.trunc(num1/num2),
    }

    for(let i=0; i<tokens.length; i++) {
        const token = tokens[i];
        if(operators[token]) {
            let num2 = stack.pop();
            let num1 = stack.pop();
            stack.push(operators[token](num1, num2))
        } else {
            stack.push(parseInt(token))
        }
    }
    return stack.pop();
}