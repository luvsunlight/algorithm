[👈 Back](https://github.com/luvsunlight/algorithm/tree/master/%E9%98%9F%E5%88%97)

# designCircularDeque (设计一个双端队列)

[**Leetcode 641**](https://leetcode-cn.com/problems/design-circular-deque/)

## 描述

## 思路

<details>
<summary>点击展开</summary>
双端序列没什么难点，但是感觉它的应用还挺实际的，可以常来借鉴
</details>

## 代码

<details>
<summary>点击展开</summary>

```
/**
 * Initialize your data structure here. Set the size of the deque to be k.
 * @param {number} k
 */
var MyCircularDeque = function(k) {
	this.head = null
	this.tail = null
	this.maxLen = k
	this.currentLen = 0
}

/**
 * Adds an item at the front of Deque. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
	if (!this.isFull()) {
		let newNode = { val: value, next: null, prev: null }
		if (!this.head) {
			this.head = newNode
			if (!this.tail) this.tail = newNode
		} else {
			newNode.next = this.head
			this.head.prev = newNode
			this.head = newNode
		}
		this.currentLen++
		return true
	} else {
		return false
	}
}

/**
 * Adds an item at the rear of Deque. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
	if (!this.isFull()) {
		let newNode = { val: value, next: null, prev: null }
		if (!this.tail) {
			this.tail = newNode
			if (!this.head) this.head = newNode
		} else {
			newNode.prev = this.tail
			this.tail.next = newNode
			this.tail = newNode
		}
		this.currentLen++
		return true
	} else {
		return false
	}
}

/**
 * Deletes an item from the front of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
	if (!this.isEmpty()) {
		if (this.head !== this.tail) {
			this.head = this.head.next
		} else {
			this.head = null
			this.tail = null
		}
		this.currentLen--
		return true
	} else {
		return false
	}
}

/**
 * Deletes an item from the rear of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
	if (!this.isEmpty()) {
		if (this.head !== this.tail) {
			this.tail = this.tail.prev
		} else {
			this.head = null
			this.tail = null
		}
		this.currentLen--
		return true
	} else {
		return false
	}
}

/**
 * Get the front item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
	return this.head ? this.head.val : -1
}

/**
 * Get the last item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
	return this.tail ? this.tail.val : -1
}

/**
 * Checks whether the circular deque is empty or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
	return !this.head && !this.tail
}

/**
 * Checks whether the circular deque is full or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
	return this.currentLen === this.maxLen
}

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
```

</details>