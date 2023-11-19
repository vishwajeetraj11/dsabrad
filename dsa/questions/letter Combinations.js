// /**
//  * @param {number[]} matchsticks
//  * @return {boolean}
//  */
// var makesquare = function(matchsticks) {
//     const obj = {};
//     matchsticks.forEach(e => {
//         obj[e] = (obj[e]||0)+1
//     })
//     let sum = 0;
//     matchsticks.forEach(e => {
//         sum = sum+e
//     })
//     return sum%2===0
// };

// console.log(makesquare([1,1,2,2,2]))

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const obj = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz',
    }
    const res = [];

    const dfs = (i, slate) => {
        if(i === digits.length) {
            res.push(slate.join(''))
            return;
        }

        const currentArr = obj[digits[i]];

        for(let j=0; j<currentArr.length; j++) {
            dfs(i+1, slate.concat(currentArr[j]))
        }
    }
    dfs(0, [])
    return res
};

console.log(letterCombinations('23'))