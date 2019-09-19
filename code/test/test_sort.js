const { log, timer, getRandomArray } = require("../util")
const { bubbleSort, insertionSort, selectionSort } = require("../Sort")

const maxSize = 10000
const showArray = false

const test_sort = fn => {
	let a = getRandomArray(maxSize)
	log.green(`${fn.name}${showArray ? a : ""}`)
	timer(fn, a, showArray)
}

;[bubbleSort, insertionSort, selectionSort].map(f => test_sort(f))
