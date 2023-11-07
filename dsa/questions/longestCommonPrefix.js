// https://leetcode.com/problems/longest-common-prefix/


var longestCommonPrefix = function(strs) {
    let prefix = strs[0];
   
    for(let i=1; i<strs.length; i++) {
        while(strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length -1);
            if(prefix === '') return ''
        }
    }
    return prefix
};


console.log(longestCommonPrefix(["flower","flow","flight"]));

console.log('flower'.indexOf('flower'))