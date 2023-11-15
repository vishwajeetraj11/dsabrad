/**
 * @return {null|boolean|number|string|Array|Object}
 * https://leetcode.com/problems/array-prototype-last/description/
 */
Array.prototype.last = function() {
    const empty = this.length === 0;
    return !empty ? this[this.length-1] : -1
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */

const arr = []

console.log(arr.last())