# reverseLinkedList(反转链表)

[**Leetcode 206**](https://leetcode-cn.com/problems/reverse-linked-list/)

## 描述

反转一个单链表

eg.

```
输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
```

进阶： 你能不能用递归和迭代的方法分别实现一遍

## 思路

<details>
<summary>点击展开</summary>
1. 迭代法
使用三个变量current,prev,next来记录变量快照,只需要遍历一次，即将链表反转
2. 递归法
当然也可以用递归的办法，我们假设第一个节点之后的链表已经逆序了，这个时候，我们应该先让`head.next.next=head,head=null`，再返回逆序的头结点即可（因为这个之后head.next还是原来那个节点，但是如果通过逆序返回的结果来访问的话时间复杂度就很高了）
</details>

## 代码

<details>
<summary>点击展开</summary>
1. 迭代法
```
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
	let [prevNode, currentNode, nextNode] = [null, head, head]
	while (nextNode) {
		nextNode = currentNode.next
		currentNode.next = prevNode
		prevNode = currentNode
		currentNode = nextNode
	}
	return prevNode
}
```

2. 递归法

```
if (head === null || head.next === null) return head
let node = reverseList(head.next)
head.next.next = head
head.next = null
return node
```
</details>