/*
https://leetcode.com/problems/remove-linked-list-elements/
203. Remove Linked List Elements
*/

class ListNode  {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}
// sol 1
var removeElements1 = function(head, val) {
    if(!head) return null;


    while(head) {
        if(head.val === val) {
            head = head.next;
        } else {
            break
        }
    }

    let curr = head;
    let prev = null;
    
    while(curr) {
        if(curr.val === val) {
            prev.next = curr.next;
            curr = curr.next;
        } else {
            prev = curr;
            curr = curr.next;
        }
    }

    return head
};

var removeElements = function(head, val) {
    let dummy = new ListNode(-1);
    dummy.next = head;
    let prev = dummy;
    let curr = head;

    while(curr) {
        if(curr.val === val) {
            prev.next = curr.next;
            curr = curr.next;
        } else {
            prev = curr;
            curr = curr.next;
        }
    }
    return dummy.next;
};

const ll = new ListNode(6);
const node33 = new ListNode(6);
const node43 = new ListNode(6);
const node90 = new ListNode(6);
const node58 = new ListNode(50);
const node901 = new ListNode(6);

ll.next = node33;
node33.next = node43;
node43.next = node90;
node90.next = node58;
node58.next = node901;

console.log(ll)

console.log(removeElements(ll, 6))