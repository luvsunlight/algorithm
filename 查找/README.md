[👈 Back](https://github.com/luvsunlight/algorithm)

# Search (查找)

**01. 实现一个有序数组的二分查找算法**

<details>
<summary>思路</summary>
有序数组取中间值mid，如果该值等于target，则返回下标，否则对数组的(0, mid),(mid+1,max)两个段分别采用二分查找
</details>

<details>
<summary>代码</summary>
const binarySearch = (value, a) => {
	let [min, max] = [0, a.length - 1]

	while (min <= max) {
		let mid = Math.floor(min + (max - min) / 2)
		if (a[mid] === value) {
			return mid
		} else if (a[mid] < value) {
			min = mid + 1
		} else {
			max = mid - 1
		}
	}
}
</details>

**02. 实现模糊二分查找算法（比如大于等于该值的第一个元素）**

<details>
<summary>思路</summary>
二分查找的变体，有很多种，这里以大于等于该值的第一个元素为例

第一种思路可以采用递归，大概思路还是和最基本的二分查找一样，如果中间值=target，则在(0,mid)段找，看能不能找到，如果能找到，返回那个返回值，没找到则返回当前下标

第二种思路不需要递归，因为本身二分查找就是一个while里进行的，如果中间值=target，则看一下该元素的前一个元素值是否也等于target，如果是，则max = mid-1，并且继续while循环
</details>

<details>
<summary>点击展开</summary>

```
const binarySearchFirstEqual = (value, a) => {
	let [min, max] = [0, a.length - 1]

	while (min <= max) {
		let mid = Math.floor(min + (max - min) / 2)
		if (a[mid] === value) {
			if (mid === 0 || a[mid - 1] !== value) {
				return mid
			} else {
				max = mid - 1
			}
		} else if (a[mid] < value) {
			min = mid + 1
		} else {
			max = mid - 1
		}
	}
	return undefined
}
```

</details>