# 锁机制深度解析

Java 提供了多种锁机制来保证线程安全。

## synchronized

内置锁，基于 Monitor 实现。

```java
public synchronized void method() {
    // 同步代码
}
```

## ReentrantLock

可重入锁，提供比 synchronized 更灵活的功能。

```java
ReentrantLock lock = new ReentrantLock();
try {
    lock.lock();
    // 临界区
} finally {
    lock.unlock();
}
```

## 锁优化

- **锁粗化**：扩大锁的范围
- **锁消除**：JIT 编译器消除不必要的锁
- **偏向锁**：减少无竞争时的开销
- **轻量级锁**：使用 CAS 减少重量级锁

## CAS（Compare-And-Swap）

无锁并发机制，基于硬件指令。
