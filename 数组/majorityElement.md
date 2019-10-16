[👈 Back](https://github.com/luvsunlight/algorithm/tree/master/%E6%95%B0%E7%BB%84)

# name

[**Leetcode 169**](https://leetcode-cn.com/problems/majority-element/)

## 描述

给定一个大小为 n 的数组，找到其中的众数。众数是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。

你可以假设数组是非空的，并且给定的数组总是存在众数。

示例 1:

```
输入: [3,2,3]
输出: 3
示例 2:

输入: [2,2,1,1,1,2,2]
输出: 2
```

## 思路

<details>
<summary>点击展开</summary>
我们可以从头开始遍历数组，用一个散列表来存储对应值出现过的次数，一旦某个值的次数大于n/2，我们立马返回这个值
</details>

## 代码

<details>
<summary>点击展开</summary>

```
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
	let hashmap = {}
	return nums.find(n => {
		if (!hashmap[n]) {
			hashmap[n] = 1
		} else {
			hashmap[n]++
		}
		return hashmap[n] > nums.length / 2
	})
}
```

</details>