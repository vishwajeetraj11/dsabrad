// 347. Top K Frequent Elements
// https://leetcode.com/problems/top-k-frequent-elements/submissions/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    console.log(nums)
    console.log(k)
    const freq = {};
    nums.forEach((num => {
        freq[num] = (freq[num]||0)+1
    }))
    const sorted = [];

    const entries = Object.entries(freq).sort((a,b) => {
        return b[1] - a[1]
    })

    return entries.slice(0,k).map(e => parseInt(e[0]))
};
console.log(topKFrequent([1,1,1,2,2,3], 2))