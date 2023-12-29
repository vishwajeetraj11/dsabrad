/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const merged = [];
    let left = 0;
    let right = 0;
    while(left < nums1.length && right < nums2.length) {
        if(nums1[left] < nums2[right]) {
            merged.push(nums1[left]);
            left++;
        } else {
            merged.push(nums2[right]);
            right++;
        }
    }
    if(left !== nums1.length) {
        merged.push(...nums1.slice(left))
    }

    if(right !== nums2.length) {
        merged.push(...nums2.slice(right))
    }
    const n = merged.length;

    if(n%2===0) {
        const v1 = Math.floor(n/2.0);
        const v2 = Math.floor((n/2)-1);
        return (merged[v1]+merged[v2])/2.0
    } else {
        const mid = Math.floor((n/2));
        console.log(merged[mid])
        return merged[mid];
    }
};

console.log(findMedianSortedArrays([1,2],[3,4]))