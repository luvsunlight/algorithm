[👈 Back](https://github.com/luvsunlight/algorithm/tree/master/%E9%93%BE%E8%A1%A8)

# linkedListCycle (链表中环的检测)

[**Leetcode 141**](https://leetcode-cn.com/problems/linked-list-cycle/)

## 描述

给定一个链表，判断链表中是否有环。

为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。

示例 1：

```
输入：head = [3,2,0,-4], pos = 1
输出：true
解释：链表中有一个环，其尾部连接到第二个节点。
```

## 思路

<details>
<summary>点击展开</summary>
1.标记法，遍历每个元素看其是否有标记，如有，则返回true（这个点我们之前见过），如果没有则打上标记，非常精巧的方法，时间复杂度和空间复杂度都很低

2.利用散列表，原理是一样的，但是用到了散列表，双复杂度都会低很多

3.利用JSON.stringfy()不能字符串化含有循环引用的结构
4.双指针法，一快一慢两个指针。如果链表是循环链表，那么一定会有两个指针相遇的情况
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
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
	let node = head
	while (node) {
		if (node.isCycle) {
			return true
		} else {
			node.isCycle = true
			node = node.next
		}
	}
	return false
}
```

</details>