/*
1st round
//Q: Describe myfunc's functionality at a higher level

function myfunc(nodes, func, parents, index) {
  return func(
    nodes,
    nodes.children
      ? nodes.children.map((n, i) => myfunc(n, func, [nodes, ...parents], i)) :
        [], 
    parents,
    index
  );
}

//Q: What does myfunc1 do
const func1 = (a, b) => b.reduce((x, b) => x + b, 0) + 1;

// a -> nodes
const myfunc1 = (a) => myfunc(a, func1, [], 0);

*/

/*
2nd round.

getUniqueSentences

* Write a function named getUniqueSentences which takes 2 arguments n(number of uniques sentences) and c (concurrency at which parralel API calls can be made) and should return a promise which will get resolved with an array of n unique sentences
 
* Concurrency is the number of parallel requests you can make at a time to the getMockSentences function. * Ensure optimal use of concurrency. 

****** Note******: 

* Ideal parallelism can not be achieved in javascript due to single threaded nature of javascript. * Consider parallel as near parallel. 

* @param n number of unique sentences function should return 
* @param c is concurrency i.e no of parallel requests you can make at a time to getMockSentences function * returns a promise that resolves to an array of unique sentences 


function getUniqueSentences(n: number, c: number) { 
return new Promise((resolve, reject) => { 
// your implementation 
}); 
} 


*******Supporting function for getUniqueSentences*****
 
***** Don't modify these functions *******

// to generate a random number 

function getRandomNumberBetween(x: number, y: number) { 
if (x >= y) throw new Error("x must be less than y"); 
return Math.floor(x + (Math.random() * (y - x))); 
} 


// to add a delay in the response

function randomSleep() { 
const ms = getRandomNumberBetween(100, 1000); 
return new Promise(resolve => setTimeout(resolve, ms)); 
} 

// to throw the error from the API

function canThrowError(errorRate: 'high' | 'med' | 'low') { 
const num = getRandomNumberBetween(1, 100); 
if (errorRate == 'high') return num % 2 == 0; 
if (errorRate == 'med') return num % 5 == 0; 
return num % 10 == 0; 
} 

// this function is a mock of an API call and it will always return a random sentence
async function getMockSentences() { 

const data = [ 
"The sun is shining brightly in the clear blue sky.", 
"I enjoy taking long walks in the peaceful park.", 
"She couldn't believe her eyes when she saw the surprise.", 
"Pizza is my all-time favorite comfort food.", 
"The curious cat explored every corner of the room.",
"He played the guitar with passion and skill.", 
"The adventure begins with a single step into the unknown.", 
"Reading a good book is like traveling to different worlds.", 
"The laughter of children echoed through the playground.", 
"After a long day at work, I like to relax in a warm bath.", 
"The old oak tree provided shade on hot summer days.", 
"They celebrated their anniversary with a romantic dinner.", 
"The wise owl offered valuable advice to the young owlets.", 
"A rainbow appeared after the rain, bringing hope.", 
"The chef prepared a delicious meal with fresh ingredients.", 
"Lost in thought, she gazed out the window at the stars.", 
"The river flowed gently, reflecting the moon's glow.", 
"The athletes trained tirelessly for the upcoming competition.", 
"With a map in hand, they embarked on a journey of discovery.", 
"Music has the power to touch the soul and evoke emotions.", ] 

await randomSleep(); 
if (canThrowError('high')) throw new Error("Error while fetching data"); 
return data[Math.floor(getRandomNumberBetween(0, data.length))] } 

*/



const myAll = (promises) => {
  let responses = [];
  let errorResp = [];
  return new Promise((resolve, reject) => {
    /** Loop over promises array **/
    promises.forEach(async (singlePromise, i) => {
      try {
        /** wait for resolving 1 promise **/
        // console.log(singlePromise)
        let res = await singlePromise;
        responses.push(res);
      } catch (err) {
        errorResp.push(err);
        // console.log(err)
        // reject(err);
      }
      // console.log(responses)
      resolve(responses);
    });
  });
};


function getRandomNumberBetween(x, y) {
  if (x >= y) throw new Error("x must be less than y");
  return Math.floor(x + Math.random() * (y - x));
}

// to add a delay in the response
function randomSleep() {
  const ms = getRandomNumberBetween(100, 1000);
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// to throw the error from the API
// function canThrowError(errorRate: 'high' | 'med' | 'low') {
function canThrowError(errorRate) {
  const num = getRandomNumberBetween(1, 100);
  if (errorRate == "high") return num % 2 == 0;
  if (errorRate == "med") return num % 5 == 0;
  return num % 10 == 0;
}

// this function is a mock of an API call and it will always return a random sentence
async function getMockSentences() {
  const data = [
    "The sun is shining brightly in the clear blue sky.",
    "I enjoy taking long walks in the peaceful park.",
    "She couldn't believe her eyes when she saw the surprise.",
    "Pizza is my all-time favorite comfort food.",
    "The curious cat explored every corner of the room.",
    "He played the guitar with passion and skill.",
    "The adventure begins with a single step into the unknown.",
    "Reading a good book is like traveling to different worlds.",
    "The laughter of children echoed through the playground.",
    "After a long day at work, I like to relax in a warm bath.",
    "The old oak tree provided shade on hot summer days.",
    "They celebrated their anniversary with a romantic dinner.",
    "The wise owl offered valuable advice to the young owlets.",
    "A rainbow appeared after the rain, bringing hope.",
    "The chef prepared a delicious meal with fresh ingredients.",
    "Lost in thought, she gazed out the window at the stars.",
    "The river flowed gently, reflecting the moon's glow.",
    "The athletes trained tirelessly for the upcoming competition.",
    "With a map in hand, they embarked on a journey of discovery.",
    "Music has the power to touch the soul and evoke emotions.",
  ];

  await randomSleep();
  // if (canThrowError("high")) throw new Error("Error while fetching data");
  return data[Math.floor(getRandomNumberBetween(0, data.length))];
}

function getUniqueSentences(n, c) {
  return new Promise(async (resolve, reject) => {
    // const numCalls = c;
    // const noOfSentences = n;
    let promises = [];
    const results = [];

    while (results.length <= n) {
      const callsMade = c;
      let timesToCallLoop = c;
      const resultsPendingCount = n - results.length;
      if (resultsPendingCount < c) {
        timesToCallLoop = resultsPendingCount;
      }
      promises = [];
      for (let i = 0; i < timesToCallLoop; i++) {
        promises.push(Promise.resolve(getMockSentences()));
      }

      const run = async () => {
        const data =await myAll(promises);
        data.forEach((e) => results.push(e))
        // for (let j = 0; j < promises.length; j++) {
        //   const currentPromise = promises[j];
        //   await currentPromise()
        //     .then((res) => {
        //       console.log("data");
        //       results.push(res);
        //     })
        //     .catch((e) => {
        //       console.log("error");
        //     });
        // }
      };
      await run();
      // console.log("results length", results.length);

      if (results.length === n) {
        break;
      }
      //   break;
    }

    // if(results.length === n) {
    //     return results
    // }
    resolve(results);
  });
}

(async function (){
  const data = await getUniqueSentences(10,4);
  console.log(data)
})();

// (async function () {
//   // const data = await getUniqueSentences(10, 4);
//   // console.log({ data });
//   console.log('sss')
//  const data1 = await myAll(
//   [
//     Promise.resolve(getMockSentences()),
//     Promise.resolve(getMockSentences()),
//     Promise.resolve(getMockSentences()),
//     Promise.resolve(getMockSentences()),
//   ]
//   )
//  console.log({data1})
// })();

