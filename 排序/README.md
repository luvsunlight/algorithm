# sort 排序

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

</details>

<details>
<summary>代码</summary>

```
```

</details>

**05. 快速排序**
**06. 编程实现O(n)复杂度内找到一组数据的第K大元素**

<details>
<summary>思路</summary>
先O(n)从头到尾遍历数据并且做正序排列的拷贝，遍历完成后按正序索引即可O(1)，合计O(n)
</details>