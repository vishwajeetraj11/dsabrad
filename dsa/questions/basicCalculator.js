/** https://leetcode.com/problems/basic-calculator/description/
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    const stack = [];
    let sign = 1;
    let number = 0;
    let result = 0;

    for(let i=0; i<s.length; i++) {
        if(s[i] === ' ') continue
        if(!isNaN(s[i])) {
            number = number*10+parseInt(s[i]);
        }
        if(s[i] === '+') {
            result += sign*number;
            number = 0;
            sign = 1;
        } 
        if(s[i] === '-') {
            result += sign*number;
            sign = -1;
            number = 0;
        }
        if(s[i] === '(') {
            stack.push(result);
            stack.push(sign);
            number = 0;
            sign = 1;
            result = 0;
        }
        if(s[i] === ')') {
            console.log(number)
            result += number*sign;
            number = 0;
            let _sign = stack.pop();
            let _last_num = stack.pop();
            result *= _sign;
            result += _last_num;
        }
    }
    result += number*sign;
    return result;
};

// console.log(calculate("(1+(4+5+2)-3)+(6+8)"))
// console.log(calculate("(1+(4+5+2)-3)+(6+8)"))
console.log(calculate(" 2-1 + 2 "))
console.log(eval("(1+(4+5+2)-3)+(6+8)"))
// console.log(eval("(1+(4+5+2)-3)+(6+8)"))