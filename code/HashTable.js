class HashTable {
	constructor() {
		this.array = []
	}
	hash(key) {
		return key % 10
	}
	add(key, val) {
		let index = this.hash(key)
		let newNode = { key, val, next: null }
		if (typeof this.array[index] === "undefined") {
			this.array[index] = newNode
		} else {
			newNode.next = this.array[index]
			this.array[index] = newNode
		}
	}
	get(key) {
		let index = this.hash(key)
		if (typeof this.array[index] === "undefined") {
			return null
		} else {
			let node = this.array[index]
			while (node.key !== key) {
				node = node.next
			}
			return node.val
		}
	}
}

module.exports = { HashTable }
