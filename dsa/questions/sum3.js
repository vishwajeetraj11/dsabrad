// 15. 3Sum
// https://leetcode.com/problems/3sum/

// brute force -> 3 for loops
// -1 0 1 2 -1 4
// i  j k
// O(n3)

const threeSum = (nums) => {
    const res = [];
    nums.sort((a,b) => a-b);
    const hash = {};
    for(let i=0; i<nums.length; i++) {
        let j=i+1; 
        let k = nums.length-1;
        const target = nums[i]*-1;
        while(j<k) {
            const key = `${nums[i]}-${nums[j]}-${nums[k]}`;
            const partialSum = nums[j]+nums[k];
            if(nums[i]+nums[j]+nums[k] === 0 && !hash[key]) {
                hash[key] = true;
                res.push([nums[i], nums[j], nums[k]]);
            } else {
                if(partialSum > target) {
                    k--;
                } else {
                    j++
                }
            }
        }
    }
    return res;
}

// console.log(threeSum([-1,0,1,2,-1,-4]))
console.log(threeSum([-2,0,1,1,2]))