/**
 * 1287. Element Appearing More Than 25% In Sorted Array
 * https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/description/?envType=daily-question&envId=2023-12-11
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    console.log(arr.length)
    const maxAppearance = Math.floor(arr.length*0.25);
    const hash={};
    arr.forEach(num => {
        hash[num]=hash[num]+1||1
    })
    let _val = Infinity;
    Object.entries(hash).forEach(([key,val]) => {
        if(val > maxAppearance) {
            _val = parseInt(key);
        }
    })
    return _val
};

console.log(findSpecialInteger([1,2,2,6,6,6,6,7,10]))

/*
25/100 * 9
*/