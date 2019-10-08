[👈 Back](https://github.com/luvsunlight/algorithm/tree/master/%E6%95%A3%E5%88%97%E8%A1%A8)

# linkedListHashTable (使用链表法解决散列表冲突)

## 描述

理论上的散列表具有一一对应的关系，即一个key对应一个散列值(index),但是并没有这样完美的算法。也就是说在实际应用中，我们一定与遇到不同的key，经过散列函数映射后得到相同index的情况，针对这种冲突情况，我们有开放寻址法，即在数组中寻找空闲的位置并且予以插入。也有链表法，即在对应index的位置形成链表

## 思路

<details>
<summary>点击展开</summary>
根据key生成散列值，在散列值对应的地址生成链表，value直接插入到链表中
</details>

## 代码

<details>
<summary>点击展开</summary>

```
class HashTable {
	constructor() {
		this.array = []
	}
	hash(key) {
		return key % 10
	}
	add(key, val) {
		let index = this.hash(key)
		let newNode = { key, val, next: null }
		if (typeof this.array[index] === "undefined") {
			this.array[index] = newNode
		} else {
			newNode.next = this.array[index]
			this.array[index] = newNode
		}
	}
	get(key) {
		let index = this.hash(key)
		if (typeof this.array[index] === "undefined") {
			return null
		} else {
			let node = this.array[index]
			while (node.key !== key) {
				node = node.next
			}
			return node.val
		}
	}
}
```

</details>