// using 3rd array
const mergeArrays = (nums1, nums2) => {
    let left = 0;
    let right = 0;
    let final = [];
    while(left < nums1.length && right < nums2.length) {
        if(nums1[left] < nums2[right]) {
            final.push(nums1[left++])
        } else {
            final.push(nums2[right++]);
        }
    }
    console.log(left)
    if(left-1 !== nums1.length-1) {
        final.push(...nums1.slice(left))
    }
    if(right-1 !== nums2.length-1) {
        final.push(...nums2.slice(right))
    }
    return final
}

console.log(mergeArrays([1,5,7,10], [2,4,6,8,9]))

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(left, m, right, n) {
    let max = m+n-1;
    let l=m-1;
    let r=n-1;

    while(r>=0) {
        if(left[l] > right[r]) {
            left[max--] = left[l];
            l--;
        } else {
            left[max--] = right[r];
            r--;
        }
    }
    return left
};

// console.log(merge([1,4,7],3, [3,5,6],3))
console.log(merge([1,2,9,0,0,0],3, [2,5,6],3))

/* 
1,4,7,_,_,_
3,5,6
*/