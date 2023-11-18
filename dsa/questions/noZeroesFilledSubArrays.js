/** https://leetcode.com/problems/number-of-zero-filled-subarrays/description/
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function(nums) {
    const z = [];
    let temp = [];
    for(let i=0; i<nums.length; i++) {
        if(nums[i]===0) {
            temp.push(0)
        } else {
            z.push(temp)
            temp = []
        }
        if(i===nums.length-1) {
            z.push(temp)
        }
    }
    let count = 0;
    for(let i=0; i<z.length;i++) {
        let n = z[i].length
        count = count+ (n*(n+1))/2
    }

    return count
};

console.log(zeroFilledSubarray([0,0,0,2,0,0]))