/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// wrong solution comparing only two intervals
// console.log(merge([[1,4],[0,2],[3,5]])) fails op=[ [ 0, 4 ], [ 1, 5 ] ]

// var merge = function(intervals) {
//     let l=0; r=1;
//     const final = []
//     if(intervals.length === 1) return intervals
//     intervals.sort((a,b) => a[0]-b[0])
//     let flag = false;
//     while(r<intervals.length) {
//         const leftE = intervals[l];
//         const rightE = intervals[r];
//         console.log(leftE)
//         const [c,d] = leftE;
//         const [f,g] = rightE;
//         const left = Math.min(c,d,f,g);
//         const right = Math.max(d,g);
//         if(f<d || f===d) {
//             // final.push([c,d>g?d:g])
//             final.push([left,right])
//             flag = true;
//         } else {
//             if(!flag) {
//                 final.push(leftE)
//             }
//             final.push(rightE)
//             flag = true;
//         }
//         l++;
//         r++;
//     }
//     return final
// };

var merge = function(intervals) {
    if(intervals.length === 1) return intervals
    intervals.sort((a,b) => a[0]-b[0]);
    let curr = intervals[0];
    let final = [curr];
    for(let i=1; i<intervals.length; i++) {
        const [cf,cl] = curr;
        const [lf, ll] = intervals[i];
        if(cl >= lf) {
            curr = [cf, cl>ll?cl:ll]
        } else {
            final.push(intervals[i])
            curr = intervals[i]
        }

        if(final.length === 1) {
            final = [curr];
        } else {
            final.pop();
            final.push(curr)
        }
    }
    return final
};

/* sol 2
const merge = (intervals) => {
    intervals.sort((a,b) => a[0]-b[0])
    let curr = intervals[0];
    const res = [curr];

    for(let i=0; i<intervals.length; i++) {
        let [leftInt, rightInt] = curr;
        const [currLeftInt, currRightInt] = intervals[i];
        if(rightInt >= currLeftInt) {
            curr = [leftInt, Math.max(currRightInt, rightInt)]
        } else {
            res.push(intervals[i]);
            curr = intervals[i]
        }
        res.pop();
        res.push(curr)
    }

    return res;
}

var merge = function(intervals) {
    if(intervals.length === 1) return intervals
    intervals.sort((a,b) => a[0]-b[0]);
    let curr = intervals[0];
    let final = [curr];

    for(let i=1; i<intervals.length; i++) {
        const [cf,cl] = curr;
        const [lf, ll] = intervals[i];
        if(cl >= lf) {
           curr[1] = Math.max(curr[1] , intervals[i][1])
        } else {
            final.push(intervals[i])
            curr = intervals[i]
        }
    }
    return final
};
*/



console.log(merge([[2,3],[2,2],[3,3],[1,3],[5,7],[2,2],[4,6]]))
// console.log(merge([[1,4],[2,3]]))
// console.log(merge([[0,2],[1,4],[3,5]]))
// console.log(merge([[1,3],[2,6],[8,10],[15,18]]))
// console.log(merge([[1,4],[4,5]]))
// console.log(merge([[1,4],[5,6]]))