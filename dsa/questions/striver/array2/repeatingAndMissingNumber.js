// Problem Statement: You are given a read-only array of N integers with values also in the range [1, N] both inclusive. Each integer appears exactly once except A which appears twice and B which is missing. The task is to find the repeating and missing numbers A and B where A repeats twice and B is missing.
//               A B = 4
const arr = [1,2,3,4,5,3,7];
console.log(arr.length)

const getNum = (nums) => {
    let A;
    let obj = {};
    nums.forEach(num => {
        if(obj.hasOwnProperty(num)) {
            A = num;
        }
        obj[num] = true;
    })
    const sum = nums.reduce((total, curr) => total+curr, 0)-A;
    const expectedSum = (nums.length* (nums.length+1))/2;
    const B = expectedSum - sum;
    return {A,B}
}

console.log(getNum(arr))