[👈 Back](https://github.com/luvsunlight/algorithm/tree/master/%E5%9B%BE)

# graphs (实现有向图，无向图，有权图，无权图的邻接矩阵和邻接表表示方式)

## 描述

实现有向图，无向图，有权图，无权图的邻接矩阵和邻接表表示方式

## 思路

<details>
<summary>点击展开</summary>
![](https://static001.geekbang.org/resource/image/62/d2/625e7493b5470e774b5aa91fb4fdb9d2.jpg)

![](https://static001.geekbang.org/resource/image/03/94/039bc254b97bd11670cdc4bf2a8e1394.jpg)
</details>

## 代码

<details>
<summary>点击展开</summary>

```
01. 有向图/无向图/有权图/没权图的邻接矩阵
有向图则A[i][j]不一定等于A[j][i]，有权图则1改为对应位置的权重
[[0, 1, 1, 0],
 [1, 0, 0, 1],
 [1, 0, 0, 1],
 [0, 1, 1, 0]]
 
02. ...邻接表

class Graph {
	constructor(v) {
		this.v = v
		this.adj = {}
	}
	addEdge(s, t) {
		if (!this.adj[s]) {
			this.adj[s] = [t]
		} else {
			this.adj[s].push(t)
		}
		if (!this.adj[t]) {
			this.adj[t] = [s]
		} else {
			this.adj[t].push(s)
		}
	}
}
```

</details>