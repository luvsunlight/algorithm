const log = require("./log")

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

let a = [1, 2]

log.green("testing maxSize")
a.list()

a.setMaxLength(2)

log.blue("push")
a.push(3)
a.list()

a.pop()

log.blue("puush")
a.puush(3)
a.list()

log.blue("puuush")
a.puuush(3)
a.list()

a.puuush(4)
a.list()

a.puuush(5)
a.list()

log.yellow("----")

log.green("testing sortedArray")

let s_arr = new SortedArray(1, 4, 3)
let s_arr2 = new SortedArray(2, 5)

s_arr.setMaxLength(6)

s_arr.list()

log.blue("push 2")
s_arr.push(2)
s_arr.list()

log.blue("delete 4")
s_arr.delete(4)
s_arr.list()

log.blue("edit 2 => 5")
s_arr.edit(2, 5)
s_arr.list()

log.blue("merge two sorted array")
s_arr.list()
s_arr2.list()
s_arr.merge(s_arr2)
s_arr.list()
