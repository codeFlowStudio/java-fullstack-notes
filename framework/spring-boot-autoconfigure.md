---
title: Spring Boot 3.x 自动装配原理深度解析
description: 从 @SpringBootApplication 注解出发，逐步深入源码，揭示自动装配的完整工作机制
---

# Spring Boot 3.x 自动装配原理深度解析

::: tip 版本说明
本文基于 Spring Boot 3.2.x 分析，与 2.x 的主要区别在于自动装配使用 `META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports` 替代了 `spring.factories`。
:::

Spring Boot 最核心的特性之一就是**自动装配（Auto-Configuration）**。它让开发者不再需要编写大量的 XML 配置或 Java Config，只需引入相应的 Starter 依赖，Spring Boot 就能自动配置好所需的 Bean。

本文将从 `@SpringBootApplication` 注解出发，逐步深入源码，揭示自动装配的完整工作机制。

## 从 @SpringBootApplication 说起

`@SpringBootApplication` 是一个复合注解，它组合了三个关键注解：

- `@SpringBootConfiguration`：标识当前类为配置类
- `@EnableAutoConfiguration`：开启自动装配（核心）
- `@ComponentScan`：组件扫描

```java
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@SpringBootConfiguration
@EnableAutoConfiguration
@ComponentScan(excludeFilters = {
    @Filter(type = FilterType.CUSTOM,
            classes = TypeExcludeFilter.class),
    @Filter(type = FilterType.CUSTOM,
            classes = AutoConfigurationExcludeFilter.class)
})
public @interface SpringBootApplication {
    // ...
}
```

## @EnableAutoConfiguration 的工作原理

自动装配的核心入口是 `@EnableAutoConfiguration`。它通过 `@Import(AutoConfigurationImportSelector.class)` 引入了自动配置的选择器。

### AutoConfigurationImportSelector

这个类实现了 `DeferredImportSelector` 接口，在所有 `@Configuration` 类处理完毕后才执行。它的核心方法 `getAutoConfigurationEntry()` 负责加载所有候选的自动配置类：

```java
protected AutoConfigurationEntry getAutoConfigurationEntry(
        AnnotationMetadata annotationMetadata) {

    // 1. 获取所有候选自动配置类
    List<String> configurations = getCandidateConfigurations(
        annotationMetadata, attributes);

    // 2. 去重
    configurations = removeDuplicates(configurations);

    // 3. 排除用户指定的配置
    Set<String> exclusions = getExclusions(
        annotationMetadata, attributes);
    configurations.removeAll(exclusions);

    // 4. 过滤 — 根据 @Conditional 条件筛选
    configurations = getConfigurationClassFilter()
        .filter(configurations);

    return new AutoConfigurationEntry(configurations, exclusions);
}
```

### 加载过程详解

#### 第一步：获取候选配置类

通过 `SpringFactoriesLoader` 加载 `META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports` 文件中配置的所有自动配置类。

在 Spring Boot 3.x 中，这个文件的格式是每行一个类的全限定名：

```
org.springframework.boot.autoconfigure.web.servlet.WebMvcAutoConfiguration
org.springframework.boot.autoconfigure.data.jpa.JpaRepositoriesAutoConfiguration
org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration
// ... 更多配置
```

#### 第二步：去重和排除

- 去除重复的配置类
- 排除通过 `@EnableAutoConfiguration(exclude={...})` 指定的类

#### 第三步：条件过滤

这是最关键的一步，通过 `@Conditional` 系列注解进行条件筛选，只有满足条件的配置类才会被加载。

## 条件装配 @Conditional

自动装配之所以能做到"按需加载"，关键在于 `@Conditional` 系列条件注解。Spring Boot 预置了丰富的条件注解：

| 注解 | 条件 |
|------|------|
| `@ConditionalOnClass` | Classpath 上存在指定类时生效 |
| `@ConditionalOnMissingBean` | 容器中不存在指定 Bean 时生效 |
| `@ConditionalOnProperty` | 配置文件中存在指定属性时生效 |
| `@ConditionalOnWebApplication` | 当前是 Web 应用时生效 |
| `@ConditionalOnMissingClass` | Classpath 上不存在指定类时生效 |
| `@ConditionalOnBean` | 容器中存在指定 Bean 时生效 |

