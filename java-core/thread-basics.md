# 线程基础

线程是操作系统调度的最小单位。

## 创建线程的方式

### 1. 继承 Thread 类

```java
class MyThread extends Thread {
    public void run() {
        System.out.println("Thread running");
    }
}
```

### 2. 实现 Runnable 接口

```java
class MyRunnable implements Runnable {
    public void run() {
        System.out.println("Runnable running");
    }
}
```

### 3. 实现 Callable 接口

```java
class MyCallable implements Callable<String> {
    public String call() {
        return "Callable result";
    }
}
```

## 线程状态

- NEW：新建
- RUNNABLE：运行
- BLOCKED：阻塞
- WAITING：等待
- TIMED_WAITING：超时等待
- TERMINATED：终止
