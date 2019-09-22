const bubbleSort = a => {
	let len = a.length
	for (let i = 0; i < len; i++) {
		for (let j = i; j < len; j++) {
			if (a[i] > a[j]) {
				let temp = a[i]
				a[i] = a[j]
				a[j] = temp
			}
		}
	}
}

const insertionSort = a => {
	let len = a.length
	for (let i = 1; i < len; i++) {
		let v = a[i]
		for (var j = i - 1; j >= 0; j--) {
			if (a[j] > v) {
				a[j + 1] = a[j]
			} else {
				break
			}
		}
		a[j + 1] = v
	}
}

const selectionSort = a => {
	let len = a.length
	for (let i = 0; i < len; i++) {
		let flag = false
		let [min, minIndex] = [a[i], 0]
		for (let j = i; j < len; j++) {
			if (a[j] < min) {
				min = a[j]
				minIndex = j
				flag = true
			}
		}
		if (flag) {
			let temp = a[i]
			a[i] = a[minIndex]
			a[minIndex] = temp
		}
	}
}

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

const bucketSort = (a, bucketsNum = 100) => {
	let buckets = []
	let result = []
	for (let i = 0; i < bucketsNum; i++) {
		buckets.push([])
	}
	a.map(n => {
		let bucketIndex = Math.ceil(n / Math.ceil(a.length / bucketsNum)) - 1
		buckets[bucketIndex].push(n)
	})
	buckets.map(bucket => {
		fastSort(bucket)
		bucket.map(n => result.push(n))
	})
	result.map((n, index) => (a[index] = n))
	return a
}

const counterSort = a => {
	const bucketsNum = a.length
	let buckets = []
	let result = []
	for (let i = 0; i < bucketsNum; i++) {
		buckets.push([])
	}
	a.map(n => {
		let bucketIndex = Math.ceil(n / Math.ceil(a.length / bucketsNum)) - 1
		buckets[bucketIndex].push(n)
	})
	buckets.map(bucket => bucket.map(n => result.push(n)))
	result.map((n, index) => (a[index] = n))
	return a
}

module.exports = {
	bubbleSort,
	insertionSort,
	selectionSort,
	merge,
	mergeSort,
	fastSort,
	findKstNum,
	bucketSort,
	counterSort
}
