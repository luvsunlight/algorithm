# reverseLinkedList(反转链表)

## 描述

反转一个单链表

eg.

```
输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
```

## 思路

<details>
<summary>点击展开</summary>

使用三个变量current,prev,next来记录变量快照

</details>

## 代码

<details>
<summary>点击展开</summary>

```
revert() {
		let [prevNode, currentNode, nextNode] = [null, this.head, this.head]
		while (nextNode) {
			nextNode = currentNode.next
			currentNode.next = prevNode
			prevNode = currentNode
			currentNode = nextNode
		}
		this.head = prevNode
	}
```

</details>