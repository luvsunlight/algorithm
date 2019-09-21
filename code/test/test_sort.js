const { log, timer, getRandomArray } = require("../util")
const {
	bubbleSort,
	insertionSort,
	selectionSort,
	merge,
	mergeSort,
	fastSort,
	findKstNum
} = require("../Sort")

const maxSize = 30000
const showArray = maxSize < 50 ? true : false

const test_sort = fn => {
	let a = getRandomArray(maxSize)
	timer(fn, a, showArray, `${fn.name}(${showArray ? a : ""})`)
}

// ;[bubbleSort, insertionSort, selectionSort, mergeSort, fastSort].map(f =>
// 	test_sort(f)
// )

;[1, 2, 3, 4, 5].map((n, index, arr) => {
	console.log(`${index + 1}st num is ${findKstNum(arr, index + 1)}`)
})
