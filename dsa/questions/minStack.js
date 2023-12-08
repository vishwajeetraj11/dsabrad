// 115 Min Stack
// https://leetcode.com/problems/min-stack/
/*
Push O(1)
Pop O(1)
Top O(1)
Set Min O(1)

Space: O(2n) = O(n)
-> 2 arrays of same size.
*/


class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(val) {
        if(!this.minStack.length) {
            this.minStack.push(val);
        } else if(this.minStack[this.minStack.length - 1] > val) {
            this.minStack.push(val)
        } else {
            this.minStack.push(this.minStack[this.minStack.length - 1])
        }
        this.stack.push(val)
    }

    pop() {
        if(!this.stack.length) return null;
        this.minStack.pop();
        return this.stack.pop()
    }

    getMin() {
        return this.minStack[this.minStack.length-1]
    }

    top() {
        return this.stack[this.stack.length-1]
    }
}

const stack = new MinStack();
stack.push(12);
stack.push(1);
stack.push(2);
stack.push(13);
stack.pop()
stack.pop()
console.log(stack)