function sumUpTo(num) {
    if(num<=0) {
        return 0;
    }
    return num+sumUpTo(num-1)
}

module.exports = sumUpTo;
