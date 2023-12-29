/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let updatedStr = '';
    const stack = [];

    for(let i=0;i<s.length;i++) {
        if(s[i] === ' ') continue;
        updatedStr += s[i];
        if(isNaN(s[i])) {
            stack.push(s[i])
        } else {
            stack.push(parseInt(s[i]))
        }
    }
    
    let num = 0;
    for(let i=0; i<stack.length; i++) {
        const char = stack[i];
        if(isNaN(char)) {
           switch(char) {
            case '+': {
                const res = num+stack.pop();
                stack.push(res)
                break
            }
            case '-': {
                const res = stack.pop()-num;
                stack.push(res)
                break
            }
            case '*': {
                const res = num*stack.pop();
                stack.push(res)
                break
            }
            case '/': {
                const res = Math.trunc(stack.pop()/num);
                stack.push(res)
                break
            }
            default: {
                break
            }
           }
        } else {
            num = parseInt(char);
        }
    }
    console.log(stack)
};

console.log(calculate("3 + 2 * 2"))


/**
 * @param {string} s
 * @return {number}
 */
var calculate1 = function(s) {
    let stack = [];
    let num = '';
    let sign = null
    // we loop till the full length of the array to account for last sign
    for(let i = 0; i <= s.length; i++){    
      const curr = s[i];
      //handle space
      if(curr === ' ') continue;
      //if char is a number
      if(!isNaN(curr)) {
        num+=curr;
    }
      //if we have a  sign + - / *
      if(isNaN(curr)){
        num = Number(num)
        switch(sign){
          case '+':
          case null:
            //we push the initial number into the stack
            stack.push(num)
            break;
          case '-':
            //we push any values after the subtraction sign as negative
            stack.push(-num)
            break; 
          case '*':
            //we pop the stack then multiply and push back
            stack.push(stack.pop()*num)
            break;
          case '/':
            //we pop the stack then devide and push back
            stack.push(parseInt(stack.pop()/num, 10))
            break;           
        }
        // sign becomes current sign
        sign = curr;
        // we reset num
        num = '';
      }
    }
    //we reduce the array adding positive and negative numbers
    return stack.reduce((a,b)=>{
      return a+b
    },0)
  };
