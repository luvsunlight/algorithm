[👈 Back](https://github.com/luvsunlight/algorithm/tree/master/%E9%93%BE%E8%A1%A8)

# mergeKSortedList (合并k个排序链表)

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
这个题当然可以暴力解，我们直接对k个链表两两合并，甚至使用分治的思路都可以，但是这么做始终效率非常低，那么有没有更适合的合并多个小文件是堆最典型的应用

我们首先拿每个链表的第一个元素建一个大小为k的小顶堆，然后拿出堆的最小元素放入新链表，并且从拿出来的那个链表中取下一个元素，如此循环直至所有链表偶读没有元素可以取
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