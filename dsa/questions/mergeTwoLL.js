// https://leetcode.com/problems/merge-two-sorted-lists/
// 21. Merge Two Sorted Lists


function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let res = new ListNode(-1);
    let dummy = res;
    while(list1||list2) { 
        if(!list1) {
            dummy.next = list2;
            break
        }
        if(!list2) {
            dummy.next = list1;
            break
        }
        if(list1.val <= list2.val) {
            const node = new ListNode(list1.val);
            dummy.next = node;
            dummy = dummy.next;
            list1 = list1 ? list1.next :null;
        } else {
            const node = new ListNode(list2.val);
            dummy.next = node;
            dummy = dummy.next;
            list2 = list2?list2.next:null;
        }
    }
    return res.next;
};

const ll = new ListNode(1);
const nodeA = new ListNode(4);
const nodeB = new ListNode(7);

const ll2 = new ListNode(2);
const nodeA2 = new ListNode(3);
const nodeB2 = new ListNode(5);

ll.next = nodeA;
nodeA.next = nodeB;

ll2.next = nodeA2;
nodeA2.next = nodeB2;

console.log(mergeTwoLists(ll, ll2))