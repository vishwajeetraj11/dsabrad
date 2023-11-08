const { LinkedList,isPalindromeLinkedList } = require('./linked-list');

const list = new LinkedList()

list.add(1)
list.add(2)
// list.add(1)
// list.add(1)
// list.add(2)
// list.add(3)
// list.printAll()

// console.log('LL get', list.get(1))

// list.insertAt(1, 800)
// list.removeFrom(1)
list.printAll()
console.log(
    list.isPalindromeLinkedList())