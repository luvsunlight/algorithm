/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
	this.capacity = capacity
	this.hashmap = {}
	this.head = null
	this.tail = null
	this.length = 0
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
	let res = -1
	let node = this.head

	// Search if key exists
	while (node && node.key !== key) {
		node = node.next
	}
	if (node) {
		res = node.value
		let newNode = { key, value: node.value, next: null, prev: null }
		// Delete
		if (node.prev) {
			node.prev.next = node.next
		} else {
			this.head = this.head.next ? this.head.next : null
		}
		if (node.next) {
			node.next.prev = node.prev
		} else {
			this.tail = this.tail.prev ? this.tail.prev : null
		}
		// Insert to head
		if (this.head) {
			newNode.next = this.head
			this.head.prev = newNode
			this.head = newNode
		} else {
			this.head = newNode
			this.tail = newNode
		}
		// Check whether length <= capacity
		if (this.length > this.capacity) {
			this.tail.prev.next = null
			this.tail = this.tail.prev
		}
	}

	return res
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
	let node = this.head
	let newNode = { key, value, next: null, prev: null }
	if (!node) {
		this.length++
		this.head = newNode
		this.tail = newNode
		return
	}
	// Search if key exists
	while (node && node.key !== key) {
		node = node.next
	}
	// If existed then delete
	if (node) {
		if (node.prev) {
			node.prev.next = node.next
		} else {
			this.head = this.head.next ? this.head.next : null
		}
		if (node.next) {
			node.next.prev = node.prev
		} else {
			this.tail = this.tail.prev ? this.tail.prev : null
		}
	} else {
		this.length++
	}
	// Insert to head
	if (this.head) {
		newNode.next = this.head
		this.head.prev = newNode
		this.head = newNode
	} else {
		this.head = newNode
		this.tail = newNode
	}
	// Check whether length <= capacity
	if (this.length > this.capacity) {
		this.tail.prev.next = null
		this.tail = this.tail.prev
		this.length--
	}
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

let cache = new LRUCache(1)

cache.put(2, 1)
console.log(cache.get(2))

cache.put(2, 1)

// cache.put(1, 1)
// cache.put(2, 2)

// console.log(cache.get(1))

// cache.put(3, 3)

// console.log(cache.get(2))

// cache.put(4, 4)

// console.log(cache.get(1))

// console.log(cache.get(3))

// console.log(cache.get(4))
