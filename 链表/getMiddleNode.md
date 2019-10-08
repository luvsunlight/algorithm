[👈 Back](https://github.com/luvsunlight/algorithm/tree/master/%E9%93%BE%E8%A1%A8)

# 求链表的中间节点

## 描述

获取一个(单)链表的中间节点

## 思路

<details>
<summary>点击展开</summary>

使用快慢指针,快指针一次走两步，慢指针一次走一步，等快指针走到结尾时停下，此时慢指针即为中间节点

</details>

## 代码

<details>
<summary>点击展开</summary>

```
getMidNode() {
	let [fastNode, slowNode] = [this.head, this.head]
	while (fastNode) {
		fastNode = fastNode.next ? fastNode.next.next : fastNode.next
		if (fastNode) slowNode = slowNode.next
	}
	return slowNode
}
```

</details>

