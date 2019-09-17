# 两个有序数组合并为一个

## 描述

将两个有序数组合并为一个

## 思路

<details>
<summary>点击展开</summary>

先concat，再sort，没什么难度

</details>

## 代码

<details>
<summary>点击展开</summary>

```
sort() {
	return Array.prototype.sort.call(this, (a, b) => a - b)
}
	
merge(arr) {
	if (this.maxLength && this.length + arr.length > this.maxLength) {
	console.error("Array max size!")
	} else {
		this.concat(arr)
			.sort()
			.map((n, index) => (this[index] = n))
	}
}
```

</details>