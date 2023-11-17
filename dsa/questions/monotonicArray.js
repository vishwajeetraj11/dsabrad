const m = (nums) => {
    let l=0;
    let r=1;

    let inc = true;
    let dec = true;

    while(r<nums.length) {
        if(nums[r]>nums[l]) {
            dec = false;
        } 
        if(nums[l]>nums[r]) {
            inc = false;
        }
        l++;
        r++;
    }
    console.log(inc)
    console.log(dec)
    return inc || dec
}

// console.log(m([1,2,3,4,5,6]))
// console.log(m([6,5,4,3,2,1]))
// console.log(m([6,5,4,3,22,1]))
console.log(m([1,2,2,3]))
console.log(m([6,5,4,4]))