// https://leetcode.com/problems/excel-sheet-column-title/


var convertToTitle = function(columnNumber) {
    let str = '';
    let num = columnNumber;

    const mappingArr = ['Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I','J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    while(num) {
        const remainder = num%26;
        str = mappingArr[remainder] + str;
        num = remainder===0 ? Math.floor(num/26)-1:Math.floor(num/26);
    }
    return str
};

console.log(convertToTitle(709))