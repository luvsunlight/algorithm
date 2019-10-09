[👈 Back](https://github.com/luvsunlight/algorithm/tree/master/%E5%A0%86)

# heapSort (实现堆排序)

## 描述

实现堆排序

## 思路

<details>
<summary>点击展开</summary>
堆排序分为两步，一步是建堆，一步是排序。我们建成大顶堆之后，从堆尾开始，将尾部元素和头元素互换（必定是最大元素），然后进行堆化
</details>

## 代码

<details>
<summary>点击展开</summary>

```
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
```

</details>