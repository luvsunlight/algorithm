# maxDepthBinaryTree (二叉树的最大深度)

## 描述

给定一个二叉树，找出其最大深度。

二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

说明: 叶子节点是指没有子节点的节点。

示例：
给定二叉树 [3,9,20,null,null,15,7]，

```
    3
   / \
  9  20
    /  \
   15   7
```

返回它的最大深度3

## 思路

<details>
<summary>点击展开</summary>
1. 递归法
如果root不存在，则返回0，如果root的左右节点都存在，则返回1+max(左子树最大深度，右子树最大深度)，如果只存在一个，则返回1+存在的子树最大深度
</details>

## 代码

<details>
<summary>点击展开</summary>

```
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
	if (!root) return 0
	if (root.left || root.right) {
		let leftDepth = root.left ? maxDepth(root.left) : 0
		let rightDepth = root.right ? maxDepth(root.right) : 0
		return 1 + Math.max(leftDepth, rightDepth)
	} else {
		return 1
	}
}
```

</details>
