[👈 Back](https://github.com/luvsunlight/algorithm/tree/master/%E9%80%92%E5%BD%92)

# climbStairs (爬楼梯)

[**Leetcode 70**](https://leetcode-cn.com/problems/climbing-stairs/)

## 描述

假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

注意：给定 n 是一个正整数。

示例 1：

输入： 2
输出： 2
解释： 有两种方法可以爬到楼顶。
1.  1 阶 + 1 阶
2.  2 阶
示例 2：

输入： 3
输出： 3
解释： 有三种方法可以爬到楼顶。
1. 1 阶 + 1 阶 + 1 阶
2. 1 阶 + 2 阶
3. 2 阶 + 1 阶

## 思路

<details>
<summary>点击展开</summary>
爬楼梯问题实际上是一个斐波拉契数列，仔细研究一下规律就可以看出来，使用递归即可
</details>

## 代码

<details>
<summary>点击展开</summary>

```
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n, map = { 1: 1, 2: 2 }) {
	if (map[n]) return map[n]
	else map[n] = map[n - 1] + map[n - 2]
	return climbStairs(n - 1, map) + climbStairs(n - 2, map)
}
```

</details>