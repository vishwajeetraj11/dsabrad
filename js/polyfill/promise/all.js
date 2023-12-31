const myAll =  (promises) => {
    const responses = [];
    const errorResponses = [];
    return new Promise((resolve, reject) => {
        promises.forEach(async (promise, i) => {
            try {
            if(errorResponses.length !==0) {
                reject(errorResponses[0])
            }
            const data = await promise;
            sleep()
            responses.push(data);
            if(i === promises.length - 1) {
                resolve(responses);
            }
        } catch(e) {
         errorResponses.push(e);
        //  reject(e)
        }
        }) 
        
    })
}

const sleep = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve(1),5000)
})

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
    if (canThrowError("high")) throw new Error("Error while fetching data");
    return data[Math.floor(getRandomNumberBetween(0, data.length))];
  }
  



Promise.myAll = myAll;

Promise.myAll([
    // // Promise.reject(44),
    // new  Promise((resolve) => resolve('Apples')),
    // Promise.resolve(32),
    // Promise.resolve('90'),
    // Promise.resolve('349'),
    // Promise.resolve('mvdks'),
    getMockSentences(),
    getMockSentences(),
    getMockSentences(),
    getMockSentences(),
    getMockSentences(),
    getMockSentences(),
]).then(res => {
    console.log(res)
}).catch(e => {
    console.log(e)
})


