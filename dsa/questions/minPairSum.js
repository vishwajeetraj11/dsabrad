/** https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/description/?envType=daily-question&envId=2023-11-17
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    nums.sort((a,b) => a-b);
    let l=0, r=nums.length-1;
    let maxSum = 0;
    console.log(nums)
    while(r>l) {
        console.log(maxSum)
        maxSum = Math.max(maxSum,nums[r]+nums[l])
        r--;
        l++;
    }
    return maxSum;
};

console.log(minPairSum([9,2,10,1,10,4,8,9,7,6,8,10,8,6,5,4,3,4,2,10]))
console.log(minPairSum([3,5,2,3]))

console.log(Math.max)