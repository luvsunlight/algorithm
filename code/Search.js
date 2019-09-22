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

const binarySearchLastEqual = (value, a) => {
	let [min, max] = [0, a.length - 1]

	while (min <= max) {
		let mid = Math.floor(min + (max - min) / 2)
		if (a[mid] === value) {
			if (mid === a.length - 1 || a[mid + 1] !== value) {
				return mid
			} else {
				min = mid + 1
			}
		} else if (a[mid] < value) {
			min = mid + 1
		} else {
			max = mid - 1
		}
	}
	return undefined
}

module.exports = { binarySearch, binarySearchFirstEqual, binarySearchLastEqual }
