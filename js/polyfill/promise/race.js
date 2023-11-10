Promise.myRace = function(promises) {
    return new Promise((resolve, reject) => {
      promises.forEach(promise => {
        Promise.resolve(promise).then(resolve, reject);
      });
    });
  };

  let promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'one');
  });
  
  let promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 900, 'two');
  });
  
  Promise.myRace([promise1, promise2]).then((value) => {
    console.log(value);
    // Expected output: "two"
  });