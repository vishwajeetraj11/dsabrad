/*
Logarithmic Time (O(log n))

Logarithmic time means that the time required to complete a function is proportional to the logarithm of the input data set. 

*/

function findPower(base, exponent) {
    if(exponent === 0) return 1

    // If any number is raised to a even exponent can be split into two halves = 2^24  = 2^12*2^12 
    // 2^25 = 2* 2^12*2^12 = O(logn)

    if(exponent%2===0) {
        const halfPower = findPower(base, exponent/2)
        return halfPower*halfPower
    } else {
        const halfPower = findPower(base, (exponent-1)/2)
        return halfPower*halfPower*base
    }
}

console.time('power');
console.log(findPower(2,23))
console.timeEnd('power')


console.time('power1');
console.log(findPower(4,23))
console.timeEnd('power1')