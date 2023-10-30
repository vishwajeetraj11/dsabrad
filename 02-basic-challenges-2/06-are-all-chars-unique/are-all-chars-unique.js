function areAllCharactersUnique(str) {
    const freqency = {};
    let flag = true;
    for(let i = 0; i<str.length; i++) {
        if(freqency[str[i]]) {
            flag = false;
            break
        } else {
            freqency[str[i]] = 1
        }
    }
    return flag;

}

console.log(areAllCharactersUnique('abc'))

module.exports = areAllCharactersUnique;
