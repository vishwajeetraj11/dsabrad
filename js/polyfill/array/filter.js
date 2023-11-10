function filter (cb) {
    let res = [];
    for(let i=0;i<this.length; i++) {
        if(cb(this[i], i, this)) {
            res.push(this[i])
        }
    }
    return res;
}


Array.prototype.myFilter = filter;

const arr = [1,2,3,4,5];

const returned = arr.myFilter((element, index) => {
    return index % 2 === 0
})

console.log(returned)