/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 * https://leetcode.com/problems/snail-traversal/description/
 */
Array.prototype.snail = function(rowsCount, colsCount) {
    if(rowsCount*colsCount !== this.length) return []

    const arr = [];
    let n=0;
    let rev = false;
    for(let i=0; i<colsCount; i++) {
        const col = [];
       if(rev) {
        for(let j=rowsCount-1; j>=0; j--) {
            if(!arr[j]) arr[j] = [];
            arr[j][i] = this[n++];
        }
        rev = false;
       } else {
        for(let j=0; j<rowsCount; j++) {
            if(!arr[j]) arr[j] = [];
            arr[j][i] = this[n++];
        }
        rev = true;
       }

    }

    return arr;
}

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */

console.log(
    [19, 10, 3, 7,
     9, 8, 5, 2,
    1, 17, 16, 14,
     12, 18, 6, 13,
      11, 20, 4, 15].snail(5,4))