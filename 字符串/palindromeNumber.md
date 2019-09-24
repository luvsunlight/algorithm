# palindromeNumber(回文数)

[**Leetcode 09**](https://leetcode-cn.com/problems/palindrome-number/)

## 描述

判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

示例 1:

```
输入: 121
输出: true
```

示例 2:

```
输入: -121
输出: false
解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
```

示例 3:

```
输入: 10
输出: false
解释: 从右向左读, 为 01 。因此它不是一个回文数。
```

进阶:

你能不将整数转为字符串来解决这个问题吗？

## 思路

<details>
<summary>点击展开</summary>
> 通用技巧。无论哪种方法都可以采用的技巧。我们可以发现只要数字小于0就不可能是回文数，同时如果末尾是0,但数字本身不是0也不可能因为首位不可能是0

1. 暴力法
    直接将数字转化成字符串，然后使用reverse，将reverse后的结果和原结果对比
2. 双指针法
    reverse的时间复杂度还可以优化，因为reverse循环只要2/n次，但是里面涉及到交换的步骤，交换至少需要三步，所以真正的时间复杂度为O(3/2n)
    如果我们一开始就从尾部遍历到中部逐项比对（这实际上是一种双向指针），那么时间复杂度最大也就是O(n/2)，比前者效率要提高很多，而且不涉及交换，所以循环内部的时间复杂度也很低
3. 压栈法。遍历前一半时将数字压栈，遍历到中间往后时，每前进一步，出栈一个和当前元素对比，如果不相等直接返回false
4. 只求一半数字法
    假设我们不允许用字符串来实现，只看单独的数字应该怎么做。答案就是对10取余，取两个数i，j，i初始为0，j初始为数x，i每次循环取 i*10 + j对10的余数,实际上就是i是数x从尾部遍历得到的数字，j则是每次循环都等于j除10的商，比如数123，i=0, j=123 => i=3, j=12 => i=32, j = 1... 停止条件就是i>=j
    
    最后判断的停止条件也是`i===j`或者`i除10的商===j`，因为如果数字长度是奇数则i到最后会比j大一位
</details>

## 代码

<details>
<summary>点击展开</summary>

1. 双指针法

```
if (x < 0 || (x !== 0 && x % 10 === 0)) return false
x = String(x)
let [i, j] = [0, x.length - 1]
while (i < j) {
	if (x[j] !== x[i]) return false
	i++
	j--
}
return true
```

2. 压栈法

```
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
if (x < 0 || (x !== 0 && x % 10 === 0)) return false
    x = String(x)
	let stack = []
	let len = x.length
	let mid = Math.ceil((len - 1) / 2)

	for (let i = 0; i < len; i++) {
		if (i < mid) {
			stack.push(x[i])
		} else if (i >= mid && i !== (len - 1) / 2) {
			if (stack.pop() !== x[i]) return false
		}
	}
	return true
}
```

3. 取余法

```
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
	if (x < 0 || (x !== 0 && x % 10 === 0)) return false
	let [i, j] = [0, x]
	while (i < j) {
		i = i * 10 + (j % 10)
		j = Math.floor(j / 10)
	}
	return i === j || Math.floor(i / 10) === j
}
```
</details>