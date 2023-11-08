// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
function indexOf(str, query) {
    for(var i = 0; i < str.length; i++) { 
      for(var q = 0; q < query.length; q++) { 
          if (str[i+q] !== query[q]) {
            console.log(str[i+q])
            console.log(query[q])
            console.log(q)
          break;
        }
        console.log(q)
        if (q === query.length - 1) {
            console.log(q)
          return i;
        } 
      }
    }
     return -1;
  }

  console.log(indexOf('sadbutsad', 'sad'))