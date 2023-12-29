/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = (nums) => {
    let idx = nums.length-2;
    while (idx >= 0 && nums[idx] >= nums[idx + 1]) {
        idx--;
    }
    console.log(idx)
    if(idx >= 0) {
        let j = nums.length-1;
        while(j>=0 && nums[j] <= nums[idx]) {
         j--;
        }
        [nums[idx], nums[j]] = [nums[j], nums[idx]];
    }

    reverse(nums, idx + 1);
}


function reverse(nums, start) {
    let end = nums.length - 1;
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
}