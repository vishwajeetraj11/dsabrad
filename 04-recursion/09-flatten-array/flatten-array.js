
function flattenArray(arr) {

    let result = []

    for(let i=0; i<arr.length; i++) {
        if(arr[i] instanceof Array) {
            result = result.concat(flattenArray(arr[i]))
        } else {
             result.push(arr[i])
        }
    }
    return result

}

module.exports = flattenArray;
