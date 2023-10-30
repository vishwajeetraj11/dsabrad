
const isItemInArray = (arr, item) => {
    for(let j=0;j<arr.length;j++) {
        if(arr[j] === item) {
            return true
        }
    }
    return false
}

function removeDuplicates(arr) {
   const unique = [arr[0]];
   for(let i = 0; i<arr.length; i++) {
    const currentItem = arr[i]

    let notInUnique = true;
    for(let j=0;j<unique.length;j++) {
        if(unique[j] === currentItem) {
            notInUnique = false;
        }
    }
    if(notInUnique) {
        unique.push(currentItem)
    }
   }
   return unique
}

removeDuplicates([11,22,33,33])

module.exports = removeDuplicates;

