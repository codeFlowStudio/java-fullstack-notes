# Java 集合框架详解

Java 集合框架提供了丰富的数据结构和算法。

## 集合体系结构

- **Collection**
  - List：ArrayList, LinkedList
  - Set：HashSet, TreeSet, LinkedHashSet
  - Queue：PriorityQueue, ArrayDeque
- **Map**
  - HashMap, TreeMap, LinkedHashMap

## ArrayList vs LinkedList

| 特性 | ArrayList | LinkedList |
|------|-----------|------------|
| 底层结构 | 数组 | 双向链表 |
| 随机访问 | O(1) | O(n) |
| 插入删除 | O(n) | O(1) |
| 内存占用 | 较小 | 较大 |

## HashMap 原理

HashMap 基于哈希表实现，JDK 8 引入了红黑树优化。

```java
Map<String, Integer> map = new HashMap<>();
map.put("one", 1);
map.put("two", 2);
```
