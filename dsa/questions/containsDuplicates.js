// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150
const containsDuplicate = (arr) => {
    let position = 0;
    for(let i=0; i< arr.length; i++) {
        if(arr[i] !== arr[i+1]) {
            arr[position++] = arr[i];
        }
    }
    return arr;
}

console.log(containsDuplicate([1,2,2,3,3,4,5]))