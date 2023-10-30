function findMissingLetter(letterArr) {
    // const letterArr = string.split('');
    const charCodeArr = letterArr.map(e => e.charCodeAt(0));


    let isDiscontinuousCharCode = -1;
    for(let i = 0; i<charCodeArr.length; i++) {
        if(charCodeArr[i]+1 !== charCodeArr[i+1]) {
            isDiscontinuousCharCode=charCodeArr[i]
            break;
        }
    }
    return String.fromCharCode(isDiscontinuousCharCode+1)

}

module.exports = findMissingLetter;
