[👈 Back](https://github.com/luvsunlight/algorithm/tree/master/%E6%A0%88)

# validParentheses (有效的括号)

[**Leetcode 20**](https://leetcode-cn.com/problems/valid-parentheses/)

## 描述

给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。

示例 1:

```
输入: "()"
输出: true
示例 2:

输入: "()[]{}"
输出: true
示例 3:

输入: "(]"
输出: false
示例 4:

输入: "([)]"
输出: false
示例 5:

输入: "{[]}"
输出: true
```

## 思路

<details>
<summary>点击展开</summary>
将符号分为正括号和反括号，从字符串头部开始遍历，遇到正括号入栈，遇到范括号和栈顶元素比较，如果不匹配，则直接返回错误，如果匹配，则继续往下找，如果一直匹配到最后一个元素都没有返回错误，则表示这是一个有效的括号，返回正确
</details>

## 代码

<details>
<summary>点击展开</summary>

```
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const matchDict = { "(": ")", "{": "}", "[": "]" }
	const lastPairs = [")", "}", "]"]
	let stack = {}
	for (let i = 0; i < s.length; i++) {
		let newNode = { val: s[i], next: null }
		if (!stack.head) {
			stack = { head: newNode }
		} else if (matchDict[stack.head.val] === s[i]) {
			stack.head = stack.head.next
		} else if (lastPairs.indexOf(s[i]) !== -1) {
			return false
		} else {
			newNode.next = stack.head
			stack.head = newNode
		}
	}
	if (stack.head) {
		return false
	} else {
		return true
	}
};
```

</details>