// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/
const containsDuplicate = (arr) => {
    let position = 0;
    const allowed = {};
    for(let i=0; i< arr.length; i++) { 
        allowed[arr[i]]=2;
     };
    
    for(let i=0; i< arr.length; i++) {
        if(allowed[arr[i]] !== 0) {
            allowed[arr[i]]--;
            arr[position++] = arr[i];
        } 
    }
    return arr;
}

console.log(containsDuplicate([1,1,1,1,2,2,2,2,3,4,5,6,7,8,9]))