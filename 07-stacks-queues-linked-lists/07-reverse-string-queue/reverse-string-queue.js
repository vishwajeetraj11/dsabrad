const Queue = require('./queue');

const reverseStringWithQueue = (str) => {
    const queue = new Queue();

    for(let i = 0; i<str.length; i++) {
        queue.enqueue(str[i])
    }

    // 1.
    let revString = '';
    // for(let i = 0; i<str.length; i++) {
    //     revString =queue.dequeue()+revString
    // }
    // return revString

    while(!queue.isEmpty()) {
        revString=queue.dequeue()+revString
    }
    return revString
};

module.exports = reverseStringWithQueue;
