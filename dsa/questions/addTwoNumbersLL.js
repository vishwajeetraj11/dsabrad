// https://leetcode.com/problems/add-two-numbers/
// 2. Add Two Numbers

class LLNode  {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}

const revLL = () => {

}

const addTwoNumber = (l1, l2) => {
    let carry = 0;
    let result = new LLNode(-1);
    let dummy = result;
    while(l1||l2||carry) {
        const l1Value = l1? l1.val:0;
        const l2Value = l2? l2.val:0;
        let digit = (l1Value+l2Value+carry)%10;
        result.next = new LLNode(digit);
        result = result.next;
        carry = Math.floor((l1Value+l2Value+carry)/10)
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }
    return dummy.next;
}