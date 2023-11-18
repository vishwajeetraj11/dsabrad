/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const results = [];

    const dfs = (i, n, temp, open, close) => {
        if(close>open) {
            return;
        }
        if(open>n) {
            return;
        }

        if(i === 2*n) {
            results.push(temp.join(''));
            return;
        }
      
        dfs(i+1, n, temp.concat('('), open+1, close)
        dfs(i+1, n, temp.concat(')'), open, close+1)
    }

    dfs(0, n, [], 0, 0)

    return results
};

console.log(generateParenthesis(3))