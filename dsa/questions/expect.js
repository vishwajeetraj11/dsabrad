/**
 * https://leetcode.com/problems/to-be-or-not-to-be/description/
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {

    const toBe = (key) => {
        if(key !== val) throw Error('Not Equal')
        else return true
    }
    const notToBe = (key) => {
        if(key === val) throw Error('Equal')
        else return true
    }



    return {
        toBe,
        notToBe
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */

(async () => {
    try {
        console.log(expect(5).toBe(5))
        console.log(expect(5).notToBe(5)) // Error
        // console.log(expect(5).toBe(5))
        // console.log(expect({}).notToBe({}))
    } catch(e) {
        console.log(e)
    }
})();


