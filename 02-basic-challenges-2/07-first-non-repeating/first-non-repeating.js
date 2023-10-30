function findFirstNonRepeatingCharacter(str) {
    let frequency = {}

    for(let i =0; i<str.length; i++) {
        if(frequency[str[i]]) {
            frequency[str[i]] = frequency[str[i]] + 1;
        } else {
            frequency[str[i]] = 1
        }
    }

    for(let i=0;i<str.length;i++) {
        if(frequency[str[i]] === 1) {
            return str[i]
        }
    }

    return null
}

// console.log(findFirstNonRepeatingCharacter('aa,ccd'))

module.exports = findFirstNonRepeatingCharacter;
