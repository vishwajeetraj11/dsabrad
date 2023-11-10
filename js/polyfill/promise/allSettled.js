Promise.myAllSettled = function (promises) {
    return Promise.all(
        promises.map((promise) =>
        promise
            .then((value) => ({
            status: "fulfilled",
            value,
            }))
            .catch((reason) => ({
            status: "rejected",
            reason,
            }))
        )
    );
    }


// Example to test this code.
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
const promises = [promise1, promise2];
const data =  Promise.myAllSettled(promises).then((values) => {
    console.log(values);
})
// console.log(data) 