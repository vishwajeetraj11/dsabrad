/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if(!head) return null;
    let prev = head;
    let curr = head.next;
    while(prev) {
       
        if(!curr) return head;
        if(prev.val === curr.val) {
            prev.next = curr.next;
        } else {
            prev = curr;
        }
        curr = curr.next;
    }
    return head
};


const ll = new Node(1);
const nodeA = new Node(1);
const nodeB = new Node(1);

ll.next = nodeA;
nodeA.next = nodeB;

console.log(deleteDuplicates1(ll))
