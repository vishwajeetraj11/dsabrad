// 1079: Letter Tile Possibilities


/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function(tiles) {
    let tilesArr = tiles.split('');
    let count = 0;
    
    const dfs = (remaining,slate) => {
        if(slate.length) {
            count++;
        }
        for(let j=0; j<remaining.length; j++) {
            if(j>0 && remaining[j] === remaining[j-1]) {
                continue;
            }
            const nextRemaining = [...remaining.slice(0,j), ...remaining.slice(j+1)]
            dfs(nextRemaining, slate+remaining[j])
        }
    }
    tilesArr = tilesArr.sort().join('')
    dfs(tilesArr,'');
    return count
};

console.log(numTilePossibilities('CDC'))
