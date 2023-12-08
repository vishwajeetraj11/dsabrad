/**
 * 11. Container With Most Water
 * https://leetcode.com/problems/container-with-most-water/description/
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxArea = 0;
    let l =0;
    let r= height.length-1;
    while(l<r) {
        const length = r-l;
        const area = Math.min(height[l], height[r])*length;
        maxArea = maxArea > area ? maxArea : Math.max(area, maxArea)
        if(height[l]>height[r]) {
            r--;
        } else {
            l++;
        }
    }
    return maxArea;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))