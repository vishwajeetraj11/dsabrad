// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
function indexOf(str, query) {
    for(var i = 0; i < str.length; i++) { 
      for(var q = 0; q < query.length; q++) { 
          if (str[i+q] !== query[q]) {
          break;
        }
        if (q === query.length - 1) {
          return i;
        } 
      }
    }
     return -1;
  }

  console.log(indexOf('sadbutsad', 'sad'))