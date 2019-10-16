[👈 Back](https://github.com/luvsunlight/algorithm/tree/master/%E6%95%B0%E7%BB%84)

# firstMissingPositive (缺失的第一个正数)

[**Leetcode 41**](https://leetcode-cn.com/problems/first-missing-positive/)

## 描述

给定一个未排序的整数数组，找出其中没有出现的最小的正整数。

示例 1:


```
输入: [1,2,0]
输出: 3
示例 2:

输入: [3,4,-1,1]
输出: 2
示例 3:

输入: [7,8,9,11,12]
输出: 1
```

说明:

你的算法的时间复杂度应为O(n)，并且只能使用常数级别的空间。

## 思路

<details>
<summary>点击展开</summary>
这个题的难点在于空间复杂度和时间复杂度的限制，如果不考虑空间复杂度，我们可以用散列表，遍历一遍数组再遍历一遍散列表即可，如果不考虑时间复杂度，我们可以考虑先排序再遍历，都非常简单，但是加上了这两个限制条件，让题目变得非常困难

要使用原地排序的话，一定是用交换来做了。观察到，缺失的第一个正数最大也就是n（数组长度）+1，我们可以在遍历数组的过程中，将数组变成一个散列表。原理如下

我们从头开始遍历，如果nums[i] !== i + 1的话，那么我们将nums[nums[i]-1]和nums[i]交换。比如[3,4,1,-1],第一个3不处于1的位置，那么我们就需要将“3”和处于第“3”位的1进行交换，交换之后3和1都处于对的位置，那就没事，如果不是对的位置还需要继续交换。之后是4，我们将4和-1交换，-1是负数没法交换，如此依次遍历完所有数据

我们再来看现在的数组，如果数组中存在1，那么1一定会排到第一个位置上，同理如果有2，2一定会排到2的位置上，我们依次遍历数组，找到第一个不符合这样对应关系的数字，那个数字就是我们要找的缺失的最大正整数
</details>

## 代码

<details>
<summary>点击展开</summary>

```
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
	for (let i = 0; i < nums.length; i++) {
		let j = i
		while (
			nums[j] !== nums[nums[j] - 1] &&
			nums[j] - 1 < nums.length &&
			nums[j] - 1 >= 0 &&
			nums[j] - 1 !== j
		) {
			let temp = nums[nums[j] - 1]
			nums[nums[j] - 1] = nums[j]
			nums[j] = temp
		}
	}

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] - 1 !== i) return i + 1
	}
	return nums.length + 1
}
```

</details>