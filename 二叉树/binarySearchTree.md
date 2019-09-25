# 实现一个二叉查找树，支持增加，删除，查找等操作

## 描述

二叉查找树要求，在树中的任意一个节点，其左节点的值必须小于该节点的值，右节点的值必须大于该节点的值

## 思路

<details>
<summary>点击展开</summary>
查找，从初始节点开始，如果值小于目标值，则在左子树里寻找，否则，在右子树里找

增加，从初始节点开始，如果值大于目标值，则加入到右子树，反之加入到左子树，如果右子树已存在，则继续深入进行判断

删除需要分三种情况讨论，第一种情况，如果删除的节点没有子节点，我们直接将父节点指向该节点的指针置为null

第二种情况，如果只有一个子节点，我们可以让父节点指向子节点

第三种情况，如果有两个节点，我们需要找到该节点的右子树的最小节点，替换到要删除的节点中，然后再删除这个最小节点
</details>

## 代码

<details>
<summary>点击展开</summary>

```
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

```

</details>