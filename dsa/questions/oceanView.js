// ocean view
// https://leetcode.com/problems/buildings-with-an-ocean-view/

const oceanicView = (heights) => {
    const start = heights.length-1;
    const result = [start]
    for(let i=heights.length-2; i>=0; i--) {
        const currHeight = heights[i];
        if(currHeight > heights[result[result.length-1]]) {
            result.push(i)
        }
    }
    return result.reverse()
}

console.log(oceanicView([4,3,2,1]))
// console.log('first')