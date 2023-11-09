// https://leetcode.com/problems/final-value-of-variable-after-performing-operations/submissions/

/**
 * @param {string[]} operations
 * @return {number}
 */
// var finalValueAfterOperations = function(operations) {
//     let i=0;
//     let X=0;
//     while(i!==operations.length) {
//         const current = operations[i];
//         console.log(current)
//         eval(current)
//         i++;
//     }
//     return X

// };

// /**
//  * @param {string[]} operations
//  * @return {number}
//  */
// var finalValueAfterOperations = function(operations) {
//     let X=0;
//     while(operations.length) {
//         eval(operations.pop())
//     }
//     return X
// };


var finalValueAfterOperations = function(operations) {
    let i=0;
    let X=0;
    while(i!==operations.length) {
        const current = operations[i];
        current[1] === '+' ? X++ : current[0] === '+' ? ++X : current[1] === '-' ? X-- : --X
        i++;
    }
    return X

};

console.log(finalValueAfterOperations(["X++","++X", 'X++', 'X--']))