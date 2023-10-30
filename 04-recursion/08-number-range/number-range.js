function numberRange(start,end) {
    if(start===end) return [end];
    return [start].concat(numberRange(start+1, end))
}

module.exports = numberRange;
