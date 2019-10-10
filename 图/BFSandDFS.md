# BFSandDFS (实现图的深度优先搜索，广度优先搜索)

## 描述

实现图的深度优先搜索，广度优先搜索

## 思路

<details>
<summary>点击展开</summary>
BFS广度优先算法需要借助队列，我们先从起始点s出发，如果s！==t，则s标记为visted，并且s入队列，然后dequeue出队列，出队列值的所有未访问过的邻接值全部依次进队列，如此循环，每个循环里出一个队列，并且出队列的这个值的所有未访问过的邻接值都进队列，如此循环直至找到t

DFS更简单一些，它是利用回溯的思想，也就是说用递归来做会更好。从起点开始，如果不等于终点，则标记为已经访问，然后遍历每一个未访问的邻接点，并且使用DFS深度优先搜索算法来嵌套。记得外部加一个found变量，如果找到则直接return
</details>

## 代码

<details>
<summary>点击展开</summary>

```
let found = false
const DFS = (graph, s, t, visited = {}) => {
	if (found) return
	console.log(s)
	if (s === t) {
		found = true
		return true
	} else {
		visited[s] = true
		graph.adj[s]
			.filter(n => !visited[n])
			.map(n => DFS(graph, n, t, visited))
	}
}
```

```

const BFS = (graph, s, t) => {
	let queue = {
		head: null,
		tail: null,
		enqueue(n) {
			let newNode = { val: n, next: null }
			if (!this.head) {
				this.head = newNode
				this.tail = newNode
			} else {
				this.tail.next = newNode
				this.tail = this.tail.next
			}
		},
		dequeue() {
			if (this.head) {
				let pop = this.head.val
				this.head = this.head.next
				if (!this.head) this.tail = this.head
				return pop
			}
		}
	}
	let visited = {}
	if (s !== t) {
		console.log(s)
		visited[s] = true
		queue.enqueue(s)
	}
	while (true) {
	   if (queue.head === null) return
		let current = queue.dequeue()
		let adjs = graph.adj[current].filter(n => !visited[n])
		for (let i = 0; i < adjs.length; i++) {
			let n = adjs[i]
			if (n === t) {
				console.log(n)
				return
			} else {
				console.log(n)
				visited[n] = true
				queue.enqueue(n)
			}
		}
	}
}
```

</details>