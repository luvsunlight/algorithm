# 实现单链表，循环链表，双向链表，支持增删操作

## 描述

实现单链表，循环链表，双向链表，支持增删操作

## 思路

<details>
<summary>点击展开</summary>
难度不是很大，主要是麻烦和bug free（要多加练习）
</details>

## 代码

<details>
<summary>单链表</summary>

```
class Node {
	constructor(data, next = null) {
		Object.assign(this, { data, next })
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

	getMidNode() {
		let [fastNode, slowNode] = [this.head, this.head]
		while (fastNode) {
			fastNode = fastNode.next ? fastNode.next.next : fastNode.next
			if (fastNode) slowNode = slowNode.next
		}
		return slowNode
	}
}
```

</details>

<details>
<summary>循环链表</summary>

```
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
```

</details>

<details>
<summary>双向链表</summary>

```
class DoublyNode extends Node {
	constructor(data, next = null, prev = null) {
		super(data, next)
		this.prev = prev
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
```

</details>

<details>
<summary>有序链表</summary>

```
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
```

</details>
