// https://leetcode.com/problems/palindrome-linked-list/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// bruteforce
// var isPalindrome = function(head) {
//     if(head === null) {
//             return true
//         }
//         const arr=[];
//         let current = head;
//         while(current!==null) {
//             arr.push(current.val)
//             current = current.next;
//         }
        
//         for(let i=0;i<arr.length;i++) {
//             if(arr[i] !== arr[arr.length-1-i]) {
//                 return false;
//             }
//         }
//         return true;
// };

const reverseLL = (head) => {
    let curr = head;
    let next = null, prev = null;
    while(curr) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}
const isPalindrome = (head) => {
    let fast = head;
    let slow = head;

    let pointer = head;
    let length = 0;

    while(fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        len++;
    }

    let mid = reverseLL(slow); 

    while(length) {
        length--;
        if(mid.val !== pointer.val) {
            return false;
        }
        mid = mid.next;
        pointer = pointer.next;
    }
    return true;
}