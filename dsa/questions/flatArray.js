/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 * https://leetcode.com/problems/flatten-deeply-nested-array/
 */
var flat = function (arr, n) {
    const array = [];
    let depth = n;

    const recurse = (arr, depth, calls = 0) => {
        arr.forEach(elem => {
            if(elem instanceof Array && calls !== n) {
                recurse(elem, depth ,calls+1)
            } else {
                array.push(elem)
            }
        })
    }

    recurse(arr,depth,0)
    return array
};

console.log(flat([[1,2,3,[4,[5]]]], 1))