class Heap {
	constructor(arr) {
		this.heap = [0, ...arr]
		this.operator = ""
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
		this.heap.push(n)
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
		this.heap[1] = this.heap.pop()
		this.heaper(1)
	}
}

class SmallHeap extends Heap {
	constructor(arr) {
		super(arr)
		this.operator = "<"
		this.setHeap()
	}
}

class BigHeap extends Heap {
	constructor(arr) {
		super(arr)
		this.operator = ">"
		this.setHeap()
	}
}

function heapSort(arr) {
	let heap = new SmallHeap(arr)
	let res = []
	for (let i = heap.heap.length - 1; i > 0; i--) {
		let temp = heap.heap[i]
		heap.heap[i] = heap.heap[1]
		heap.heap[1] = temp
		res.push(heap.heap.pop())
		heap.heaper(1)
	}
	return res
}

module.exports = {
	SmallHeap,
	BigHeap,
	heapSort
}
