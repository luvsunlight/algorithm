class BinarySearchTree {
	constructor(data) {
		this.head = null
		data.map(i => this.add(i))
	}
	find(x) {
		let node = this.head
		while (node) {
			if (node.val === x) {
				return node
			} else if (node.val > x) {
				node = node.left
			} else {
				node = node.right
			}
		}
		return null
	}
	add(x) {
		let node = this.head
		let newNode = { val: x, left: null, right: null }
		if (!node) {
			this.head = newNode
			return
		}
		while (node) {
			if (node.val > x) {
				if (node.left) {
					node = node.left
				} else {
					node.left = newNode
					break
				}
			} else {
				if (node.right) {
					node = node.right
				} else {
					node.right = newNode
					break
				}
			}
		}
	}
	delete(x) {
		let node = this.head
		let pNode = this.head
		// Find node x
		while (node && node.val !== x) {
			pNode = node
			if (node.val > x) {
				node = node.left
			} else {
				node = node.right
			}
		}
		if (node.left && node.right) {
			let child = node.right
			let pChild = node.right
			while (child.left) {
				pChild = child
				child = node.left
			}
			node.val = child.val
			pChild.left = null
		} else {
			let child = node.left ? node.left : node.right
			if (pNode.left === node) {
				pNode.left = child
			} else {
				pNode.right = child
			}
		}
	}
}

module.exports = {
	BinarySearchTree
}
