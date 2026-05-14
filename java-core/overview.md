# Java 语言概述

Java 是一门面向对象编程语言，不仅吸收了 C++ 语言的各种优点，还摒弃了 C++ 里难以理解的多继承、指针等概念。

## Java 的发展历史

- **1995 年**：Sun 公司正式发布 Java 第一个版本
- **2009 年**：Oracle 收购 Sun，Java 由 Oracle 维护
- **2014 年**：Java 8 发布，引入 Lambda 表达式
- **2017 年**：Java 9 发布，引入模块系统
- **2021 年**：Java 17 发布，LTS 版本
- **2023 年**：Java 21 发布，引入虚拟线程

## Java 的核心特性

### 1. 简单易学
Java 语法相对简单，去除了 C++ 中的指针、多继承等复杂概念。

### 2. 面向对象
Java 是纯粹的面向对象语言，一切皆为对象。

### 3. 跨平台性
Java 通过 JVM 实现"一次编写，到处运行"的跨平台特性。

### 4. 安全性
Java 提供了多层次的安全机制，包括类加载机制、字节码验证等。

### 5. 多线程
Java 内置了对多线程编程的支持。

## Java 的应用领域

- **企业级应用**：Spring、Java EE
- **移动开发**：Android
- **大数据**：Hadoop、Spark
- **Web 开发**：Servlet、JSP、Spring MVC

## 开发环境搭建

### 安装 JDK

```bash
# macOS 使用 Homebrew 安装
brew install openjdk@17

# 验证安装
java -version
```

### 第一个 Java 程序

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}
```

编译和运行：

```bash
javac HelloWorld.java
java HelloWorld
```

## 总结

Java 作为一门成熟的编程语言，拥有庞大的生态系统和广泛的应用场景。本模块将带你从零开始，系统地学习 Java 的核心知识。
