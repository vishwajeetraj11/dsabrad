
// TLE: for larger inputs.
// const rotate = (nums, k) => {
//     k = k%nums.length;
//     console.log(k)
//     while(k) {
//         k--;
//         const lastElem = nums[nums.length-1];
//         for(let i=nums.length-1; i>=0;i--) {
//             if(i===nums.length-1) continue
//             nums[i+1]=nums[i]
//         }
//         nums[0] = lastElem
//     }
//     return nums;
// }

// console.log(rotate([1,2,3,4,5,6,7], 3))

var rotate = function(nums, k) {
    k=k%nums.length;
    const temp = nums.splice(0, nums.length-k)
    nums.push(...temp)
    return nums
};

console.log(rotate([1,2,3,4,5,6,7], 3))

