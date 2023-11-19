
/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    const res = [];
    let temp = [];
    arr.forEach((e, i) => {
        if(temp.length !== size) {
            temp.push(e);
            if(i===arr.length-1) {
                res.push(temp)
            }
        } else {
            res.push(temp);
            temp = [e];
            if(i===arr.length-1) {
                res.push(temp)
            }
        }
    })
    return res
};

console.log(chunk([1,2,3,4,5,6], 2))