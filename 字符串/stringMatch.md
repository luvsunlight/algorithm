# stringMatch (实现朴素的字符串匹配)

## 描述

## 思路

<details>
<summary>点击展开</summary>
BF算法，又称暴力匹配算法或者朴素匹配算法，是最基础的字符串匹配算法。很简单，它让主串从0~n-m的位置，匹配m个长度的字符串和子串是否相等，一旦找到则返回对应主串下标
</details>

## 代码

<details>
<summary>点击展开</summary>

```
const BF = (str1, str2) => {
	if (str1.length < str2.length) return -1
	for (let i = 0; i < str1.length - str2.length; i++) {
		let k = i
		for (let j = 0; j < str2.length; j++) {
			if (str1[k++] !== str2[j]) break
		}
		if (k - i === str2.length) return i
	}
	return -1
}
```

</details>