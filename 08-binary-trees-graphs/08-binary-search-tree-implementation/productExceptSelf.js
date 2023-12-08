// 238. Product of Array Except Self
// https://leetcode.com/problems/product-of-array-except-self/description/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const leftProd = [];
    const rightProd = [];
    const ans = [];
    let lp = 1;
    let rp = 1;
    for(let i=0; i<nums.length; i++) {
        leftProd.push(lp*nums[i]);
        lp*=nums[i];
        rightProd.push(rp*nums[nums.length-1-i]);
        rp*=nums[nums.length-1-i]
    }
    rightProd.reverse();

    for(let i=0; i<nums.length; i++) {
        ans.push(i > 0 ? leftProd[i-1] * (i=== nums.length-1 ? 1 : rightProd[i+1]) : rightProd[i+1])
    }

    return ans;
};

console.log(productExceptSelf([1,2,3,4]));
// console.log('first')
// M -> [1,2,3,4];
// L -> [1,2,6,24];
// R -> [24,24,12,4]

// A -> [24,12,8,6]

/*
For every index pick i-1 th element from left and i+1 for right;
for i=0 skip picking from left because i-1 = 0-1 = -1 (NAN)
*/