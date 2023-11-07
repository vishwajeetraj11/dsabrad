// https://leetcode.com/problems/length-of-last-word/

const lengthOfLastWord = (str) => {
    const trimmedString = str.trim();
    const strArr = trimmedString.split(' ').filter(Boolean);
    return strArr[strArr.length-1].length
}

console.log(lengthOfLastWord('Hello World'))

console.log(lengthOfLastWord("   fly me   to   the moon  "))

console.log(lengthOfLastWord('luffy is still joyboy'))