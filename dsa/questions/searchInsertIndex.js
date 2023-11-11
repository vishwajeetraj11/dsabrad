/**
 * https://leetcode.com/problems/search-insert-position/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let l=0; r=nums.length-1;
    let insertIndex = nums.length;
    
    while(l<=r) {
        const mid = Math.floor((l+r)/2);
        if(nums[mid] === target) return mid;
        else if (nums[mid] > target) {
            insertIndex = l;
            r--;
        } else {
            if(r === l) {
                insertIndex = r+1;
            } else {
                insertIndex = r;
            }
        l++;
        }
   }
   return insertIndex
};