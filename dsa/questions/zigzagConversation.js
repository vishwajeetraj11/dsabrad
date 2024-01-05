/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 * 6. Zigzag Conversion
 * https://leetcode.com/problems/zigzag-conversion/description/
 */
var convert = function(s, numRows) {
    const res = [];
    for(let i=0; i<numRows; i++) {
        res.push([])
    }
    let direction = true;
    let count = 0;
    let ss= '';
    for(let i=0; i<s.length; i++) {
        res[count].push(s[i]);
        ss += s[i]; 
        if(direction && count < numRows) {
            if(count+1 === numRows) {
                direction = false;
                count--;
                continue;
            }
            count++;
        }
        if(!direction) {
            if(count-1 === -1) {
                direction = true;
                count++;
                continue;
            }
            count--;

        }
    }
    console.log(res)
    console.log(ss)
    return res.flat().join('')
};

console.log(convert('PAYPALISHIRING', 3))
// PAHNAPLSIIGYIR