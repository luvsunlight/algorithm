# 链式栈和顺序栈

## 描述

分别用数组实现一个顺序栈和用链表实现一个链式栈

## 思路

<details>
<summary>点击展开</summary>

主要是要注意链表为空的情况

</details>

## 代码

<details>
<summary>点击展开</summary>

```
const { LinkedList, Node } = require("./LinkedList")

class Stack {
	constructor(data) {
		this.data = data
	}
	revert() {
		return Array.prototype.concat(this.data, []).reverse()
	}
	list() {
		let stackStr = "head"
		this.revert().map(item => {
			stackStr += ` => ${item}`
		})
		console.log(stackStr) 
	}
	push(n) {
		this.data.push(n)
	}
	pop() {
		this.data.pop()
	}
}

class LinkedListStack {
	constructor(data) {
		this.data = new LinkedList(data)
	}
	list() {
		let stackStr = "head"
		this.data.revert()
		let node = this.data.head

		while (node) {
			stackStr += ` => ${node.data}`
			node = node.next
		}
		console.log(stackStr)
		this.data.revert()
	}
	pop() {
		let node = this.data.head
		if (!node.next || !node) {
			this.data.head = null
			return
		}
		while (node && node.next && node.next.next) {
			node = node.next
		}
		node.next = null
	}
	push(n) {
		let node = this.data.head
		while (node && node.next) {
			node = node.next
		}
		let newNode = new Node(n)
		newNode.next = null
		if (node) {
			node.next = newNode
		} else {
			this.data.head = newNode
		}
	}
}
```

</details>