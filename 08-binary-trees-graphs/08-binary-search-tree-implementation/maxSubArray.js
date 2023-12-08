// 53 Maximum Sub array
// https://leetcode.com/problems/maximum-subarray/

const maxSubArray = (nums) => {
    if(nums.length === 1) {
        return nums[0];
    }

    let max = nums[0];
    let sum = nums[0];

    for(let i=1; i<nums.length; i++) {
        if(sum+nums[i]> nums[i]) {
            sum+=nums[i];
        } else {
            sum = nums[i];
        }
        max = Math.max(max,sum);
    }

    return max
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))