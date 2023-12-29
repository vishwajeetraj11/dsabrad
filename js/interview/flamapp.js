// Write a random function that generates obj {A: 1, ... Z: 9} that have keys A-Z and all keys needs to exist in object and assign them a value of 0-9 number.
// then write a group by function that groups the object in a obj such as [val: no_of_times_it_occured] and expand on [val: [array of all ltters having same value]];

const groupBy = (obj) => {
    const res = {};
    Object.entries(obj).forEach(([key, val]) => {
       if(res.hasOwnProperty(val)) {
        res[val].push(key)
       }else {
        res[val] = [key]
        // res[val] = 1
       }
    })
    return res;
}

const getRandom = (size) => {
    const obj = {};
    const alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W', 'X','Y','Z'];

    for(let i=0; i<size; i++) {
       
        const randomAlph = alpha[Math.floor(Math.random()*(alpha.length))];
        const randomNo = Math.abs(Math.floor(Math.random()*10));

        if(obj.hasOwnProperty(randomAlph)) {
            const remaining = alpha.filter((letter) => !obj.hasOwnProperty(letter));
            const randomAlph = remaining[Math.floor(Math.random()*(remaining.length))];
            const randomNo = Math.abs(Math.floor(Math.random()*10));
            obj[randomAlph] = randomNo;
        } else {
            obj[randomAlph] = randomNo;
        }
    }
    console.log(Object.keys(obj).length)
    return obj
}

console.log(getRandom(26))

console.log(groupBy(getRandom(26)))