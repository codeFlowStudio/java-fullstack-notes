# JVM 类加载机制

JVM 类加载机制是理解 Java 运行原理的基础。

## 类加载过程

1. **加载**：将 .class 文件读入内存
2. **验证**：验证字节码的正确性
3. **准备**：为静态变量分配内存
4. **解析**：符号引用转为直接引用
5. **初始化**：执行静态代码块

## 双亲委派模型

类加载器层次结构：
- Bootstrap ClassLoader
- Extension ClassLoader
- Application ClassLoader
- Custom ClassLoader

```java
// 获取类加载器
ClassLoader cl = MyClass.class.getClassLoader();
```
