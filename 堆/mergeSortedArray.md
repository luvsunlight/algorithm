[👈 Back](https://github.com/luvsunlight/algorithm/tree/master/%E5%A0%86)

# mergeKSortedArray (合并k个有序数组)

[**Leetcode 23**](https://leetcode-cn.com/problems/merge-k-sorted-lists/)

## 描述

合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。

示例:

```
输入:
[
  1->4->5,
  1->3->4,
  2->6
]
输出: 1->1->2->3->4->4->5->6
```

## 思路

<details>
<summary>点击展开</summary>
如果k=2，我们可以简单地使用双指针，如果k一旦增大，再使用这种简单的思维就会导致效率的低下（主要体现在每一次循环都要判断出n个数中的最小值）这个时候，我们可以维护一个堆（堆可以帮我们直接判断出最小值），首先遍历所有数组的第一个元素，找到最小的，之后将该值移出堆，并且从那个数组中再取出一个值，一直循环直至所有数据取光
</details>

## 代码

<details>
<summary>点击展开</summary>

```
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
class Heap {
	constructor(arr) {
		this.heap = [0, ...arr]
		this.operator = "<"
	}
	setHeap() {
		for (let i = Math.floor((this.heap.length - 1) / 2); i > 0; i--) {
			this.heaper(i)
		}
	}
	operate(a, b) {
		if (this.operator === "<") return a < b
		if (this.operator === ">") return a > b
	}
	heaper(i) {
		while (this.heap[2 * i]) {
			let [center, left, right] = [
				this.heap[i],
				this.heap[2 * i],
				this.heap[2 * i + 1]
			]
			if (left && this.operate(left, center)) {
				if (right && this.operate(right, left)) {
					let temp = this.heap[i]
					this.heap[i] = this.heap[2 * i + 1]
					this.heap[2 * i + 1] = temp
					i = 2 * i + 1
				} else {
					let temp = this.heap[i]
					this.heap[i] = this.heap[2 * i]
					this.heap[2 * i] = temp
					i = 2 * i
				}
			} else if (right && this.operate(right, center)) {
				let temp = this.heap[i]
				this.heap[i] = this.heap[2 * i + 1]
				this.heap[2 * i + 1] = temp
				i = 2 * i + 1
			} else {
				break
			}
		}
	}
	add(n) {
		if (n) this.heap.push(n)
		let i = this.heap.length - 1
		while (i > 1) {
			let parent = Math.floor(i / 2)
			if (this.operate(this.heap[i], this.heap[parent])) {
				let temp = this.heap[i]
				this.heap[i] = this.heap[parent]
				this.heap[parent] = temp
				i = parent
			} else {
				break
			}
		}
	}
	delete() {
		if (this.heap.length > 2) {
			this.heap[1] = this.heap.pop()
			this.heaper(1)
		} else {
			this.heap.pop()
		}
	}
}
var mergeKLists = function(lists) {
	if (lists.length === 0) return []
	let [res, node] = [null, null]
	let heap = new Heap([])
	lists.map(list => {
		if (list) heap.add(list.val)
	})
	if (heap.heap.length === 1) return []
	while (true) {
		let min = heap.heap[1]
		heap.delete()
		if (heap.heap.length === 0) break
		if (res) {
			node.next = { val: min, next: null }
			node = node.next
		} else {
			res = { val: min, next: null }
			node = res
		}
		for (let i = 0; i < lists.length; i++) {
			if (lists[i] && lists[i].val === min) {
				if (lists[i].next) {
					heap.add(lists[i].next.val)
					lists[i] = lists[i].next
				}
				break
			}
		}
	}
	return res
}
```

</details>