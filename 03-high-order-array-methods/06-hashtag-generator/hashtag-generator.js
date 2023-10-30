function generateHashtag(string) {
    if(string.length > 140 || string.length ===0) return false;
    // const updatedString = string.replace(' ', '');
    return `#${string.split(' ').filter(Boolean).map(word => {
            return word[0].toUpperCase()+word.slice(1)
    }).join('')}`
}

module.exports = generateHashtag;

// console.log(generateHashtag(' Hello there thanks for trying my Kata'))