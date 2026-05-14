# Java 面向对象编程

面向对象编程（OOP）是 Java 的核心编程范式。

## 三大特性

### 封装
将数据和操作数据的方法绑定在一起。

### 继承
子类继承父类的属性和方法。

### 多态
同一操作作用于不同的对象，可以有不同的解释。

## 类和对象

```java
public class Person {
    private String name;
    private int age;
    
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public void sayHello() {
        System.out.println("Hello, I'm " + name);
    }
}
```

## 接口与抽象类

接口定义行为契约，抽象类提供部分实现。
