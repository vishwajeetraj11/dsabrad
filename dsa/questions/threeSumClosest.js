// 15. 3Sum
// https://leetcode.com/problems/3sum/

// brute force -> 3 for loops
// -1 0 1 2 -1 4
// i  j k
// O(n3)

const threeSumClosest = (nums, target) => {
    nums.sort((a,b) => a-b);
    let closest_sum = nums[0]+nums[1]+nums[2];

    for(let i=0; i<nums.length-2; i++) {
        let j=i+1; 
        let k = nums.length-1;
        while(j<k) {
            let sum = nums[i]+nums[j]+nums[k];
            if(sum === target) {
                return sum
            } else if(sum < target) {
                j++;
            } else {
                k--;
            }
            closest_sum  = Math.abs(sum - target) < Math.abs(closest_sum - target) ? sum : closest_sum
        }
    }

    return closest_sum;
}

// console.log(threeSumClosest([-1,0,1,2,-1,-4]))
console.log(threeSumClosest([0,1,2],3))