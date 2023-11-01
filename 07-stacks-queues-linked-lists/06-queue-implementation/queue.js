class Queue {
    
    constructor() {
        this.queue = [];
        this.head = 0
        this.tail = 0
        this.maxSize = 100;
    }

    enqueue(value) {
        if(this.isFull()) return false;
        this.queue[this.tail] = value;
        this.tail++;
        return true;
    }

    isEmpty() {
        return this.getLength() === 0;
    }

    isFull() {
        return this.getLength() === this.maxSize
    }

    getLength() {
        return this.tail - this.head;
    }

    dequeue() {
    //     this.head--;
    //    return this.queue.pop()
    const item = this.queue[this.head];
    this.head++;
    return item;
    }

    peek() {
        return this.queue[this.head]
    }

}

module.exports = Queue;
