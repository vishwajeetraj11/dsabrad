/**
 * @param {Function} fn
 * @return {Function}
 * https://leetcode.com/problems/memoize/
 */
function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);
        if(key in cache) {
            return cache[key];
        }
        cache[key] = fn.apply(this, args);
        return cache[key]
    }
}
let callCount = 0;
const sum = (a, b) =>{ callCount++; return a + b}
const memoFn = memoize(sum)

console.log(memoFn(2,2))
console.log(memoFn(2,2))
console.log(memoFn())
console.log(memoFn(1,2))
console.log(callCount)

    /** 
/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */