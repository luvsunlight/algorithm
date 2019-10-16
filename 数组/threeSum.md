[👈 Back](https://github.com/luvsunlight/algorithm/tree/master/%E6%95%B0%E7%BB%84)

# threeSum (三数之和)

[**Leetcode 15**](https://leetcode-cn.com/problems/3sum/submissions/)

## 描述

给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。

注意：答案中不可以包含重复的三元组。

例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

满足要求的三元组集合为：

```
[
  [-1, 0, 1],
  [-1, -1, 2]
]
```

## 思路

<details>
<summary>点击展开</summary>
对于三数之和，情况要比两数之和复杂的多。最蠢的办法自然是暴力法，时间复杂度为O(n^3).这里我们可以考虑摘出一个数，然后让剩下的数变成两数问题.对于两数问题，我们再使用双指针法
</details>

## 代码

<details>
<summary>点击展开</summary>

```
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
	nums.sort((a, b) => a - b)
	if (nums[0] > 0) return []
	let res = []
	for (let i = 0; i < nums.length - 2; i++) {
		if (i > 0 && nums[i] === nums[i - 1]) continue
		let [j, k] = [i + 1, nums.length - 1]
		while (j < k) {
			let add = nums[i] + nums[j] + nums[k]
			if (add === 0) {
				res.push([nums[i], nums[j++], nums[k--]])
				while (j < k && nums[j] === nums[j - 1]) j++
				while (j < k && nums[k] === nums[k + 1]) k--
			} else if (add < 0) {
				j++
			} else {
				k--
			}
		}
	}
	return res
}
```

</details>