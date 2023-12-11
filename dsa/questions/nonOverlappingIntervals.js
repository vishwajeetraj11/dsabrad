// 435. Non-overlapping Intervals
// https://leetcode.com/problems/non-overlapping-intervals/

/**
* @param {number[][]} intervals
* @return {number}
*/
var eraseOverlapIntervals = function(intervals) {
   intervals.sort((a,b) => a[1]-b[1]);
   let c = 0;
    let prev = 0;
    for(let i=1; i<intervals.length; i++) {
        let current = intervals[i];
        if(current[0] < intervals[prev][1]) {
            c++
        } else {
            prev = i
        }
    }

   return c;
};

console.log(eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]]))
console.log(eraseOverlapIntervals([[1,2],[1,2],[1,2]]))
console.log(eraseOverlapIntervals([[1,2],[2,3]]))
console.log(eraseOverlapIntervals([[1,100],[11,22],[1,11],[2,12]]))