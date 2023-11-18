/** https://leetcode.com/problems/removing-stars-from-a-string/
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    // let l=0; 
    // let r=1;
    let r = '';
    // while(r<s.length) {
    //     if(s[r] === '*') {
    //         res.pop();
    //         r++;
    //         l++; 
    //     } else {
    //        res.push(s[r])
    //         r++;
    //         l++;
    //     }
    //     // break
    // }
    // const hash = {};
    // s.split('').forEach((e,i)=>e==='*' ? hash[i]=e:null)
    // console.log(hash)
    // Object.keys(hash).forEach(e => {
    //     console.log(e)
    // })
    let j=0;
    for(let i=0; i<s.length; i++) {
        if(s[i] !== '*') {
            r=r+s[i]
            j = i;
        } else {
            j--;
            let er = r.split('');
            er.pop();
            r = er.join('')
        }
    }
    return r
};


console.log(removeStars('leet**cod*e'))