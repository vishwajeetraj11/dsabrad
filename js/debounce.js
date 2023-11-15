/**
 * https://leetcode.com/problems/debounce/description/
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
    let ctx;
    return function(...args) {
        if(ctx) clearTimeout(ctx);
        ctx = setTimeout(() => fn.apply(this, args), t)
    }
};


 const log = debounce(console.log, 100);
 log('Hello'); // cancelled
 log('Hello'); // cancelled
 log('Hello'); // Logged at t=100ms

// setTimeout(() => {
//     console.log('fee')
// },1000)