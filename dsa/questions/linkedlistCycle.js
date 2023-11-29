// 141. Linked List Cycle
// https://leetcode.com/problems/linked-list-cycle/

class LLNode  {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */


// var hasCycle = function(head) {
//     let fast = head;
//     let slow = head;
//     while(fast && fast.next) {
//         fast = fast.next.next;
//         slow = slow.next;
//         if(fast===slow) {
//             console.log(fast)
//             console.log(slow)
//             return true;
//         }
//     }
//     return false;
// };


var hasCycle = function(head) {
    let current = head;
    while(current) {
        if(current.val === 'p') {
            return true
        }
        current.val = 'p';
        current = current.next;
    }
    return false
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

console.log(ll)

console.log(hasCycle(ll))