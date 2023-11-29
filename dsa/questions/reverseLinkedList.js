// 206. Reverse Linked List
// https://leetcode.com/problems/reverse-linked-list/
class LLNode  {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}


const reverseLL = (head) => {
    let curr = head;
    let prev = null;
    let next = null;

    while(curr) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}



const ll = new LLNode(30);
const node33 = new LLNode(33);
const node43 = new LLNode(43);
const node90 = new LLNode(90);
const node58 = new LLNode(91);

ll.next = node33;
node33.next = node43;
node43.next = node90;
node90.next = node58;

console.log(ll)
console.log(reverseLL(ll))