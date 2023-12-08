/**
 * 153. Find Minimum in Rotated Sorted Array
 * https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let l = 0;
    let r = nums.length -1 ;
    while(l<r) {
        const mid = Math.floor((l+r)/2);
        if(nums[mid] > nums[r]) {
            l = mid+1;
        } else {
            r = mid;
        }
    }
    return nums[l]
};

console.log(findMin([3,4,5,1,2]))
console.log(findMin([4,5,6,7,0,1,2]))
console.log(findMin([11,13,15,17]))
console.log(findMin([3,1,2]))