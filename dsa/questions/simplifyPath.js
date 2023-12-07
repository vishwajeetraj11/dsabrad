// 71 Simplify Path
// https://leetcode.com/problems/simplify-path/

// sol 1
const simplifyPath = (path) => {
    const stack = [];
    const arr = path.split('/')
    for(let i=0; i<arr.length; i++) {
        if(arr[i] === '') continue
        const currDir = arr[i];
        if(currDir[0] !== '.') {
            stack.push(currDir);
        } else if(currDir === '..') {
            stack.pop();
        }
    }
    return '/'+stack.join('/')
}

console.log(simplifyPath("/../"))

// sol 2
/*
space => stack and path Arr => O(2n) => O(n);
time => O(n)
*/
const simplifyPath1 = (path) => {
    const stack = [];
    let pathArr = path.split('/').filter(el => el !== '.').filter(el => el !== '');

    for(let i=0; i<pathArr.length; i++) {
        const currPath = pathArr[i];
        if(currPath === '..') {
            stack.pop();
        } else {
            stack.push(currPath)
        }
    }
    return '/'+stack.join('/')
}
