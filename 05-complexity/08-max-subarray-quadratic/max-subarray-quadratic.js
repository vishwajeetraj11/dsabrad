function maxSubarraySum(array, k) {
    let maxSum=-Infinity;
    for(let i =0; i<=array.length-k;i++) {
       let currentSum = 0;
    for(let j =i; j<i+k;j++) {
        currentSum = currentSum + array[j]
    }
    maxSum = Math.max(maxSum, currentSum);
}
    return maxSum
}
const arr2 = [-2, -5, -3, -1, -11, -7, -6, -4]
const result = maxSubarraySum(arr2, 4);

module.exports = maxSubarraySum;
