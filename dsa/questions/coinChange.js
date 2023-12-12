// 322. Coin Change
// https://leetcode.com/problems/coin-change/description/

const coinChange = (coins, amount) => {
    const table = new Array(amount+1).fill(Infinity);
    table[0] = 0;

    for(let i=0; i<coins.length; i++) {
        const coin = coins[i];
        for(let amt=0; amt<table.length; amt++) {
            if(coin <= amt) {
                let idx = amt - coin;
                table[amt] = Math.min(table[idx]+1, table[amt])
            }
        }
    }
    return table[table.length-1] === Infinity ? -1 : table[table.length-1]
}

console.log(coinChange([1,2,5], 11))