const { log, timer, getRandomArray, getPhoneNumbers } = require("../util")
const {
	bubbleSort,
	insertionSort,
	selectionSort,
	merge,
	mergeSort,
	fastSort,
	findKstNum,
	bucketSort,
	counterSort
} = require("../Sort")

const maxSize = 10
const showArray = maxSize < 50 ? true : false

log.yellow(`maxSize ${maxSize}`)

const test_sort = fn => {
	let a = getRandomArray(maxSize)
	timer(fn, a, showArray, `${fn.name}(${showArray ? a : ""})`)
}

// ;[
// 	bubbleSort,
// 	insertionSort,
// 	selectionSort,
// 	mergeSort,
// 	fastSort,
// 	bucketSort,
// 	counterSort
// ].map(f => test_sort(f))

// ;[1, 2, 3, 4, 5].map((n, index, arr) => {
// 	console.log(`${index + 1}st num is ${findKstNum(arr, index + 1)}`)
// })

// console.log(bucketSort([3, 2, 1]))

// console.log(getPhoneNumbers(10))

timer()
