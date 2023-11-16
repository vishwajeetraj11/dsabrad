
var findDuplicate = function(nums) {
    const frequency = {};
    for(let i=0; i<nums.length; i++) {
        frequency[nums[i]] = (frequency[nums[i]]||0)+1;
    }

    for(key in frequency) {
        if(frequency[key] >= 2) {
            return key
        }
    }
};

console.log(findDuplicate([2,2,2,2,2]))