# twoSum (两数之和)

[leetcode 01](https://leetcode-cn.com/problems/two-sum/)

## 描述

给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

示例:

```
给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]

```

## 思路

<details>
<summary>点击展开</summary>
我们当然可以用两个指针从头开始进行遍历，每遍历两个值都判断这两个值是否等于target，如果是，则返回。

但是这么做效率太低了，是O(n^2)，我们有没有更简单的办法呢？

答案是有的，我们可以想象一个相亲配对现场，嘉宾们都有自己的要去（能够与另外一个值相加等于target），但是每个人都在现场胡乱配对（其实这样是多线程，效率也不低，但是很遗憾js中并不是）效率是很低的，如果在配对伊始之前，我们先进行对每个嘉宾进行登记，在一张表上登记自己的需求，然后在正式的遍历开始时，只需要遍历每一个人，看这个人的条件是否在需求表上即可，这样做的时间复杂度为O(2*n)，效率一下子提高了很多

那么效率有没有可能再提高一些呢，答案是有的

我们只进行一次遍历，每个嘉宾上台时，先看需求表（初始为空）上自己符不符合条件，如果没有的话就登记自己的需求，看后续嘉宾有没有能和自己配对的。这样做就全部只用遍历一次，非常高效和简洁
</details>


## 代码

<details>
<summary>点击展开</summary>

```
var twoSum = function(nums, target) {
    let res = {}
	let resIndex = {}
	for (let i = 0; i < nums.length; i++) {
		if (res.hasOwnProperty(nums[i])) {
			return [resIndex[nums[i]], i]
		} else {
			res[target - nums[i]] = nums[i]
			resIndex[target - nums[i]] = i
		}
	}
};
```

</details>
