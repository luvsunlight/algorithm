[👈 Back](https://github.com/luvsunlight/algorithm/tree/master/%E5%A0%86)

# heaps (实现一个小顶堆，大顶堆，优先级队列)

## 描述

实现一个小顶堆，大顶堆，优先级队列

## 思路

<details>
<summary>点击展开</summary>

小顶堆/大顶堆，即每个元素都比子元素小/大.因为堆必定是完全二叉树，所以堆最好最好是使用数组来维护。建堆的过程就是从1-n/2，依次从上至下堆化。堆的基本功能，增加是从下至上的堆化，删除则是从上至下的堆化

</details>

## 代码

<details>
<summary>点击展开</summary>

```
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
		if (this.heap.length > 2) {
			this.heap[1] = this.heap.pop()
			this.heaper(1)
		} else {
			this.heap.pop()
		}
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
```

</details>