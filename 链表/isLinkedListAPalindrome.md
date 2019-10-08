[👈 Back](https://github.com/luvsunlight/algorithm/tree/master/%E9%93%BE%E8%A1%A8)

# 判断单链表是否为回文字符串

## 描述

一个字符串用单链表维护，怎么判断其是否为回文字符串

## 思路

<details>
<summary>方法1</summary>

使用快慢指针，慢指针每前进一步就将data压入栈，直至快指针遍历完链表。然后快指针继续遍历，每遍历一步，就从栈里pop出一个进行对比，必须要每一步都完全一致才

</details>

<details>
<summary>方法2</summary>

使用快慢指针，慢指针前进的同时，修改其next指针，使前半部分逆序，直至快指针遍历完，然后比较左右两侧的链表

</details>

## 代码