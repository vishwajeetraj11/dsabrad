const data = {
    assignments: {
        "numParts": 23,
        "message": `
        Hello our top programmer Vishwajeet Raj,
        Thank you for joining us in this time of great need.
        We're once again in dire need of your skills to decode this new mission.
        Satellite has picked up strange communication, that can be downloaded with this API: /data?part=<PART Number>
        We've only been able to deduce that we need to download all the parts that exist,
        You will see the total number of parts in the 'numParts' field here.
        There seems to be strange strict behaviour with how these APIs work:
         - If API is called incorrectly, we get locked out of the system for 60 seconds
          - From trial and error, we found out that /data can not be called within 2.5 seconds or more than 10 seconds apart.
           If the chaincode is not submitted to /answers as POST in 3 minutes as payload { chaincode: <CHAINCODE VALUE> },
           then we need to call /assignments again to restart
           - If wrong chaincode is submitted, we have to wait for 3 minutes cooldown to end, before a new assignment can be provided.
           We have no idea what this data is, but it seems to be important. Together, it seems to 
           create the 'chaincode' that we need to enable hyperdrive and finish the mission.
            Your mission, should you choose to accept, is to use your coding skills, cunning mind, sharp logic and grit to help us get over the huddle.
           You are our only hope.
           All the best! Lightspeed ahead.`
    },
    d1: {"data":[".",".","-","-","-","-","-","-","-","-","➡➡➡","-",".",".","-"]},
    d2: {"data":[".","-","-","-","-","-","-","-","-",".","➡➡➡",".",".",".","."]},
    d3: {"data":[".","-","-","-","-",".",".",".","-","-","➡➡➡","-",".","-","."]},
    d4: {"data":[".","-","-","-","-","-","-","-",".",".","➡➡➡",".",".","-"]},
    d5: {"data":[".","-","-","-","-","-","-",".",".",".","➡➡➡",".",".",".","."]},
    d6: {"data":["-","-","-","-",".","➡➡➡","-",".","."]},
    d7: {"data":[".","-","-","-","-",".",".",".",".","-","➡➡➡","-",".","-"]},
    d8: {"data":[".",".","-","-","-",".",".",".","-","-","➡➡➡","-","-"]},
    d9: {"data":[".",".",".",".",".","➡➡➡","."]},
    d10: {"data":[".",".","-","-","-",".","-","-","-","-","➡➡➡",".",".",".","-"]},
    d11: {"data":[".",".","-","-","-","➡➡➡",".",".","."]},
    d12: {"data":[".","-","-","-","-","-",".",".",".",".","➡➡➡","-"]},
    d13: {"data":[".","-","-","-","-",".",".","-","-","-","➡➡➡","-","-"]},
    d14: {"data":[".","-","-","-","-","-","-","-","-","-","➡➡➡",".",".","-"]},
    d15: {"data":["-","-",".",".",".","➡➡➡",".","-","-","."]},
    d16: {"data":[".","-","-","-","-",".",".",".",".",".","➡➡➡",".",".","-"]},
    d17: {"data":[".","-","-","-","-","➡➡➡","-","."]},
    d18: {"data":[".",".","-","-","-",".",".","-","-","-","➡➡➡","-"]},
    d19: {"data":["-","-","-",".",".","➡➡➡",".",".","-","."]},
    d20: {"data":["-",".",".",".",".","➡➡➡",".",".","-","."]},
    d21: {"data":[".",".",".","-","-","➡➡➡","-",".","."]},
    d22: {"data":[".","-","-","-","-",".","-","-","-","-","➡➡➡",".",".","-","."]},
    d23: {"data":[".",".",".",".","-","➡➡➡","-"]}
}


const getArr = () => {
    const parts = data.assignments.numParts;
    const arr = [];
    for(let i=1; i<=parts;i++) {
        arr.push(data['d'+i].data)
    }
    return arr;
}
let obj = {};
function findLongestValid(parts){
    const morseToEnglish = {
        ".-": "A", "-...": "B", "-.-.": "C", "-..": "D", ".": "E",
        "..-.": "F", "--.": "G", "....": "H", "..": "I", ".---": "J",
        "-.-": "K", ".-..": "L", "--": "M", "-.": "N", "---": "O",
        ".--.": "P", "--.-": "Q", ".-.": "R", "...": "S", "-": "T",
        "..-": "U", "...-": "V", ".--": "W", "-..-": "X", "-.--": "Y",
        "--..": "Z","-----": "0", ".----": "1", "..---": "2", "...--": "3",
        "....-": "4", ".....": "5", "-....": "6", "--...": "7", "---..": "8",
        "----.": "9",
    };
    const [left, right] = parts;
    let index = '';
    let longestLeft = '';
    let start = 0;
    let longestRight = '';
    for(let i=0; i<left.length; i++) {
        const currStr = left.slice(start, i+1);
        longestLeft = morseToEnglish[currStr];
        if(Number.isInteger(parseInt(longestLeft))) {
            index += longestLeft;
            start = i+1;
        }
    }
    longestRight = morseToEnglish[right];
    obj[index] = longestRight;
}

const resolver = () => {
    const arr = getArr();
    arr.forEach(item => {
        findLongestValid(item.join('').split('➡➡➡'));
    })
    let res = '';
    for(let i=1; i<=arr.length; i++) {
        res += obj[i]
    }
   return res;
}

console.log(resolver())