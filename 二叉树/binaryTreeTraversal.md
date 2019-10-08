[👈 Back](https://github.com/luvsunlight/algorithm/tree/master/%E4%BA%8C%E5%8F%89%E6%A0%91)

# binaryTreeTraversal (二叉树的遍历)

[**Leetcode 144**](https://leetcode-cn.com/problems/binary-tree-preorder-traversal/)

[**Leetcode 94**](https://leetcode-cn.com/problems/binary-tree-inorder-traversal/)

[**Leetcode 145**](https://leetcode-cn.com/problems/binary-tree-postorder-traversal/)

## 描述

给定一个二叉树，返回它的前序，中序，后序遍历

进阶: 递归算法很简单，你可以通过迭代算法完成吗？

## 思路

<details>
<summary>点击展开</summary>

递归的思路很简单
前序遍历的递推公式：
preOrder(r) = print r->preOrder(r->left)->preOrder(r->right)

中序遍历的递推公式：
inOrder(r) = inOrder(r->left)->print r->inOrder(r->right)

后序遍历的递推公式：
postOrder(r) = postOrder(r->left)->postOrder(r->right)->print r
</details>

## 代码

<details>
<summary>点击展开</summary>

1. 前序
```
let ans = []
	if (root) {
		ans.push(root.val)
		if (root.left) ans = ans.concat(preorderTraversal(root.left))
		if (root.right) ans = ans.concat(preorderTraversal(root.right))
	}
	return ans
```

2. 中序
```
var inorderTraversal = function(root) {
    let ans = []
	if (root) {
		if (root.left) ans = ans.concat(inorderTraversal(root.left))
        ans.push(root.val)
		if (root.right) ans = ans.concat(inorderTraversal(root.right))
	}
	return ans
};
```

3. 后序

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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    let ans = []
	if (root) {
		if (root.left) ans = ans.concat(postorderTraversal(root.left))
		if (root.right) ans = ans.concat(postorderTraversal(root.right))
        ans.push(root.val)
	}
	return ans
};
```

</details>