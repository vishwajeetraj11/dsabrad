const subArray = (nums) => {
    const res = [];
    for(let i=0; i<nums.length; i++) {
        for(let j=i; j<nums.length; j++) {
            const subArr = [];
            for(let k=i; k<=j; k++) {
                subArr.push(nums[k])
            }
            res.push(subArr)
        }
    }
    return res
}

console.log(subArray([1,2,3,4, 9,-1 ,10]))