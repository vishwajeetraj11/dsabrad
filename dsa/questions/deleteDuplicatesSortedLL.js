// Remove Duplicates from Sorted List II
// https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/

class ListNode  {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}


const ll = new ListNode(30);
const node33 = new ListNode(6);
const node43 = new ListNode(6);
const node90 = new ListNode(65);
const node58 = new ListNode(91);

ll.next = node33;
node33.next = node43;
node43.next = node90;
node90.next = node58;

const deleteDuplicates = function(head) {
    if(!head) return null;
    let dummy = new ListNode(-1, head);
    let prev = dummy;
    let curr = head;
    let next = curr.next;

    while(curr) {
        if(curr&& next&& curr.val === next.val) {
            while(next && curr.val === next.val) {
                next = next.next;
            }
            prev.next = next;
            curr = next;
            next = next ? next.next : null;
        } else {
            prev = curr;
            curr = next;
            next = next ? next.next : null;
        }
    }
    return dummy.next;
}

console.log(deleteDuplicates(ll))