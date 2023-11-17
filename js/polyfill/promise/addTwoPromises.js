var addTwoPromises = async function(...args) {
    return new Promise((resolve, reject) => {
        const arr = args;
        const result = [];
        arr.forEach(async (promise,i) => {
                Promise.resolve(promise).then((res) => { 
                    result.push(res)
                    console.log('first')
                    if (result.length === arr.length) {
                        console.log('first')
                        resolve(result.reduce((t,c)=> t+c, 0)); 
                    }
                }). 
                    catch((err) => { 
                        reject(err); 
                    }) 
        })    
    })
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */

(async () => {
    console.log('first')
    try {
        console.log('first')
        const data =  await addTwoPromises(
            new Promise(resolve => setTimeout(() => resolve(10), 50)),
            new Promise(resolve => setTimeout(() => resolve(-12), 30)),
        )
        console.log('first')
        console.log(data)
    } catch(e) {
        console.log('dd')
        console.log(e)
    }
})();