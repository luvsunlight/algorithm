[👈 Back](https://github.com/luvsunlight/algorithm/tree/master/%E6%A0%88)

# longestValidParentheses (最长有效括号)

[**Leetcode 32**](https://leetcode-cn.com/problems/longest-valid-parentheses/)

## 描述

给定一个只包含 '(' 和 ')' 的字符串，找出最长的包含有效括号的子串的长度。

示例 1:

```
输入: "(()"
输出: 2
解释: 最长有效括号子串为 "()"
示例 2:

输入: ")()())"
输出: 4
解释: 最长有效括号子串为 "()()"
```

## 思路

<details>
<summary>点击展开</summary>
想到括号匹配还是要用栈，但是这个题还不是简单地使用栈就可以了的。首先我们要考虑到分割的情况，因为我们要找的是最长的有效子串。比如`()(()`，前面一个（）就和后面一个（）分隔开了，所以最长子串取两者最大值

这个问题的解决方法非常精妙，我们首先取一个栈，进栈一个-1，然后遍历字符串，遇到(就入栈，遇到),先出栈，再判断栈是否为空，为空则将当前下标塞入栈，否则更新最大长度，maxLen = max(maxLen, i-栈顶元素下标)

我们可以来看看精妙在哪，遇到（元素直接入栈没有问题，遇到）则有两种情况，一种是前面有（和它匹配，那没有问题，如果没有元素和它匹配（即出栈后栈为空），那么这个）将会成为绝对隔断最大长度子串。判断长度的话通过当前下标减去栈出栈后栈顶元素的下标（这个栈顶元素任何时候都有一个-1或者反括号保底）。仔细推导这个过程，我们就会发现任何时候这个结构里栈底都有一个不好的元素，要么是-1要么是反括号
</details>

## 代码

<details>
<summary>点击展开</summary>

```
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
	let validLength = 0
	let currentLength = 0
	let stack = {
		head: null,
		push(n) {
			let newNode = { val: n, next: null }
			if (!this.head) {
				this.head = newNode
			} else {
				newNode.next = this.head
				this.head = newNode
			}
		},
		pop() {
			if (this.head) {
				this.head = this.head.next
			}
		}
	}
	stack.push(-1)
	for (let i = 0; i < s.length; i++) {
		let str = s[i]
		if (str === "(") {
			stack.push(i)
		} else if (stack.head) {
			stack.pop()
			if (!stack.head) {
				stack.push(i)
			} else {
				validLength = Math.max(validLength, i - stack.head.val)
			}
		}
	}
	return validLength
}
```

</details>