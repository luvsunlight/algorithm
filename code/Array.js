Array.prototype.list = function() {
	console.log(this)
}

Array.prototype.setMaxLength = function(max) {
	this.maxLength = max
}

Array.prototype.puush = function(n) {
	if (this.maxLength && this.length >= this.maxLength) {
		console.error("Array max size!")
		return
	} else {
		this.push(n)
	}
}

Array.prototype.puuush = function(n) {
	if (this.maxLength && this.length >= this.maxLength) {
		this.maxLength = 2 * this.maxLength
	}
	this.puush(n)
}

class SortedArray extends Array {
	constructor() {
		super(...arguments)
		this.sort()
	}
	sort() {
		return Array.prototype.sort.call(this, (a, b) => a - b)
	}
	push(n) {
		if (this.maxLength && this.length > this.maxLength) {
			console.error("Array max size!")
		} else {
			this[this.length] = n
			this.sort()
		}
	}
	delete(n) {
		let index = this.indexOf(n)
		this.splice(index, 1)
	}
	edit(n, v) {
		let index = this.indexOf(n)
		this[index] = v
		this.sort()
	}
	merge(arr) {
		if (this.maxLength && this.length + arr.length > this.maxLength) {
			console.error("Array max size!")
		} else {
			this.concat(arr)
				.sort()
				.map((n, index) => (this[index] = n))
		}
	}
}

module.exports = { SortedArray }
