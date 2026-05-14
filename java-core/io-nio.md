# IO/NIO 模型

Java 的 IO 模型经历了从 BIO 到 NIO 再到 AIO 的演进。

## BIO（Blocking IO）

传统的同步阻塞 IO 模型。

```java
try (BufferedReader reader = new BufferedReader(new FileReader("file.txt"))) {
    String line = reader.readLine();
}
```

## NIO（Non-blocking IO）

JDK 4 引入的非阻塞 IO。

### 核心组件

- **Channel**：通道
- **Buffer**：缓冲区
- **Selector**：选择器

```java
Selector selector = Selector.open();
channel.configureBlocking(false);
channel.register(selector, SelectionKey.OP_READ);
```

## AIO（Asynchronous IO）

JDK 7 引入的异步 IO，基于事件和回调机制。
