[👈 Back](https://github.com/luvsunlight/algorithm/tree/master/%E9%98%9F%E5%88%97)

# 顺序队列和链式队列

## 描述

分别用数组和链表实现队列

## 思路

<details>
<summary>点击展开</summary>

注意队列和栈的区别，队列有两个指针

</details>

## 代码

<details>
<summary>点击展开</summary>

```
const { LinkedList, Node } = require("./LinkedList")

class Queue {
	constructor(data) {
		this.data = data
		this.head = 0
		this.tail = data.length
	}
	list() {
		let queueStr = `[head${this.head}]`
		for (let i = this.head; i < this.tail; i++) {
			queueStr += ` <= ${this.data[i]}`
		}
		queueStr += ` <= tail[${this.tail}]`
		console.log(queueStr)
	}
	enqueue(n) {
		this.data.push(n)
		this.tail++
	}
	dequeue() {
		let result = this.data[this.head]
		this.head++
		return result
	}
}

class LinkedListQueue {
	constructor(data) {
		this.data = new LinkedList(data)
		this.head = this.data.head
		this.tail = this.getTail(this.data)
	}
	getTail(list) {
		let node = list.head
		while (node && node.next) {
			node = node.next
		}
		return node
	}
	list() {
		let queueStr = "head"
		let node = this.head

		while (node) {
			queueStr += ` => ${node.data}`
			if (node === this.tail) break
			node = node.next
		}
		queueStr += " => tail"
		console.log(queueStr)
	}
	enqueue(n) {
		let newNode = new Node(n)
		newNode.next = this.tail.next
		this.tail.next = newNode
		this.tail = newNode
	}
	dequeue() {
		this.head = this.head.next
	}
}
```

</details>

