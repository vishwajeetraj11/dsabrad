// 237. Delete Node in a Linked List
// https://leetcode.com/problems/delete-node-in-a-linked-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */

class LLNode  {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}


var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
    return node;
};



const ll = new LLNode(30);
const node33 = new LLNode(33);
const node43 = new LLNode(43);
const node90 = new LLNode(90);
const node58 = new LLNode(91);

ll.next = node33;
node33.next = node43;
node43.next = node90;
node90.next = node58;

// console.log(ll)
console.log(deleteNode(node33))
