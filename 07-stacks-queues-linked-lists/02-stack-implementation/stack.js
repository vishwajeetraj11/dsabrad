class Stack {

    constructor() {
        this.maxSize = 100;
        this.stack = [];
        this.top = -1;
    }

    push(value) {
        if(this.isFull()) return false;
        this.top++;
        this.stack[this.top] = value;
        return true;
    }

    pop() {
        // If stack empty.
        if(this.isEmpty()) return null;
        this.top--;
        return this.stack.pop();;
    }

    isEmpty() {
        return this.top === -1;
    }

    isFull() {
        return this.top === this.maxSize - 1;
    }

    peek() {
        if(this.isEmpty()) return null;
        return this.stack[this.top]
    }

}

module.exports = Stack;
