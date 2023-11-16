/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {

    const backtrack = (i, n, temp) => {
        
        if(temp.length===n) {
            const str = temp.join('')
            if(!nums.includes(str)) {
                return str;
            }
            return;
        }

            const found = backtrack(i, n, temp.concat(0));
            if(found) return found;
            const st = backtrack(i, n, temp.concat(1));
            if(st) return st;
    }

    return backtrack(0, nums[0].length, [])
};
console.log(findDifferentBinaryString(["110101","111111","100010","010101","000011","111010"]))
console.log(findDifferentBinaryString(["10"]))


/**
 * @param {string[]} nums
 * @return {string}
 */
// fails TLE
// var findDifferentBinaryString = function(nums) {
//     const result = [];
//     const hash = [];

//     const backtrack = (i, n, temp) => {
        
//         if(temp.length===n) {
//             // if(numsHash[temp.join('')] || hash[temp.join('')]) return
//             console.log(nums)
//             console.log(hash)
//             if(nums.includes(temp.join('')) || hash.includes(temp.join(''))) return
//             // if(!numsHash[temp.join('')]) {
//             //     result.push(temp.join(''));
//             //     return;
//             // } 
//             result.push(temp.join(''));
//             // hash[temp] = temp.join('');
//             hash.push(temp.join(''));
//             return;
//         }

//         for(let i=0; i<n; i++) {
//             backtrack(i, n, temp.concat(0));
//             backtrack(i, n, temp.concat(1));
//         }
//     }

//     backtrack(0, nums[0].length, [])
//     console.log(result)
//     return result[result.length-1];
// };
