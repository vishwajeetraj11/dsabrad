function arrayIntersection(arr1, arr2) {
    const arr3 = [];

    for(let i =0; i<arr1.length;i++) {
        let inArr2 = false;
        for(let j=0;j<arr2.length;j++) {
            if(arr1[i] === arr2[j]) {
                inArr2 = true;
            }
        }
        if(inArr2) {
            arr3.push(arr1[i])
        }
    }

    return arr3
}

module.exports = arrayIntersection;