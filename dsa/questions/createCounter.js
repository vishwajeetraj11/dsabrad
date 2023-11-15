/** https://leetcode.com/problems/counter-ii/description/
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let count = init;
    return {
        increment: () => { count++; return count },
        decrement: () => {count--; return count},
        reset: () => { count = init; return count },
    }
};


const counter = createCounter(5)

console.log(counter.increment() )
console.log(counter.increment() )
console.log(counter.increment() )
console.log(counter.increment() )
console.log(counter.reset())
console.log(counter.decrement())
