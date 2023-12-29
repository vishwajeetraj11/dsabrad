/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    var jump = 0;
    var prev = 0;
    var max = 0;
    for (var i = 0; i < nums.length - 1; i++) {
        // Keep track of the maximum jump
        max = Math.max(max, i + nums[i]);
        // When we get to the index where we had our previous maximum jump, we increase our jump...
        if (i === prev) {
            console.log(i)
            jump++;
            prev = max;
        }
    }
    return jump;
};

// console.log(jump([3,2,1,0,4]))
console.log(jump([1,0,0,0,4]))