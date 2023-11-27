
// TLE for longer inputs.
const isValid = (str) => {
    const stack = [];

    for(let i=0; i<str.length;i++) {
      
        if(str[i] ==='(') {
            stack.push(str[i])
        } else if(str[i] ===')') {
           
            const top = stack[stack.length-1];
            if(top === '(' && str[i] === ')') {
                stack.pop()
            } else {
                stack.push(str[i])
            }
        }
    }
    return stack.length === 0
}
// for smaller inputs
const longestValid = (str) =>  {
    // const res = [];

    let longest = 0;
    const bkt = (i, str, slate, value, o, c) => {
        if(isValid(value) && value.length!==0) {
            const valueStr = value.join('')
            console.log(value)
            // if(res.includes(valueStr)) return
            // res.push(valueStr.length)
            longest = Math.max(longest, valueStr.length)
            // return longest
            return 
        }

        if(i === str.length) {
            return
        }

           const last = slate.slice().pop();
           const arr2 = slate.slice();
           arr2.pop();
           const newOpen1 = last === '(' ? ++o: o;
           const newClose1 = last === ')' ? ++c:c;
           const e = bkt(i+1, str, arr2, slate.slice(),newOpen1,newClose1);

           const firstElem = slate.slice().shift();
           const arr = slate.slice();
           arr.shift();
   
           const newOpen = firstElem === '(' ? ++o: o;
           const newClose = firstElem === ')' ? ++c:c;
   
           const r = bkt(i+1, str, arr, slate.slice(),newOpen,newClose);
       
    }
    
    bkt(0, str, str.split(''), [] ,0, 0)

    return longest
}

console.log(longestValid(')()())'))

