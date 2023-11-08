
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    const freq1 = {}, freq2={};
    
    for(let i=0; i<s.length;i++) {
        freq1[s[i]] = (freq1[s[i]]||0)+1
        freq2[t[i]] = (freq2[t[i]]||0)+1
    }
    let isValid = true;
    Object.keys(freq1).forEach((key) => {
        console.log(freq1)
        console.log(freq2)
        console.log(freq1[key], key)
        if(freq1[key] !== freq2[key]) {
            isValid = false;
        }
    })

    return isValid

};

console.log(isAnagram('car', 'rat'))