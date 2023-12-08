// 162 Find Peak Element
// 852. Peak Index in a Mountain Array

// https://leetcode.com/problems/find-peak-element/description/
// https://leetcode.com/problems/peak-index-in-a-mountain-array/description/
/**
 * @param {number[]} nums
 * @return {number}
 */
const findPeakElement = function(nums) {
    let l = 0;
    let r = 1;
    let peak = -Infinity;
    let peakIndex = 0;
    if(nums.length === 1) return 0;
    if(nums.length < 3) {
        if(nums[0] > nums[1]) {
            return 0
        } else {
            return 1
        }
    } 
    if(nums[0]>nums[1]) return 0;
    if(nums[nums.length-1] > nums[nums.length-2]) return nums.length-1;
        while(r<nums.length-1) {
            if(nums[l] < nums[r] && nums[r] > nums[r+1]) {
                const currPeak = Math.max(nums[r], peak);
                if(currPeak !== peak) {
                    peakIndex = r;
                }
            }
            r++;
            l++;
        }
    
    return peakIndex;
};

// more optimised
const findPeakElement1 = (nums) => {
    let l =0;
    let r = nums.length -1;
    while(l<r) {
        let mid = Math.floor((l+r)/2);
        if(nums[mid] > nums[mid+1]) {
            r = mid;
        } else {
            l = mid+1;
        }
    }
    return l
}