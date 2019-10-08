[👈 Back](https://github.com/luvsunlight/algorithm/tree/master/%E9%93%BE%E8%A1%A8)

# LRU缓存算法

[**Leetcode 142**](https://leetcode-cn.com/problems/lru-cache/)

## 描述

运用你所掌握的数据结构，设计和实现一个LRU(最近最少使用缓存机制)，它应该支持如下操作，获取数据get和写入数据put

获取数据 get(key) - 如果密钥 (key) 存在于缓存中，则获取密钥的值（总是正数），否则返回 -1。

写入数据 put(key, value) - 如果密钥不存在，则写入其数据值。当缓存容量达到上限时，它应该在写入新数据之前删除最近最少使用的数据值，从而为新的数据值留出空间。

示例

```
LRUCache cache = new LRUCache( 2 /* 缓存容量 */ );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // 返回  1
cache.put(3, 3);    // 该操作会使得密钥 2 作废
cache.get(2);       // 返回 -1 (未找到)
cache.put(4, 4);    // 该操作会使得密钥 1 作废
cache.get(1);       // 返回 -1 (未找到)
cache.get(3);       // 返回  3
cache.get(4);       // 返回  
```

## 思路

<details>
<summary>点击展开</summary>

我们维护一个有序列表，每当有数据插入进来，我们首先从头部开始遍历

如果找到对应数据，则删除之，然后将数据插入到头部（从这一点可以决定为什么是链表而不是队列）

如果没找到对应数据，则有两种情况，一个是缓存满了，则删除尾节点，然后将数据插入到头部，另外一个是缓存没满，则将数据插入到头部

那么我们可以看到真正占时间复杂度的操作是查找，删除，添加。那么散列表可以让我们以O(1)的复杂度进行查找，双向链表可以让我们以O(1)的形式对指定的节点进行删除和增加，两者相结合，就可以以O(1)的时间复杂度完成LRU缓存

</details>

## 代码

<details>
<summary>点击展开</summary>

1. 普通的双链表

```
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
```

2. 散列表+双链表

```
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
	this.capacity = capacity
	this.hashtable = {}
	this.length = 0
	this.head = null
	this.tail = null
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
	let res = -1
	if (typeof this.hashtable[key] !== "undefined") {
		// If exists, delete it
		let node = this.hashtable[key]
		let newNode = { key, value: node.value, next: null, prev: null }
		res = node.value
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
		// Insert to HashTable
		this.hashtable[key] = newNode
		// Check whether length <= capacity
		if (this.length > this.capacity) {
			this.hashtable[this.tail.key] = undefined
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
	let newNode = { key, value, next: null, prev: null }
	// If exists, delete it
	if (typeof this.hashtable[key] !== "undefined") {
		let node = this.hashtable[key]
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
	// Insert to HashTable
	this.hashtable[key] = newNode
	// Check whether length <= capacity
	if (this.length > this.capacity) {
		this.hashtable[this.tail.key] = undefined
		this.tail.prev.next = null
		this.tail = this.tail.prev
		this.length--
	}
}
```
</details>