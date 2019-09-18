const log = require("./log")

class Node {
	constructor(data, next = null) {
		Object.assign(this, { data, next })
	}
}

class DoublyNode extends Node {
	constructor(data, next = null, prev = null) {
		super(data, next)
		this.prev = prev
	}
}

class List {
	constructor() {
		this.head = null
	}
	list() {
		let node = this.head
		let listStr = node ? node.data : "[]"
		while (node) {
			node = node.next
			listStr = `${listStr} ${node && node.prev ? "<=>" : "=>"} ${
				node ? node.data : "null"
			}`
		}

		console.log(listStr)
	}
}

class LinkedList extends List {
	constructor(data) {
		super()
		let [node, newNode] = [null, null]
		data.map((item, index) => {
			newNode = new Node(item)
			if (index === 0) this.head = newNode
			if (node) node.next = newNode
			node = newNode
		})
	}
	addNode(childNodeName, parentNodeName) {
		if (!this.head) {
			this.head = new Node(childNodeName)
			return
		}
		let node = this.head
		while (node && node.data !== parentNodeName) {
			node = node.next
		}
		if (node) {
			let newNode = new Node(childNodeName)
			newNode.next = node.next
			node.next = newNode
		}
	}

	deleteNode(nodeName) {
		if (this.head && this.head.data === nodeName) {
			this.head = this.head.next
			return
		}
		let node = this.head
		while (node && node.next && node.next.data !== nodeName) {
			node = node.next
		}
		if (node && node.next) {
			node.next = node.next.next
		}
	}

	revert() {
		let [prevNode, currentNode, nextNode] = [null, this.head, this.head]
		while (nextNode) {
			nextNode = currentNode.next
			currentNode.next = prevNode
			prevNode = currentNode
			currentNode = nextNode
		}
		this.head = prevNode
	}

	getMidNode() {
		let [fastNode, slowNode] = [this.head, this.head]
		while (fastNode) {
			fastNode = fastNode.next ? fastNode.next.next : fastNode.next
			if (fastNode) slowNode = slowNode.next
		}
		return slowNode
	}
}

class DoublyLinkedList extends List {
	constructor(data) {
		super()
		let [node, newNode] = [null, null]
		data.map((item, index) => {
			newNode = new DoublyNode(item)
			if (index === 0) this.head = newNode
			if (node) {
				node.next = newNode
				newNode.prev = node
			}
			node = newNode
		})
	}
	addNode(childNodeName, parentNodeName) {
		if (!this.head) {
			this.head = new DoublyNode(childNodeName)
			return
		}
		let node = this.head
		while (node && node.data !== parentNodeName) {
			node = node.next
		}
		if (node) {
			let newNode = new DoublyNode(childNodeName)
			newNode.next = node.next
			newNode.prev = node
			if (node.next) node.next.prev = newNode
			node.next = newNode
		}
	}
	deleteNode(nodeName) {
		if (this.head && this.head.data === nodeName) {
			this.head.prev = null
			this.head = this.head.next
			return
		}
		let node = this.head
		while (node && node.next && node.next.data !== nodeName) {
			node = node.next
		}
		if (node && node.next) {
			if (node.next.next) node.next.next.prev = node
			node.next = node.next.next
		}
	}
}

class SortedLinkedList extends List {
	constructor(data) {
		super()
		data.sort((a, b) => a - b)
		let [node, newNode] = [null, null]
		data.map((item, index) => {
			newNode = new Node(item)
			if (index === 0) this.head = newNode
			if (node) {
				node.next = newNode
			}
			node = newNode
		})
	}
	addNode(nodeName) {
		if (!this.head) {
			this.head = new Node(nodeName)
			return
		}
		if (this.head && this.head.data > nodeName) {
			let newNode = new Node(nodeName)
			newNode.next = this.head
			this.head = newNode
			return
		}
		let node = this.head
		while (node && node.next && node.next.data < nodeName) {
			node = node.next
		}
		let newNode = new Node(nodeName)
		newNode.next = node.next
		node.next = newNode
	}
	deleteNode(nodeName) {
		if (this.head && this.head.data === nodeName) {
			this.head = this.head.next
			return
		}
		let node = this.head
		while (node && node.next && node.next.data !== nodeName) {
			node = node.next
		}
		if (node && node.next) {
			node.next = node.next.next
		}
	}
}

class LinkedListCycle extends List {
	constructor(data) {
		super()
		let [node, newNode] = [null, null]
		data.map((item, index) => {
			newNode = new Node(item)
			if (index === 0) {
				this.head = newNode
			}
			if (node) node.next = newNode
			node = newNode
		})
		if (node) node.next = this.head
	}
	list() {
		let node = this.head
		let listStr = node ? node.data : "[]"
		while (node) {
			node = node.next
			listStr = `${listStr} ${node && node.prev ? "<=>" : "=>"} ${
				node ? node.data : "null"
			}`
			if (node === this.head) {
				listStr += "..."
				break
			}
		}

		console.log(listStr)
	}
	addNode(childNodeName, parentNodeName) {
		if (!this.head) {
			this.head = new Node(childNodeName)
			return
		}
		let node = this.head
		while (node && node.data !== parentNodeName) {
			node = node.next
			if (node === this.head) {
				node = null
				break
			}
		}
		if (node) {
			let newNode = new Node(childNodeName)
			if (node.next) {
				newNode.next = node.next
			} else {
				newNode.next = this.head
			}
			node.next = newNode
		}
	}
	deleteNode(nodeName) {
		if (this.head && this.head.data === nodeName) {
			let node = this.head
			while (node.next !== this.head) node = node.next
			node.next = this.head.next
			this.head = this.head.next
			return
		}
		let node = this.head
		while (node && node.next && node.next.data !== nodeName) {
			node = node.next
		}
		if (node && node.next) {
			if (node.next.next) {
				node.next = node.next.next
			} else {
				node.next = this.head
			}
		}
	}
}

/* simple unit test */

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
