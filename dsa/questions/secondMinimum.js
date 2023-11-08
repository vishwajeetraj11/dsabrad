const secondMinimum = (arr) => {

    let min=Infinity, secondMin=Infinity;
    for (var i= 0; i< arr.length; i++) {
       
        if (arr[i]< min) {
            secondMin = min;
            min = arr[i]; 
        } else if (arr[i]< secondMin) {
            secondMin = arr[i]; 
        }
    }
    
    return secondMin
}

console.log(secondMinimum([1,2,3,4,5,6,7,8,9,10]))


// const secondMinimum1 = (arr) => {

//     let secondMin;
//     const _arr = new Set(arr);
//     return Array.from(_arr)[1]
// }

// console.log(secondMinimum1([2,2,5,7]))
