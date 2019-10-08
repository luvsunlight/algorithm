[👈 Back](https://github.com/luvsunlight/algorithm/tree/master/%E6%95%B0%E7%BB%84)

# singleNumber(只出现一次的数字)

[**Leetcode 136**](https://leetcode-cn.com/problems/single-number/)

## 描述

给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

说明：

你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

示例 1:

```
输入: [2,2,1]
输出: 1
示例 2:

输入: [4,1,2,1,2]
输出: 4
```

## 思路

<details>
<summary>点击展开</summary>

首先能想到的思路就是利用散列表，遍历的时候进行存储，如果出现重复的元素则从散列表中移除，遍历完成后按照描述应该只剩下一个元素

但是使用散列表的思路明显不符合题目中不适用额外空间的要求

我们想到了`^`按位异或

> 概念

* 如果我们对 0 和二进制位做 XOR 运算，得到的仍然是这个二进制位
a⊕0=a

* 如果我们对相同的二进制位做 XOR 运算，返回的结果是 0
a⊕a=0

* XOR 满足交换律和结合律
a⊕b⊕a=(a⊕a)⊕b=0⊕b=b

</details>

## 代码

<details>
<summary>点击展开</summary>

```
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
	let hashmap = {}
	nums.map(n => {
		if (!hashmap[n]) hashmap[n] = true
		else hashmap[n] = false
	})
	for (let num in hashmap) {
		if (hashmap[num]) return num
	}
}
```

```
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
	let res = 0
	nums.map(n => {
		res ^= n
	})
	return res
}
```

</details>
