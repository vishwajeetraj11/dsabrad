function reduce (cb, initialValue) {
    let res = initialValue;
    for(let i=0;i<this.length; i++) {
        res = cb(res, this[i])
    }
    return res;
}


Array.prototype.myReduce = reduce;

const arr = [1,2,3,4,5];
const arr1 = [{a:1,},{a:2}];

const initialValue = 0;
const returned = arr1.myReduce((total, current) => total+current.a, initialValue)
const returned1 = arr.reduce((total, current) => total+current, initialValue)

console.log(returned)

console.log(returned1)