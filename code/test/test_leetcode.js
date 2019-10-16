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

let a = mergeKLists([{ val: null, next: null }])
console.log(a)
