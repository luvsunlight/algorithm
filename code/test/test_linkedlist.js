const log = require("../log")
const {
	Node,
	DoublyNode,
	List,
	LinkedList,
	DoublyLinkedList,
	SortedLinkedList,
	LinkedListCycle
} = require("../LinkedList")

log.green("testing LinkedList")

let test_add1 = new LinkedList([1, 2, 3])
let test_add2 = new LinkedList([])

log.blue("add 'a' after 1")
test_add1.list()
test_add1.addNode("a", 1)
test_add1.list()

log.blue("add 'a' after 1")
test_add2.list()
test_add2.addNode("a", 1)
test_add2.list()

log.blue("delete a")
test_add1.list()
test_add1.deleteNode("a")
test_add1.list()

log.blue("delete a")
test_add2.list()
test_add2.deleteNode("a")
test_add2.list()

log.blue("middleNode")

let test_mid1 = new LinkedList([1, 2])
let test_mid2 = new LinkedList([1, 2, 3])

test_mid1.list()
console.log(test_mid1.getMidNode().data)

test_mid2.list()
console.log(test_mid2.getMidNode().data)

log.blue("revert")
test_mid1.list()
test_mid1.revert()
test_mid1.list()

test_mid2.list()
test_mid2.revert()
test_mid2.list()

log.yellow("----")

log.green("testing doublyLinkedList")

let test_dblist = new DoublyLinkedList([1])

log.blue("init")
test_dblist.list()

log.blue("add 4 after 1")
test_dblist.list()
test_dblist.addNode(4, 1)
test_dblist.list()

log.blue("delete 1")
test_dblist.list()
test_dblist.deleteNode(1)
test_dblist.list()

log.blue("delete 4")
test_dblist.list()
test_dblist.deleteNode(4)
test_dblist.list()

log.yellow("----")

log.green("testing sortedLinkedList")

let test_sortlist = new SortedLinkedList([1, 4, 6])

log.blue("init")
test_sortlist.list()

log.blue("add 3")
test_sortlist.list()
test_sortlist.addNode(3)
test_sortlist.list()

log.blue("delete 4")
test_sortlist.list()
test_sortlist.deleteNode(4)
test_sortlist.list()

log.yellow("----")

log.green("testing linkedListCycle")

let test_cyclist = new LinkedListCycle([1, 2, 3])

log.blue("init")
test_cyclist.list()

log.blue("add 4 after 1")
test_cyclist.list()
test_cyclist.addNode(4, 1)
test_cyclist.list()

log.blue("delete 1")
test_cyclist.list()
test_cyclist.deleteNode(1)
test_cyclist.list()

log.blue("delete 3")
test_cyclist.list()
test_cyclist.deleteNode(3)
test_cyclist.list()
