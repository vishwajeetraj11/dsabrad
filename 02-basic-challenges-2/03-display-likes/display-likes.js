function displayLikes(arr) {
    const numUsers = arr.length;
    let likeStatement = '';
    if(numUsers === 0) {
        likeStatement = 'no one likes this'
    } else if (numUsers === 1) {
        likeStatement = `${arr[0]} likes this`
    } else if (numUsers === 2) {
        likeStatement = `${arr[0]} and ${arr[1]} like this`
    } else if (numUsers === 3) {
        likeStatement = `${arr[0]}, ${arr[1]} and ${arr[2]} like this`
    } else {
        likeStatement = `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`
    }
    return likeStatement
}

module.exports = displayLikes;
