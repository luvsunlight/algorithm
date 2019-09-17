const chalk = require("chalk")

class Node {
	constructor(data, next = null) {
		Object.assign(this, { data, next })
	}
}

class LinkedList {
	constructor(data) {
		this.head = null
		let [node, newNode] = [null, null]
		data.map((item, index) => {
			newNode = new Node(item)
			if (index === 0) this.head = newNode
			if (node) node.next = newNode
			node = newNode
		})
	}
	list() {
		let node = this.head
		let list = []
		while (node) {
			// console.log(node.data)
			list.push(node.data)
			node = node.next
		}
		console.log(list)
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
		if (this.head && !this.head.next) {
			this.head = null
			return
		}
		let node = this.head
		while (node && node.data !== nodeName) {
			node = node.next
		}
		if (node) {
			node.next = node.next.next
		}
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

let a = new Node(1)

let b = new LinkedList([1, 2, 3])

let c = new LinkedList([])

// console.log(chalk.green("testing b"))
// b.list()

// console.log(chalk.blue("add 'a'"))
// b.addNode("a", 1)
// b.list()

// console.log(chalk.blue("delete 2"))
// b.deleteNode("a")
// b.list()

// console.log(chalk.yellow("----"))

// console.log(chalk.green("testing c"))
// c.list()

// console.log(chalk.blue("add 1"))
// c.addNode(1)
// c.list()

// console.log(chalk.blue("delete 1"))
// c.deleteNode(1)
// c.list()

console.log(chalk.yellow("----"))

console.log(chalk.green("testing middleNode"))

let test_mid1 = new LinkedList([1, 2])
let test_mid2 = new LinkedList([1, 2, 3])

test_mid1.list()
console.log(test_mid1.getMidNode().data)

test_mid2.list()
console.log(test_mid2.getMidNode().data)