### 示例：数据源自动配置

```java
@Configuration
@ConditionalOnClass({ DataSource.class, EmbeddedDatabaseType.class })
@ConditionalOnMissingBean(DataSource.class)
@EnableConfigurationProperties(DataSourceProperties.class)
public class DataSourceAutoConfiguration {
    
    @Bean
    public DataSource dataSource(DataSourceProperties properties) {
        // 创建数据源
    }
}
```

这个配置类会在以下条件全部满足时生效：
1. Classpath 上存在 `DataSource` 和 `EmbeddedDatabaseType` 类
2. 容器中还没有 `DataSource` Bean
3. 读取 `application.yml` 中的数据源配置

::: tip 实践建议
自定义 Starter 时，务必为你的自动配置类添加合适的 `@Conditional` 注解，避免无条件注入 Bean 导致冲突。推荐使用 `@ConditionalOnMissingBean` 让用户能够覆盖默认配置。
:::

## 自定义 Starter 实战

理解了自动装配原理后，我们可以按照约定创建自己的 Starter。

### 标准项目结构

```
xxx-spring-boot-autoconfigure/        # 自动配置模块
├── pom.xml
└── src/main/
    ├── java/
    │   └── com/example/
    │       └── XXXAutoConfiguration.java
    └── resources/
        └── META-INF/
            └── spring/
                └── org.springframework.boot.autoconfigure.AutoConfiguration.imports

xxx-spring-boot-starter/              # 依赖聚合模块
└── pom.xml                           # 仅依赖 autoconfigure 和其他必要的依赖
```

### 创建自动配置类

```java
@Configuration
@ConditionalOnClass(XXXService.class)
@EnableConfigurationProperties(XXXProperties.class)
public class XXXAutoConfiguration {
    
    @Bean
    @ConditionalOnMissingBean
    public XXXService xxxService(XXXProperties properties) {
        return new XXXServiceImpl(properties.getConfig());
    }
}
```

### 注册自动配置

在 `META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports` 文件中添加：

```
com.example.XXXAutoConfiguration
```

### 使用自定义 Starter

在其他项目中引入：

```xml
<dependency>
    <groupId>com.example</groupId>
    <artifactId>xxx-spring-boot-starter</artifactId>
    <version>1.0.0</version>
</dependency>
```

然后在 `application.yml` 中配置相关属性即可。

## 自动装配的调试技巧

### 启用调试日志

在 `application.yml` 中添加：

```yaml
logging:
  level:
    org.springframework.boot.autoconfigure: DEBUG
```

### 查看自动装配报告

添加 `--debug` 参数启动应用，会输出自动装配报告：

```bash
java -jar app.jar --debug
```

报告中会显示：
- **Positive matches**：成功应用的配置
- **Negative matches**：未应用的配置及原因

### 使用 Spring Boot Actuator

添加 `spring-boot-starter-actuator` 依赖后，可以访问 `/actuator/conditions` 端点查看完整的自动装配报告。

## 总结

Spring Boot 自动装配的本质是通过以下链路实现的：

```
@EnableAutoConfiguration
  ↓
AutoConfigurationImportSelector
  ↓
加载 AutoConfiguration.imports
  ↓
@Conditional 条件过滤
  ↓
注册符合条件的 Bean
```

这一机制实现了"约定优于配置"的开发体验。理解这一机制，对于排查自动配置问题和编写自定义 Starter 都至关重要。

### 核心要点

1. **自动装配入口**：`@EnableAutoConfiguration` 注解
2. **配置加载器**：`AutoConfigurationImportSelector`
3. **配置文件**：`META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports`
4. **条件注解**：`@Conditional` 系列注解实现按需加载
5. **优先级控制**：`@AutoConfigureBefore`、`@AutoConfigureAfter`

掌握自动装配原理，不仅能帮助我们更好地理解 Spring Boot 的工作机制，还能让我们在开发自定义 Starter 时游刃有余。
