function forEach (cb) {
    for(let i=0;i<this.length; i++) {
        cb(this[i], i, this)
    }
}


Array.prototype.myForEach = forEach;

const arr = [1,2,3,4,5];

arr.myForEach((element, index) => {
    console.log(element)
    console.log(index)
})