[👈 Back](https://github.com/luvsunlight/algorithm)

# Recursive (递归)

**01. 斐波那契数列**

<details>
<summary>点击展开</summary>

```
const fab = n => (n === 1 || n === 2 ? 1 : fab(n - 1) + fab(n - 2))
```

</details>

**02. 阶乘**

<details>
<summary>点击展开</summary>

```
const fac = n => (n === 1 ? 1 : n * fac(n - 1))
```
</details>

**03. 一组数据集合的全排列**

<details>
<summary>描述</summary>

给定一个集合（无序，不重复），要求输出该集合的所有子集

eg.

`[1, 2, 3] => [ [ 1 ], [ 2 ], [ 3 ], [ 2, 3 ], [ 1, 2 ], [ 1, 3 ], [ 1, 2, 3 ] ]`
</details>

<details>
<summary>代码</summary>

```
const listSet = set => {
	if (set.length === 1) {
		return [set]
	} else {
		let restSet = set.slice(1, set.length)
		return [
			[set[0]],
			...listSet(restSet),
			...listSet(restSet).map(i => [set[0], ...i])
		]
	}
}
```
</details>