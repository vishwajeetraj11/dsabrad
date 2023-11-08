var toLowerCase = function(s) {
    let result = "";

    for(let i=0;i<s.length;i++) {
        console.log(s[i])
        console.log(s[i].charCodeAt(0))
        if(s[i].charCodeAt(0)>=65 && s[i].charCodeAt(0)<=90) {
            const letter = String.fromCharCode(s[i].charCodeAt(0)+32);
            s[i]=letter;
            result += letter;
        } else {
            result += s[i];
        }
    }
    return result;
};

console.log(toLowerCase("Hello"))