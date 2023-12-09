// 252 Meeting Rooms
const canAttendMeetings = (intervals) => {
    intervals.sort((a,b) => a-b);
    let curr = intervals[0];
    for(let i=1; i<intervals.length; i++) {
        const [left, right] = curr;
        const [leftI, rightI] = intervals[i];
        if(right > leftI) {
            return false
        }
        curr = intervals[i];
    }
    return true
}

// console.log(canAttendMeetings([[0,30],[5,10], [15,20]]))
console.log(canAttendMeetings([[2,4],[7,10],[15,20]]))
