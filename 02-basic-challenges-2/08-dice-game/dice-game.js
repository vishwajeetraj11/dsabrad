function diceGameSimulation(numRolls) {
    const results = []
    for(let i=0; i<numRolls; i++) {
        const dice1 = Math.floor((Math.random()*6)+1);
        const dice2 = Math.floor((Math.random()*6)+1);
        const sum = dice1+dice2;
        let result='roll again'
        if(sum === 7 ||sum===11) {
            result = 'win'
        } else if(sum===2|| sum===3|| sum===12) {
            result = 'lose'
        }
        results.push({dice1,dice2, sum, result})
    }
    return results;
}

module.exports = diceGameSimulation;
