// https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/submissions/
class LLNode  {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}


var deleteMiddleNode = function(head) {
    let fast = head;
    let slow = head;
    let prev = null;

    while(fast && fast.next) {
        fast = fast.next.next;
        prev = slow;
        slow = slow.next;
    }
    prev.next = slow.next;
    return head
};

const ll = new LLNode(30);
const node33 = new LLNode(33);
const node43 = new LLNode(43);
const node54 = new LLNode(90);
const node58 = new LLNode(91);

ll.next = node33;
node33.next = node43;
node43.next = node54;
node54.next = node58;

console.log(deleteMiddleNode(ll))