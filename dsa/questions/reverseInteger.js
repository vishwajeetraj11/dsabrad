/**
 * https://leetcode.com/problems/reverse-integer/description/
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let isNegative = false;

    if(x<0) {
        isNegative =  true;
    }

    let abs = Math.abs(x);
    console.log(abs)
    let reverse = 0;
    
    while(abs) {
        reverse = reverse*10 + abs%10;
        console.log(reverse)
        abs = Math.floor(abs/10);
    }
    if(reverse> Math.pow(2, 31)-1) return 0
    return isNegative ? -reverse :reverse
};

console.log(reverse(1534236469))