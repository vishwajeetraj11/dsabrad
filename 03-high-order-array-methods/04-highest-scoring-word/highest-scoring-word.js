function highestScoringWord(str) {
    const arr = str.split(' ');
    const perWordScoreArr = arr.map(word => getWordScore(word));
    const maxScore = Math.max(...perWordScoreArr);
    const indexOfMaxScore = perWordScoreArr.findIndex((el) => el === maxScore);
    return arr[indexOfMaxScore];
}

const getWordScore = (word) => {
    const arr = word.split('');
    const scoreArr = arr.map(letter => letter.charCodeAt()-96);
    const score = scoreArr.reduce((score, curr) => score+curr, 0)
    return score;
}

// console.log(highestScoringWord('hello my name is xavier'))


module.exports = highestScoringWord;
