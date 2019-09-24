# containerWithMostWater(盛最多水的容器)

[**Leetcode 11**](https://leetcode-cn.com/problems/container-with-most-water/)

## 描述

给定 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

说明：你不能倾斜容器，且 n 的值至少为 2。

![](https://aliyun-lc-upload.oss-cn-hangzhou.aliyuncs.com/aliyun-lc-upload/uploads/2018/07/25/question_11.jpg)

## 思路

<details>
<summary>点击展开</summary>
1. 暴力法
i,j双层遍历，每遇到两个数字就计算面积，并且更新max值，但是时间复杂度高

2. 双指针法
我们来分析这个问题的特点

* 相同高度，长度越长面积越大
* 高度受限于最短边

确定了面积之后，如果该面积是当前最大面积，那么下一个最大面积在哪呢？如果较长的指针往后挪一位，这个时候因为高度受限于最短边，所以面积一定不会变大，但是短边挪一位，有可能遇到的边比最短边长，则最大面积又一次变大，于是我们得到了结论，如果当前面积为最大面积，则使相对较短的边挪动一位

双指针法，一个指针指头，一个指尾。从头开始遍历即可

时间复杂度O(n)，空间复杂度O(1)
</details>

## 代码

<details>
<summary>点击展开</summary>

```
var maxArea = function(height) {
	let [max, i, j] = [0, 0, height.length - 1]
	while (i !== j) {
		let area = (j - i) * Math.min(height[i], height[j])
		max = Math.max(max, area)
		if (height[i] <= height[j]) {
			i++
		} else {
			j--
		}
	}
	return max
}
```

</details>