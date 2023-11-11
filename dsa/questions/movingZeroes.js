// https://leetcode.com/submissions/detail/1096123994/
const moveZeroesLeft = (nums) => {
    console.log('first')
    for(let i=nums.length-1; i>= 0 ; i--) {
        console.log('first')
        console.log(nums[i])
        if(nums[i] === 0) {
            // console.log('first')
            console.log(i)
            for(let x=i; x>=1;x--) {
                console.log(x)
                const temp = nums[x];
                nums[x] = nums[x-1];
                nums[x-1] = temp;
            }
        }
    }
    console.log(nums)
    return nums;
}

// o(n^2)
const moveZeroesRight1 = (nums) => {
    console.log('first')
        let i=0;
        let r = nums.length-1;
        while(i<=nums.length-1 && i<r) {
        if(nums[i] === 0) {
            r--;
            for(let x=i; x<nums.length-1;x++) {
                console.log(x)
                const temp = nums[x];
                nums[x] = nums[x+1];
                nums[x+1] = temp;
            }
        } else {
            i++;
        }
    }
    return nums;
}

const moveZeroesRight = (nums) => {
        
    let l=0;
    let r=0;
    while(r<nums.length) {
        if(nums[r] !== 0) {
            const temp = nums[l];
            nums[l] = nums[r];
            nums[r] = temp;
            r++;
            l++;
        } else {
            r++;
        }
    }
    return nums;
}

console.log(moveZeroesRight([0,0,1]))


    // const moveZeroes = (nums) => {
    //     let i=0, l =0, r = nums.length-1;
    //     while(r>l && i < nums.length - 1) {
    //         console.log(l)
    //         console.log(r)
    //         console.log(i)
    //         if(nums[l] === 0) {
    //             console.log(l)
    //             const temp = nums[l];
                
    //             console.log(nums[l])
    //             i++;
    //             l++;
    //         } else if(nums[r] === 0) {
    //             console.log(r)
    //             const temp = nums[r];
    //             nums[r] = nums[i];
    //             nums[]
    //             // [nums[r], nums[i]] = [nums[i],nums[r]]
    //             r--;
    //             i++;
    //         } else {
    //         l++;
    //         r--;
    //         }
    //     // break;
    //     }
    //     console.log(nums)
    //     return nums;
    //     }
