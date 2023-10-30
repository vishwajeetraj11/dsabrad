function countVowels(string) {
    let vowelsCount =0;
    let _string = string.toLowerCase()
    for(let i=0;i<string.length;i++) {
        if(_string[i]==='a'||_string[i]==='e'||_string[i]==='i'||_string[i]==='o'||_string[i]==='u') {
            vowelsCount++;
        }
    }
    return vowelsCount
}

module.exports = countVowels;
