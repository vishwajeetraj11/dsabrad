/**
 * @param {string} s
 * @return {string}
 */

// var sortVowels = function(s) {
//     const arr = [];
//     for(let i=0; i<s.length; i++) {
//         const letter = s[i].toLowerCase();
//         if(letter === 'a'||letter==='e'||letter==='i'||letter==='o'||letter==='u') {
//             arr.push([s[i], i])
//         }
//     }
// console.log(arr)
//     if(arr.length === 0) {
//         return s
//     }

//     for(let i=0; i<arr.length; i++) {
//         for(let j=0; j<arr.length-1; j++) {
//             if(arr[j][0].charCodeAt(0) > arr[j+1][0].charCodeAt(0)) {
//                 const temp = arr[j][0];
//                 arr[j][0] = arr[j+1][0];
//                 arr[j+1][0] = temp
//             }
//         }
//     }

//     let r  = ''
//     for(let i=0; i<arr.length; i++) {
//     for(let j=0; j<s.length; j++) {
//         if(j === arr[i][1]) {
//             r = r + arr[i][0]
//             break;
//         } else {
//             if(!r[j]) {
//                 r = r+s[j]
//             }
//         }
//      }
//     }   

//     if(s.length === r.length) {
//         return r
//     } else {
//         for(let i =r.length; i< s.length; i++) {
//             r = r+s[i];
//         }
//         return r
//     }
// };



/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
    const vow = ['a','e','i','o','u','A','E','I','O','U'];
    const arr = s.split('');
    let sortedVowels = arr.filter(ch => vow.includes(ch)).sort((a,b) => a.charCodeAt()-b.charCodeAt());
    for(let i=0, j=0; i<arr.length; i++) {
        if(vow.includes(arr[i])) {
            arr[i] = sortedVowels[j];
            j++;
        }
    }
    return arr.join('');
};

console.log(sortVowels('LQRamBOHfq'))
console.log(sortVowels('lEetcOde'))

console.log(sortVowels('LQRamBOHfq'))
// console.log(sortVowels('lEetcOde'))