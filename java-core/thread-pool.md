# 线程池原理与实践

线程池是管理和复用线程的机制。

## ThreadPoolExecutor

```java
ThreadPoolExecutor executor = new ThreadPoolExecutor(
    10,  // 核心线程数
    20,  // 最大线程数
    60,  // 空闲线程存活时间
    TimeUnit.SECONDS,
    new LinkedBlockingQueue<>(100),  // 任务队列
    Executors.defaultThreadFactory(),
    new ThreadPoolExecutor.AbortPolicy()  // 拒绝策略
);
```

## 核心参数

- **corePoolSize**：核心线程数
- **maximumPoolSize**：最大线程数
- **keepAliveTime**：空闲线程存活时间
- **workQueue**：任务队列
- **threadFactory**：线程工厂
- **handler**：拒绝策略

## 工作流程

1. 核心线程未满 → 创建核心线程
2. 核心线程已满 → 加入队列
3. 队列已满 → 创建非核心线程
4. 达到最大线程 → 触发拒绝策略
