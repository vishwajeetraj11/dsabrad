// 1209. Remove All Adjacent Duplicates in String II
// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/description/

const removeDuplicates = (s, k) => {
    let stack = [];
    for(let i=0; i<s.length; i++) {
        let curr = s[i];
        if(stack.length === 0 || curr !== stack[stack.length-1][0]) {
            stack.push([curr, 1])
        } else {
            stack[stack.length-1][1]++;
            if(stack[stack.length-1][1] === k) stack.pop();
        }
    }
    return stack.reduce((tot, curr) => tot += curr[0].repeat(curr[1]), '')
}

console.log(removeDuplicates('deeedbbcccbdaa',3))
console.log('a'+'a')