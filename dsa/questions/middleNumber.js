// https://leetcode.com/problems/middle-of-the-linked-list/submissions/


class LLNode  {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let fast = head;
    let slow = head;
    let prev = null;

    while(fast && fast.next ) {
        fast = fast.next.next;
        slow = slow.next;
    }

    return slow
};