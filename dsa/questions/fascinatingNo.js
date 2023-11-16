/**
 * @param {number} n
 * @return {boolean}
 */
var isFascinating = function(n) {
    let num = String(n)+String(n*2)+String(n*3);
    const freq = {}
    for(let i=0; i<num.length; i++) {
        if(num[i] === '0') {
            return false;
        }
        freq[num[i]] = (freq[num[i]]||0)+1;
    }
    if(Object.keys(freq).length !== 9) return false
    for(key in freq) {
        if(freq[key] !== 1) {
            return false
        }
    }
    return true
};

console.log(isFascinating(267))