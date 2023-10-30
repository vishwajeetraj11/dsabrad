function titleCase(string) {
    const arr = string.split(' ');
    for(let i =0;i<arr.length;i++) {
        let word = arr[i];
        word = word[0].toUpperCase() + word.slice(1);
        console.log(word)
        arr[i] = word 
    }
    return arr.join(' ');
}

module.exports = titleCase;
