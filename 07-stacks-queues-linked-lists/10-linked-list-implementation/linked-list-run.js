const { LinkedList } = require('./linked-list');

const list = new LinkedList()

list.add(2)
list.add(44)
list.printAll()

console.log('LL get', list.get(1))

list.insertAt(1, 800)
list.removeFrom(1)
list.printAll()