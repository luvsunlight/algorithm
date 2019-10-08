[👈 Back](https://github.com/luvsunlight/algorithm/tree/master/%E6%95%B0%E7%BB%84)

# 可动态扩容的数组

## 描述

实现一个可动态扩容的数组

## 思路

<details>
<summary>点击展开</summary>

动态扩容其实在js里不存在，因为它数组天然就没有内存泄露这个说法，但是我们也可以模拟一下。动态扩容也就是每次添加元素时，需要判断一下是否已达上限，若是则上限翻倍

</details>

## 代码

<details>
<summary>点击展开</summary>

```
Array.prototype.puush = function(n) {
	if (this.maxLength && this.length >= this.maxLength) {
		console.error("Array max size!")
		return
	} else {
		this.push(n)
	}
}

Array.prototype.puuush = function(n) {
	if (this.maxLength && this.length >= this.maxLength) {
		this.maxLength = 2 * this.maxLength
	}
	this.puush(n)
}
```

</details>