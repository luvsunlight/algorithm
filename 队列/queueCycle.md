[👈 Back](https://github.com/luvsunlight/algorithm/tree/master/%E9%98%9F%E5%88%97)

# 实现一个循环链表

## 描述

实现一个循环链表

## 思路

<details>
<summary>点击展开</summary>
入队的时候并不直接更新tail，而是将tail后移一位，等再有一个元素入队时，我们再更新下标，重点注意判断循环队列为空的情况

![](https://static001.geekbang.org/resource/image/58/90/58ba37bb4102b87d66dffe7148b0f990.jpg)

![](https://static001.geekbang.org/resource/image/71/80/71a41effb54ccea9dd463bde1b6abe80.jpg)
</details>


## 代码

<details>
<summary>点击展开</summary>

```
public class CircularQueue {
  // 数组：items，数组大小：n
  private String[] items;
  private int n = 0;
  // head 表示队头下标，tail 表示队尾下标
  private int head = 0;
  private int tail = 0;

  // 申请一个大小为 capacity 的数组
  public CircularQueue(int capacity) {
    items = new String[capacity];
    n = capacity;
  }

  // 入队
  public boolean enqueue(String item) {
    // 队列满了
    if ((tail + 1) % n == head) return false;
    items[tail] = item;
    tail = (tail + 1) % n;
    return true;
  }

  // 出队
  public String dequeue() {
    // 如果 head == tail 表示队列为空
    if (head == tail) return null;
    String ret = items[head];
    head = (head + 1) % n;
    return ret;
  }
}

```

</details>