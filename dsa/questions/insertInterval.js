// 57. Insert Interval
// https://leetcode.com/problems/insert-interval/description/

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    intervals.push(newInterval);
    intervals.sort((a,b) => a[0]-b[0]);
    let curr = intervals[0];
    const final = [curr];
    let r = 1;
    while(r<intervals.length) {
        const [leftStart, leftEnd] =  curr;
        const [rightStart, rightEnd] =  intervals[r];
        if(leftEnd >= rightStart) {
            curr = [leftStart, Math.max(leftEnd, rightEnd)]
        } else {
            final.push(intervals[r]);
            curr = intervals[r];
        }
        r++;
        final.pop();
        final.push(curr);
    }
    return final
};
console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]))
