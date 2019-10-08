[👈 Back](https://github.com/luvsunlight/algorithm/tree/master/%E5%AD%97%E7%AC%A6%E4%B8%B2)

# longest substring without repeating characters（无重复的最长子串）

[**leetcode 03**](https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/)

## 描述

给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

示例 1:

```
输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
```

示例 2:

```
输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
```

示例 3:


```
输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
```


## 思路

<details>
<summary>点击展开</summary>
最简单的思路，利用散列表，遍历字符串数组，从头开始，一个个往后加，如果待添加字符没有在散列表中出现，则加入当前最长子串，如果出现过则停止计算，并且将当前子串和maxLength进行对比，如此循环整个数组

但是这么做我们还是要循环两遍，虽然第二次循环并不是每次都遍历整个长度，但是整体的时间复杂度还是O(n^2)，有没有更简单的想法呢？

利用
</details>

## 代码

<details>
<summary>点击展开</summary>

思路1
```
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
   let maxLen = 0
	for (let i = 0; i < s.length; i++) {
		let hashmap = {}
		let str = s[i]
		hashmap[s[i]] = 1
		if (i >= s.length - maxLen) break
		for (let j = i + 1; j < s.length; j++) {
			if (typeof hashmap[s[j]] === "undefined") {
				str += s[j]
				hashmap[s[j]] = 1
			} else {
				break
			}
		}
		let len = str.length
		maxLen = len > maxLen ? len : maxLen
	}
	return maxLen
};
```

思路2

```
/**
 * @param {string}
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
	let hash = {}
	let [i, ans] = [0, 0]
	let len = s.length
	for (let j = 0; j < s.length; j++) {
		if (i >= len - ans) break
		if (hash.hasOwnProperty(s[j])) {
			i = Math.max(hash[s[j]], i)
		}
		ans = Math.max(ans, j - i + 1)
		hash[s[j]] = j + 1
	}
	return ans
}
```
</details>