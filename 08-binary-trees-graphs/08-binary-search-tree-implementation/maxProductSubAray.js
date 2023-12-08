
// https://leetcode.com/problems/maximum-product-subarray/description/
// 152. Maximum Product Subarray

const maxProductSubArray = (nums) => {
    if(nums.length === 1) {
        return nums[0];
    }

    let max = nums[0];
    let lp = 1;
    let rp = 1;

    for(let i=0; i<nums.length; i++) {
        lp = lp === 0 ? 1 : lp;
        rp = rp === 0 ? 1 : rp;

        lp *= nums[i];
        rp *= nums[nums.length-1-i]
        max = Math.max(max, Math.max(lp,rp))
    }

    return max
}

console.log(maxProductSubArray([-2,0,1]))
