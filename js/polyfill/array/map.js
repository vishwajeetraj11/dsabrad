function map (cb) {
    let res = [];
    for(let i=0;i<this.length; i++) {
        res.push(cb(this[i], i, this))
    }
    return res;
}


Array.prototype.myMap = map;

const arr = [1,2,3,4,5];

const returned = arr.myMap((element, index) => {
    console.log(element)
    console.log(index)
    return element*2
})

console.log(returned)