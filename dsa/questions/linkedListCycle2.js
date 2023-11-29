// https://leetcode.com/problems/linked-list-cycle-ii/description/
const detectCycle = (head) => {
    if(!head || !head.next) return null;
    let fast = head;
    let slow = head;
    let pointer = head;
    while(fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        if(fast===slow) break;
    }
    if(fast!==slow) return null;
    while(pointer !== slow) {
        pointer = pointer.next;
        slow = slow.next;
    }
    return pointer;
}