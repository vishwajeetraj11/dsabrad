/** https://leetcode.com/problems/function-composition/description/
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    return function(x) {
        let result = x;
        functions.reverse().forEach(fn => {
            result = fn(result);
        })
        return result
    }
};

const createFn = compose([x => x+1, x=> x*x])

console.log(createFn(2))

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */