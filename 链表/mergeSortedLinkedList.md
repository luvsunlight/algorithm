# 合并两个有序列表

[**Leetcode 21**](https://leetcode-cn.com/problems/merge-two-sorted-lists/)

## 描述

将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

示例：


```
输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4
```

## 思路

<details>
<summary>点击展开</summary>

1. 暴力法
遍历第二条链表，将每一个节点插入到第一个有序列表中。或者先将两个链表遍历提取出数组，再对两个数组进行sort，最后根据生成的有序数组生成新链表

2. 双指针法

通过两个指针指向原有两个链表，依次判断哪个小，小的指针推入结果，并且指针往前推进一格

3. 递归法

先判断第一个指针谁大谁小，然后依次递归
</details>

## 代码

<details>
<summary>点击展开</summary>


```
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
	let [head, node, node1, node2] = [
		null,
		null,
		typeof l1.val !== "undefined" ? l1 : null,
		typeof l2.val !== "undefined" ? l2 : null
	]
	while (node1 || node2) {
		let [v1, v2] = [node1 ? node1.val : null, node2 ? node2.val : null]
		let newNode = null
		if (v2 === null || (v1 !== null && v2 !== null && v1 <= v2)) {
			newNode = { val: node1.val, next: null }
			node1 = node1.next
		} else {
			newNode = { val: node2.val, next: null }
			node2 = node2.next
		}
		if (!head) {
			head = newNode
			node = newNode
		} else {
			node.next = newNode
			node = node.next
		}
	}
	return head
}
```

</details>