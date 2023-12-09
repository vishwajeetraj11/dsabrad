// https://leetcode.com/problems/house-robber-ii/description/
const rob = (houses) => {
    if(houses.length === 0) return 0;
    if(houses.length === 1) return houses[0];
    if(houses.length < 4 ) return Math.max(...houses);
    let dp1 = [];
    let dp2 = [];
    dp1[0] = houses[0]
    dp1[1] = Math.max(houses[0], houses[1])
    dp2[0] = houses[1]
    dp2[1] = Math.max(houses[1], houses[2])

    for(let i=2; i<houses.length-1; i++) {
        dp1.push(Math.max(houses[i]+dp1[i-2]||0, dp1[i-1]||0))
    }

    for(let i=3; i<houses.length; i++) {
        dp2.push(Math.max(houses[i]+dp2[i-3]||0, dp2[i-2]||0))
    }
    // return Math.max(...dp1,...dp2)
    return Math.max(dp1[dp1.length-1],dp2[dp2.length-1])
}

// console.log(rob([1,2,3,1]))
console.log(rob([1,2,3,4,5,1,2,3,4,5]))
// console.log(rob([1,3,1,3,100]))
// console.log(rob([1,7,9,2]))
// console.log(rob([200,3,140,20,10]))
// console.log(rob([6,6,4,8,4,3,3,10]))