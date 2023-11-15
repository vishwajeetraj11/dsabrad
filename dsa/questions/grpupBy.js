// https://leetcode.com/problems/group-by/description/
/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    const res = {};
    for(let i=0; i<this.length; i++) {
        const key = fn(this[i]);
        if(!res.hasOwnProperty(key)) {
            res[key] = []
        }
        res[key].push(this[i])
    }
    return res
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */

// console.log([1,2,3,4,5,6,7,8,9].groupBy((n) => n>5))
console.log([
    [1, 2, 3],
    [1, 3, 5],
    // [1, 5, 9]
  ].groupBy(function (list) { 
    return String(list[0]); 
  }))