
// 19. Remove Nth Node From End of List
// https://leetcode.com/problems/remove-nth-node-from-end-of-list/


class ListNode  {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}

const removeNthFromEnd = (head, n) => {
    let dummyHead = new ListNode(-1);
    dummyHead.next = head;

    let resultHead = dummyHead;

    let count = 0;
    let tail = head;
    while(count < n) {
        count++;
        tail = tail.next;
    }

    let removeNode = head;
    let prev = dummyHead;
    while(tail) {
        tail = tail.next;
        removeNode = removeNode.next;
        prev = prev.next;
    }

    prev.next = removeNode.next;
    return resultHead.next;
}

const ll = new ListNode(30);
const node33 = new ListNode(33);
const node43 = new ListNode(43);
const node90 = new ListNode(90);
const node58 = new ListNode(91);

ll.next = node33;
node33.next = node43;
node43.next = node90;
node90.next = node58;

console.log(ll)