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
		if (!graph.adj[current]) debugger
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

let g = new Graph(4)

g.addEdge(1, 2)
g.addEdge(1, 3)
g.addEdge(2, 4)
g.addEdge(3, 4)
// g.addEdge(1, 4)
// g.addEdge(2, 3)
// g.addEdge(2, 5)
// g.addEdge(3, 6)
// g.addEdge(4, 5)
// g.addEdge(5, 6)
// g.addEdge(5, 7)
// g.addEdge(6, 8)
// g.addEdge(7, 8)

console.log(g)

DFS(g, 1, 8)

// BFS(g, 1, 8)
