/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const ransomLettersFreq = {};
    const magazineFreq = {};
    for(let i=0; i<ransomNote.length; i++) {
        ransomLettersFreq[ransomNote[i]] = (ransomLettersFreq[ransomNote[i]]||0)+1
    }
    for(let i=0; i<magazine.length; i++) {
        magazineFreq[magazine[i]] = (magazineFreq[magazine[i]]||0)+1
    }

    let flag = true;
    Object.keys(ransomLettersFreq).forEach(key => {
        if(!(magazineFreq[key] >= ransomLettersFreq[key])) {
            flag = false;
        }
    })
    return flag
};

console.log(canConstruct('aaa','aaa'))