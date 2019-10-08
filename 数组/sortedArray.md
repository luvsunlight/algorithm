[👈 Back](https://github.com/luvsunlight/algorithm/tree/master/%E6%95%B0%E7%BB%84)

# 有序数组

## 描述

实现一个大小固定的有序数组，支持动态增删改操作

## 思路

<details>
<summary>点击展开</summary>

没什么难点

</details>

## 代码

<details>
<summary>点击展开</summary>

```
class SortedArray extends Array {
	constructor() {
		super(...arguments)
		this.sort()
	}
	sort() {
		return Array.prototype.sort.call(this, (a, b) => a - b)
	}
	push(n) {
		if (this.maxLength && this.length > this.maxLength) {
			console.error("Array max size!")
		} else {
			this[this.length] = n
			this.sort()
		}
	}
	delete(n) {
		let index = this.indexOf(n)
		this.splice(index, 1)
	}
	edit(n, v) {
		let index = this.indexOf(n)
		this[index] = v
		this.sort()
	}
}
```

</details>


