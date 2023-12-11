// 2807. Insert Greatest Common Divisors in Linked List
// https://leetcode.com/problems/insert-greatest-common-divisors-in-linked-list/

const gcd = (a,b) => {
    if(!b) {
        return a;
    }
    return gcd(b,a%b);
}

const insertGreatestCommonDivisor = function(head) {
    const ans = head;
    let i = head;
    while(i && i.next) {
        i.next = new ListNode(gcd(i.val, i.next.val), i.next)
    }
    return ans;
}