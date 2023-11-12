/**
 * https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    const stack = [];
    let minAdd = 0;
    for(let i=0; i<s.length;i++) {
        
        if(s[i] === '(') {
            stack.push(s[i])
            console.log(stack)
        } 
        else if (s[i] === ')') {
            if(stack.length === 0) {
                minAdd++;
            } else{
                stack.pop();
            }
        }
    }
    console.log(minAdd)
    return stack.length === 0 ? minAdd : stack.length+minAdd
};