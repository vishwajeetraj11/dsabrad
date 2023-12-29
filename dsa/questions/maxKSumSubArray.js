
const maxSumSubArr = (nums, k) => {
    let max = 0;
    if(k === nums.length) return nums.reduce((total, curr) => total+curr, 0);
    const sumArr = [];
    let firstKSum = 0;

    for(let j=0; j<k; j++) {
        firstKSum += nums[j]
    }

    sumArr.push(firstKSum);

    for(let i=1; i<nums.length;i++) {
        if((nums.length-i-k) < 0) break
        sumArr[i] = sumArr[i-1] - nums[i-1]+ nums[i+k-1];
        max = Math.max(max, sumArr[i]);
    }

    return max;
}

console.log(maxSumSubArr([2, 1, 5, 1, 3, 2], 3))
// 215
//  151
//   513
//    132

