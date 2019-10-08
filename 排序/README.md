# Sort (排序)

[⬅️ Back](https://github.com/luvsunlight/algorithm)

**01. 冒泡排序**

<details>
<summary>思路</summary>
从头开始，进行n次冒泡，在一次冒泡过程中，依次比对相邻的两个元素，如果后者比前者小，则交换顺序
</details>

<details>
<summary>代码</summary>

```
const bubbleSort = data => {
	let len = data.length
	for (let i = 0; i < len; i++) {
		for (let j = i; j < len; j++) {
			if (data[i] > data[j]) {
				let temp = data[i]
				data[i] = data[j]
				data[j] = temp
			}
		}
	}
}
```

</details>

**02. 插入排序**

<details>
<summary>思路</summary>
将数组分为已排序和未排序两个部分，已排序部分初始状态为数组的第一个元素，紧接着遍历未排序数组，将其插入到已排序的部分中

注意: 插入过程，从已排序的数组右边往左边遍历，如果已排序数组中对应位置的元素比要插入的元素大，则原位置的元素后挪，并且继续遍历，如果不是则表示找到应该插入的位置了，跳出循环，并将值插入（真正进行赋值的操作只有一行）
</details>

<details>
<summary>代码</summary>

```
const insertionSort = data => {
	let len = data.length
	for (let i = 1; i < len; i++) {
		let v = data[i]
		for (var j = i - 1; j >= 0; j--) {
			if (data[j] > v) {
				data[j + 1] = data[j]
			} else {
				break
			}
		}
		data[j + 1] = v
	}
}
```

</details>

**03. 选择排序**

<details>
<summary>思路</summary>
选择排序和插入排序很类似，都是将原数组分成未排序和已排序两个部分，区别是，选择排序的已排序部分初始状态为空，然后每次插入的过程是先在未排序的数组里找到最小的值，再将值插入到已排序的数组的末端
</details>

<details>
<summary>代码</summary>

```
const selectionSort = data => {
	let len = data.length
	for (let i = 0; i < len; i++) {
		let flag = false
		let [min, minIndex] = [data[i], 0]
		for (let j = i; j < len; j++) {
			if (data[j] < min) {
				min = data[j]
				minIndex = j
				flag = true
			}
		}
		if (flag) {
			let temp = data[i]
			data[i] = data[minIndex]
			data[minIndex] = temp
		}
	}
}
```

</details>

**04. 归并排序**

<details>
<summary>思路</summary>
将数组均分为两个部分，首先对两个分开的数组调用一次归并排序使之变成一个有序数组，再将两个有序数组进行合并
</details>

<details>
<summary>代码</summary>

```
const merge = (a, a1, a2) => {
	// method1
	// let start = 0
	// a2.map(n => {
	// 	for (var i = start; i < a1.length; i++) {
	// 		if (a1[i] > n) {
	// 			start = i
	// 			break
	// 		}
	// 	}
	// 	a1.splice(i, 0, n)
	// })
	// a1.map((n, index) => (a[index] = n))

	// method 2
	let [i, j] = [0, 0]
	let result = []
	while (i < a1.length && j < a2.length) {
		if (a1[i] <= a2[j]) {
			result.push(a1[i++])
		} else {
			result.push(a2[j++])
		}
	}
	let [start, end, arr] = [0, 0, null]
	if (i === a1.length) {
		;[start, end, arr] = [j, a2.length, a2]
	} else {
		;[start, end, arr] = [i, a1.length, a1]
	}

	for (let k = start; k < end; k++) {
		result.push(arr[k])
	}

	result.map((n, index) => (a[index] = n))

	return a
}

const mergeSort = a => {
	if (a.length < 2) return a
	let [min, max] = [0, a.length]
	let mid = Math.floor((min + max) / 2)
	return merge(a, mergeSort(a.slice(0, mid)), mergeSort(a.slice(mid, max)))
}
```

</details>

**05. 快速排序**

<details>
<summary>思路</summary>
首先定义一个函数partition，可以在数组中随机选一个值当pivot指标，然后遍历数组，比pivot小的放在pivot左边，大的放右边。快速排序的思想就是，首先用partition函数将数组分成3块，左边，pivot和右边，然后依次对左边和右边的块调用快速排序

还应该注意的是，快速排序是原地排序，所以在partition的部分要认真设计，要让空间复杂度为O(1)
</details>

<details>
<summary>代码</summary>

```
const partition = (a, min, max) => {
	let pivot = a[max]
	let i = min
	for (let j = min; j < max; j++) {
		if (a[j] < pivot) {
			let temp = a[j]
			a[j] = a[i]
			a[i++] = temp
		}
	}
	let temp = a[i]
	a[i] = a[max]
	a[max] = temp
	return i
}

const fastSort = a => {
	return fastSortSub(a, 0, a.length - 1)
}

const fastSortSub = (a, min, max) => {
	if (min >= max) return a
	let pivot = partition(a, min, max)
	fastSortSub(a, min, pivot - 1)
	fastSortSub(a, pivot + 1, max)
	return a
}
```

</details>

**06. 编程实现O(n)复杂度内找到一组数据的第K大元素**

<details>
<summary>思路</summary>
借鉴快速排序的过程，对长度为n的数组进行pivot，以最末尾的一个元素为pivot，比它大的元素放在左边，小的元素放在右边。最后，如果pivot=k-1，则这个元素就是第k大的元素，如果pivot<K,则遍历左边的部分，反之则为右边的部分。最后的时间复杂度=`n+n/2+n/4+....`，时间复杂度为O(n)
</details>

<details>
<summary>代码</summary>

```
const partition = (a, min, max) => {
	let pivot = a[max]
	let i = min
	for (let j = min; j < max; j++) {
		if (a[j] > pivot) {
			let temp = a[j]
			a[j] = a[i]
			a[i++] = temp
		}
	}
	let temp = a[i]
	a[i] = a[max]
	a[max] = temp
	return i
}
const findKstNum = (a, k) => {
	let pivot = partition(a, 0, a.length - 1)
	if (pivot === k - 1) {
		return a[pivot]
	} else if (pivot > k - 1) {
		return findKstNum(a.slice(0, pivot), k)
	} else {
		return findKstNum(a.slice(pivot, a.length), k - pivot - 1)
	}
}
```

</details>