[👈 Back](https://github.com/luvsunlight/algorithm/tree/master/%E9%93%BE%E8%A1%A8)

# 删除链表倒数第n个节点

## 描述

删除链表中倒数第n个节点

## 思路

<details>
<summary>方法1</summary>

首先遍历链表，获取链表长度，然后减去倒序index即为正序index，然后按照正序进行删除即可

时间复杂度O(n)(获取链表长度O(n),正序删除也是O(n))

</details>

<details>
<summary>方法2</summary>

首先使用revert获取逆序链表，再对逆序链表进行正序删除，对删除的结构再进行逆序恢复即可，好处是不需要额外堆砌业务代码，直接调用现成即可

时间复杂度O(n)(三个操作均为O(n))

</details>

## 代码

<details>
<summary>点击展开</summary>

略

</details>