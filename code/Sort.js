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

module.exports = {
	bubbleSort,
	insertionSort,
	selectionSort
}
