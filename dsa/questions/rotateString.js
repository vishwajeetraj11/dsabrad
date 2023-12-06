    /** 
     * 796. Rotate String
     * https://leetcode.com/problems/rotate-string/description/
    * @param {string} s
    * @param {string} goal
    * @return {boolean}
    */
    var rotateString = function(s, goal) {
        if(s.length != goal.length) return false
        const str = s+s;
        return str.indexOf(goal) !== -1
    };

    console.log(rotateString('abcdef', 'deabc'))
