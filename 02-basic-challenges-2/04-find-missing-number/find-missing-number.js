function findMissingNumber(arr) {
    const length = arr.length+1;
    const expectedSum = (length*(length+1))/2;
    let currentSum = 0;
    
    for(let i = 0; i<arr.length;i++) {
        currentSum = currentSum+arr[i];
    }
    return expectedSum-currentSum
}

module.exports = findMissingNumber;
