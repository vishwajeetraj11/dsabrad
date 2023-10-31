/*
  Example of constant time O(1)

  Constant time means that the time required to complete a function is the same regardless of the size of the input data set.
*/

function accessElement  (array, index) {
    return array[index]
}

const arr1 = [1,2,3,4,6,8,4454,34,9];

console.time('Access Element');
console.log(arr1[4])
console.timeEnd('Access Element')

const arr2 = Array.from({length: 1000}, (_,i) => i+1)
console.time('Access Element');
console.log(arr2[4])
console.timeEnd('Access Element')