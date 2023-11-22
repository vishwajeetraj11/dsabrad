// https://leetcode.com/problems/plus-one/description/?envType=study-plan-v2&envId=top-interview-150
var plusOne = function(digits) {
   let carry = 1;
   for(let i=digits.length-1; i>=0; i--) {
       let temp = (digits[i] + carry);
       digits[i] = temp % 10;
       carry = Math.floor(temp / 10);
   }
   return (carry==0) ? digits : [carry].concat(digits); 
};

console.log(plusOne([9,9]))