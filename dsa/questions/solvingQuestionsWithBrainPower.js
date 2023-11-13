/** https://leetcode.com/problems/solving-questions-with-brainpower/
 * @param {number[][]} questions
 * @return {number}
 */
// var mostPoints = function(q) {
//     let csum = 0;
//     let cskip = 0;
//     const arr = [];
//     // let questions = q.sort((a,b) => b[0]-a[0]);
//     // console.log(questions)
//     const n = questions.length;
//     let dp = new Array(n).fill(BigInt(0));
//     dp[n - 1] = questions[n - 1][0];
//     console.log(questions)
//     console.log(dp)

//     for(let i=0; i<questions.length; i++) {
//         for(let j=i; j<questions.length; j++) {
//             if(cskip) {
//                 cskip--;
//             } else {
//                 csum = csum + questions[j][0];
//                 cskip = questions[j][1]
//             }
//         }
//         arr.push(csum)
//         csum = 0;
//         cskip = 0;
//     }
//     console.log(arr)
//     return Math.max(...arr)
// };

var mostPoints = function(questions) {
    let obj={};
    return calc(0, questions, obj);
};

var calc = (i, arr, obj) => {
    if(i >= arr.length) return 0;
    if(obj[i]) return obj[i];
    obj[i] = Math.max(arr[i][0] + calc(arr[i][1]+i+1, arr, obj), calc(i+1,arr, obj));
    return obj[i]
}

console.log(mostPoints([[21,5],[92,3],[74,2],[39,4],[58,2],[5,5],[49,4],[65,3]]))


