import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Java全栈实战录',
  description: '代码流工作室 - 系统化全栈技术实战经验总结',
  lang: 'zh-CN',
  lastUpdated: true,
  cleanUrls: true,
  base: '/java-fullstack-notes/',

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Java全栈实战录',

    nav: [
      { text: '首页', link: '/' },
      {
        text: 'Java',
        items: [
          {
            text: 'Java基础',
            items: [
              { text: '基础语法', link: '/java/basics/language-features' },
              { text: '集合容器', link: '/java/collections/overview' },
            ]
          },
          {
            text: '并发与JVM',
            items: [
              { text: '并发编程', link: '/java/concurrency/thread-basics' },
              { text: 'JVM', link: '/java/jvm/memory' },
            ]
          }
        ]
      },
      {
        text: '框架｜中间件',
        items: [
          {
            text: '框架',
            items: [
              { text: 'Spring', link: '/framework/spring/ioc' },
              { text: 'Spring MVC', link: '/framework/spring-mvc/dispatcher' },
              { text: 'Spring Boot', link: '/framework/spring-boot/auto-configure' },
              { text: 'Spring Cloud', link: '/framework/spring-cloud/discovery' },
              { text: 'MyBatis', link: '/framework/mybatis/architecture' },
            ]
          },
          {
            text: '中间件',
            items: [
              { text: '消息队列', link: '/middleware/mq/comparison' },
              { text: 'RPC与服务治理', link: '/middleware/rpc/principle' },
              { text: 'Netty', link: '/middleware/netty/architecture' },
              { text: '分布式任务调度', link: '/middleware/schedule/distributed' },
              { text: '分库分表', link: '/middleware/sharding/strategy' },
            ]
          }
        ]
      },
      {
        text: '数据库',
        items: [
          {
            text: '关系型',
            items: [
              { text: 'MySQL', link: '/database/sql/mysql/architecture' },
            ]
          },
          {
            text: 'NoSQL',
            items: [
              { text: 'Redis', link: '/database/nosql/redis/data-structure' },
              { text: 'ElasticSearch', link: '/database/nosql/elasticsearch/intro' },
              { text: 'MongoDB', link: '/database/nosql/mongodb/core' },
            ]
          }
        ]
      },
      {
        text: '数据结构｜算法',
        items: [
          {
            text: '数据结构',
            items: [
              { text: '数组与链表', link: '/algorithm/ds/array-list' },
              { text: '哈希表', link: '/algorithm/ds/hash' },
              { text: '栈与队列', link: '/algorithm/ds/stack-queue' },
              { text: '树', link: '/algorithm/ds/tree' },
              { text: '图', link: '/algorithm/ds/graph' },
              { text: '堆', link: '/algorithm/ds/heap' },
            ]
          },
          {
            text: '算法技巧',
            items: [
              { text: '复杂度分析', link: '/algorithm/skill/complexity' },
              { text: '双指针与滑动窗口', link: '/algorithm/skill/two-pointer' },
              { text: '动态规划', link: '/algorithm/skill/dp' },
              { text: '回溯与贪心', link: '/algorithm/skill/backtracking-greedy' },
              { text: '排序与分治', link: '/algorithm/skill/sort-divide' },
              { text: '位运算与技巧', link: '/algorithm/skill/bit-tricks' },
              { text: '架构师视角的算法', link: '/algorithm/skill/architect-view' },
            ]
          }
        ]
      },
      {
        text: '架构｜设计',
        items: [
          {
            text: '系统架构',
            items: [
              { text: '分布式', link: '/architecture/system/distributed/cap-base' },
              { text: '高性能', link: '/architecture/system/performance/cache' },
              { text: '高可用', link: '/architecture/system/availability/circuit-breaker' },
              { text: '架构演进与DDD', link: '/architecture/system/evolution-ddd/evolution' },
            ]
          },
          {
            text: '设计模式',
            items: [
              { text: '设计模式总览', link: '/architecture/pattern/overview' },
              { text: '创建型', link: '/architecture/pattern/factory-singleton' },
              { text: '结构型', link: '/architecture/pattern/proxy' },
              { text: '行为型', link: '/architecture/pattern/strategy-template' },
              { text: '框架与实战应用', link: '/architecture/pattern/source-code' },
            ]
          }
        ]
      },
      {
        text: '计算机基础',
        items: [
          {
            text: '网络与系统',
            items: [
              { text: '计算机网络', link: '/cs/network/layered-model' },
              { text: '操作系统', link: '/cs/os/process-thread' },
            ]
          },
          {
            text: '编程与工具',
            items: [
              { text: '网络编程', link: '/cs/network-programming/io-evolution' },
              { text: 'Linux', link: '/cs/linux/performance' },
            ]
          }
        ]
      },
      {
        text: '工程｜部署',
        items: [
          {
            text: '容器化',
            items: [
              { text: 'Docker', link: '/devops/container/docker/core' },
              { text: 'Kubernetes', link: '/devops/container/kubernetes/architecture' },
            ]
          },
          {
            text: '交付与监控',
            items: [
              { text: 'CI/CD', link: '/devops/delivery/cicd' },
              { text: '监控', link: '/devops/delivery/monitor' },
              { text: '日志体系', link: '/devops/delivery/logging' },
            ]
          }
        ]
      },
      {
        text: '场景解决方案',
        items: [
          {
            text: '交易场景',
            items: [
              { text: '秒杀系统', link: '/scenarios/trade/seckill' },
              { text: '订单超时关闭', link: '/scenarios/trade/order-timeout' },
              { text: '分布式登录', link: '/scenarios/trade/sso' },
              { text: '幂等设计', link: '/scenarios/trade/idempotent' },
            ]
          },
          {
            text: '数据场景',
            items: [
              { text: '海量数据处理', link: '/scenarios/data/big-data' },
              { text: '数据一致性', link: '/scenarios/data/consistency' },
              { text: '延迟队列', link: '/scenarios/data/delay-queue' },
              { text: '限流熔断落地', link: '/scenarios/data/ratelimit' },
            ]
          }
        ]
      },
      {
        text: '工具｜经验',
        items: [
          {
            text: '工具链',
            items: [
              { text: 'Git 工作流', link: '/tools/git' },
              { text: 'Maven/Gradle', link: '/tools/build' },
              { text: '单元测试', link: '/tools/unit-test' },
            ]
          },
          {
            text: '方法论',
            items: [
              { text: '代码规范', link: '/methodology/code-style' },
              { text: '接口设计', link: '/methodology/api-design' },
              { text: '技术方案写作', link: '/methodology/tech-writing' },
              { text: '性能调优', link: '/methodology/performance-tuning' },
              { text: '线上故障排查', link: '/methodology/troubleshooting' },
            ]
          }
        ]
      },
      { text: '项目', link: '/projects/' },
      { text: '关于', link: '/about' },
    ],

    // sidebar：按一级导航汇总，访问任一文章时左侧展示该一级下所有子分组与文章
    sidebar: (() => {
      const javaSidebar = [
        {
          text: 'Java基础',
          items: [
            { text: 'Java 语言特性总览', link: '/java/basics/language-features' },
            { text: '数据类型与运算', link: '/java/basics/data-types' },
            { text: '面向对象三大特性', link: '/java/basics/oop' },
            { text: '异常体系设计', link: '/java/basics/exception' },
            { text: '泛型与类型擦除', link: '/java/basics/generics' },
            { text: '反射与动态代理', link: '/java/basics/reflection' },
            { text: '注解与元编程', link: '/java/basics/annotation' },
            { text: 'SPI 机制', link: '/java/basics/spi' },
            { text: 'Java 8~21 新特性', link: '/java/basics/new-features' },
          ]
        },
        {
          text: '集合容器',
          items: [
            { text: '集合框架全景图', link: '/java/collections/overview' },
            { text: 'ArrayList 源码解析', link: '/java/collections/arraylist' },
            { text: 'LinkedList 源码解析', link: '/java/collections/linkedlist' },
            { text: 'HashMap 深度剖析', link: '/java/collections/hashmap' },
            { text: 'ConcurrentHashMap 源码', link: '/java/collections/concurrent-hashmap' },
            { text: 'LinkedHashMap 与 LRU', link: '/java/collections/linkedhashmap' },
            { text: 'TreeMap 与红黑树', link: '/java/collections/treemap' },
            { text: 'PriorityQueue 与堆', link: '/java/collections/priorityqueue' },
          ]
        },
        {
          text: '并发编程',
          items: [
            { text: '线程基础与生命周期', link: '/java/concurrency/thread-basics' },
            { text: 'Java 内存模型（JMM）', link: '/java/concurrency/jmm' },
            { text: 'volatile 原理', link: '/java/concurrency/volatile' },
            { text: 'synchronized 全解', link: '/java/concurrency/synchronized' },
            { text: 'AQS 框架源码', link: '/java/concurrency/aqs' },
            { text: 'ReentrantLock 源码', link: '/java/concurrency/reentrantlock' },
            { text: '线程池原理与调优', link: '/java/concurrency/thread-pool' },
            { text: 'CompletableFuture 异步编程', link: '/java/concurrency/completable-future' },
            { text: 'ThreadLocal 原理与陷阱', link: '/java/concurrency/threadlocal' },
            { text: '并发工具类', link: '/java/concurrency/concurrent-tools' },
          ]
        },
        {
          text: 'JVM',
          items: [
            { text: 'JVM 内存结构', link: '/java/jvm/memory' },
            { text: '垃圾回收算法与收集器', link: '/java/jvm/gc' },
            { text: '类加载机制', link: '/java/jvm/classloader' },
            { text: '字节码与执行引擎', link: '/java/jvm/bytecode' },
            { text: 'JVM 调优实战', link: '/java/jvm/tuning' },
            { text: 'Java Agent 与字节码增强', link: '/java/jvm/agent' },
          ]
        }
      ]

      const frameworkMiddlewareSidebar = [
        {
          text: 'Spring',
          items: [
            { text: 'Spring IOC 容器原理', link: '/framework/spring/ioc' },
            { text: 'Bean 生命周期全流程', link: '/framework/spring/bean-lifecycle' },
            { text: '循环依赖与三级缓存', link: '/framework/spring/circular-dependency' },
            { text: 'Spring AOP 原理', link: '/framework/spring/aop' },
            { text: 'Spring 事务管理', link: '/framework/spring/transaction' },
            { text: 'Spring 事件机制', link: '/framework/spring/event' },
          ]
        },
        {
          text: 'Spring MVC',
          items: [
            { text: 'DispatcherServlet 请求流程', link: '/framework/spring-mvc/dispatcher' },
            { text: '参数解析与数据绑定', link: '/framework/spring-mvc/binding' },
            { text: '拦截器与过滤器', link: '/framework/spring-mvc/interceptor' },
          ]
        },
        {
          text: 'Spring Boot',
          items: [
            { text: '自动配置原理', link: '/framework/spring-boot/auto-configure' },
            { text: 'Starter 开发实战', link: '/framework/spring-boot/starter' },
            { text: '内嵌容器与部署', link: '/framework/spring-boot/embedded' },
            { text: '监控与 Actuator', link: '/framework/spring-boot/actuator' },
          ]
        },
        {
          text: 'Spring Cloud',
          items: [
            { text: '微服务注册与发现', link: '/framework/spring-cloud/discovery' },
            { text: '配置中心', link: '/framework/spring-cloud/config' },
            { text: '服务网关', link: '/framework/spring-cloud/gateway' },
            { text: '服务熔断与降级', link: '/framework/spring-cloud/circuit-breaker' },
            { text: '链路追踪', link: '/framework/spring-cloud/tracing' },
            { text: '负载均衡', link: '/framework/spring-cloud/load-balance' },
          ]
        },
        {
          text: 'MyBatis',
          items: [
            { text: 'MyBatis 架构与核心组件', link: '/framework/mybatis/architecture' },
            { text: 'SQL 执行全流程源码', link: '/framework/mybatis/sql-execution' },
            { text: 'MyBatis 缓存机制', link: '/framework/mybatis/cache' },
          ]
        },
        {
          text: '消息队列',
          items: [
            { text: '消息队列选型对比', link: '/middleware/mq/comparison' },
            { text: 'Kafka 架构与原理', link: '/middleware/mq/kafka' },
            { text: '消息可靠性保证', link: '/middleware/mq/reliability' },
            { text: '消息顺序性与延迟队列', link: '/middleware/mq/order-delay' },
            { text: '消息积压处理', link: '/middleware/mq/backlog' },
          ]
        },
        {
          text: 'RPC与服务治理',
          items: [
            { text: 'RPC 框架原理', link: '/middleware/rpc/principle' },
            { text: 'Dubbo 核心机制', link: '/middleware/rpc/dubbo' },
            { text: 'gRPC 与 Protocol Buffers', link: '/middleware/rpc/grpc' },
          ]
        },
        {
          text: 'Netty',
          items: [
            { text: 'Netty 核心架构', link: '/middleware/netty/architecture' },
            { text: 'Netty 线程模型', link: '/middleware/netty/thread-model' },
            { text: 'Netty 编解码', link: '/middleware/netty/codec' },
            { text: 'Netty 源码精读', link: '/middleware/netty/source' },
          ]
        },
        {
          text: '分布式任务调度',
          items: [
            { text: '分布式任务调度方案', link: '/middleware/schedule/distributed' },
          ]
        },
        {
          text: '分库分表',
          items: [
            { text: '分库分表方案', link: '/middleware/sharding/strategy' },
          ]
        }
      ]

      const databaseSidebar = [
        {
          text: 'MySQL',
          items: [
            { text: 'MySQL 架构与存储引擎', link: '/database/sql/mysql/architecture' },
            { text: '索引原理与优化', link: '/database/sql/mysql/index' },
            { text: '事务与 MVCC', link: '/database/sql/mysql/transaction' },
            { text: '锁机制', link: '/database/sql/mysql/lock' },
            { text: '日志系统', link: '/database/sql/mysql/log' },
            { text: 'SQL 优化实战', link: '/database/sql/mysql/optimization' },
            { text: 'MySQL 高可用', link: '/database/sql/mysql/ha' },
          ]
        },
        {
          text: 'Redis',
          items: [
            { text: 'Redis 数据结构', link: '/database/nosql/redis/data-structure' },
            { text: 'Redis 持久化', link: '/database/nosql/redis/persistence' },
            { text: 'Redis 集群', link: '/database/nosql/redis/cluster' },
            { text: 'Redis 缓存设计', link: '/database/nosql/redis/cache' },
            { text: 'Redis 高级特性', link: '/database/nosql/redis/advanced' },
          ]
        },
        {
          text: 'ElasticSearch',
          items: [
            { text: 'ES 入门与架构', link: '/database/nosql/elasticsearch/intro' },
            { text: 'ES 写入与查询原理', link: '/database/nosql/elasticsearch/principle' },
            { text: 'ES 集群调优', link: '/database/nosql/elasticsearch/tuning' },
          ]
        },
        {
          text: 'MongoDB',
          items: [
            { text: 'MongoDB 核心概念', link: '/database/nosql/mongodb/core' },
          ]
        }
      ]

      const algorithmSidebar = [
        {
          text: '数据结构',
          items: [
            { text: '数组与链表', link: '/algorithm/ds/array-list' },
            { text: '哈希表', link: '/algorithm/ds/hash' },
            { text: '栈与队列', link: '/algorithm/ds/stack-queue' },
            { text: '树', link: '/algorithm/ds/tree' },
            { text: '图', link: '/algorithm/ds/graph' },
            { text: '堆', link: '/algorithm/ds/heap' },
          ]
        },
        {
          text: '算法技巧',
          items: [
            { text: '复杂度分析', link: '/algorithm/skill/complexity' },
            { text: '双指针与滑动窗口', link: '/algorithm/skill/two-pointer' },
            { text: '动态规划', link: '/algorithm/skill/dp' },
            { text: '回溯与贪心', link: '/algorithm/skill/backtracking-greedy' },
            { text: '排序与分治', link: '/algorithm/skill/sort-divide' },
            { text: '位运算与技巧', link: '/algorithm/skill/bit-tricks' },
            { text: '架构师视角的算法', link: '/algorithm/skill/architect-view' },
          ]
        }
      ]

      const architectureSidebar = [
        {
          text: '分布式',
          items: [
            { text: 'CAP 与 BASE 理论', link: '/architecture/system/distributed/cap-base' },
            { text: '分布式事务方案', link: '/architecture/system/distributed/transaction' },
            { text: '分布式锁', link: '/architecture/system/distributed/lock' },
            { text: '分布式 ID 生成', link: '/architecture/system/distributed/id' },
            { text: '分布式会话', link: '/architecture/system/distributed/session' },
            { text: '幂等性设计', link: '/architecture/system/distributed/idempotent' },
          ]
        },
        {
          text: '高性能',
          items: [
            { text: '缓存架构设计', link: '/architecture/system/performance/cache' },
            { text: '限流方案', link: '/architecture/system/performance/ratelimit' },
            { text: '读写分离与 CQRS', link: '/architecture/system/performance/cqrs' },
            { text: '秒杀系统设计', link: '/architecture/system/performance/seckill' },
          ]
        },
        {
          text: '高可用',
          items: [
            { text: '降级与熔断', link: '/architecture/system/availability/circuit-breaker' },
            { text: '异地多活方案', link: '/architecture/system/availability/multi-active' },
            { text: '全链路压测', link: '/architecture/system/availability/full-link-stress' },
            { text: '高可用架构总览', link: '/architecture/system/availability/overview' },
          ]
        },
        {
          text: '架构演进与DDD',
          items: [
            { text: '架构演进之路', link: '/architecture/system/evolution-ddd/evolution' },
            { text: '架构设计原则', link: '/architecture/system/evolution-ddd/principles' },
            { text: 'DDD 核心概念', link: '/architecture/system/evolution-ddd/ddd-core' },
            { text: 'DDD 战术设计', link: '/architecture/system/evolution-ddd/ddd-tactical' },
            { text: 'DDD 分层架构', link: '/architecture/system/evolution-ddd/ddd-layer' },
            { text: 'DDD 建模实战', link: '/architecture/system/evolution-ddd/ddd-modeling' },
            { text: 'MVC 到 DDD 重构', link: '/architecture/system/evolution-ddd/mvc-to-ddd' },
          ]
        },
        {
          text: '设计模式',
          items: [
            { text: '设计模式总览与选型', link: '/architecture/pattern/overview' },
            { text: '创建型：工厂与单例', link: '/architecture/pattern/factory-singleton' },
            { text: '创建型：建造者模式', link: '/architecture/pattern/builder' },
            { text: '结构型：代理模式', link: '/architecture/pattern/proxy' },
            { text: '结构型：装饰器与适配器', link: '/architecture/pattern/decorator-adapter' },
            { text: '结构型：门面与组合', link: '/architecture/pattern/facade-composite' },
            { text: '行为型：策略与模板方法', link: '/architecture/pattern/strategy-template' },
            { text: '行为型：观察者与责任链', link: '/architecture/pattern/observer-chain' },
            { text: '行为型：状态机模式', link: '/architecture/pattern/state-machine' },
            { text: '设计模式在源码中的应用', link: '/architecture/pattern/source-code' },
          ]
        }
      ]

      const csSidebar = [
        {
          text: '计算机网络',
          items: [
            { text: '网络分层模型', link: '/cs/network/layered-model' },
            { text: 'TCP 协议深入', link: '/cs/network/tcp' },
            { text: 'HTTP/HTTPS 全解', link: '/cs/network/http' },
            { text: 'DNS 与 CDN', link: '/cs/network/dns-cdn' },
            { text: 'WebSocket 与长连接', link: '/cs/network/websocket' },
          ]
        },
        {
          text: '操作系统',
          items: [
            { text: '进程与线程', link: '/cs/os/process-thread' },
            { text: '内存管理', link: '/cs/os/memory' },
            { text: 'IO 模型', link: '/cs/os/io' },
            { text: '文件系统', link: '/cs/os/file-system' },
          ]
        },
        {
          text: '网络编程',
          items: [
            { text: 'BIO → NIO → AIO 演进', link: '/cs/network-programming/io-evolution' },
            { text: 'epoll 原理', link: '/cs/network-programming/epoll' },
            { text: '基于 Netty 手写 RPC', link: '/cs/network-programming/netty-rpc' },
          ]
        },
        {
          text: 'Linux',
          items: [
            { text: 'Linux 性能诊断', link: '/cs/linux/performance' },
            { text: 'Shell 实用技巧', link: '/cs/linux/shell' },
          ]
        }
      ]

      const devopsSidebar = [
        {
          text: 'Docker',
          items: [
            { text: 'Docker 核心概念与实践', link: '/devops/container/docker/core' },
            { text: 'Docker Compose 编排', link: '/devops/container/docker/compose' },
          ]
        },
        {
          text: 'Kubernetes',
          items: [
            { text: 'K8s 架构与核心对象', link: '/devops/container/kubernetes/architecture' },
            { text: 'K8s 服务发现与负载均衡', link: '/devops/container/kubernetes/service' },
            { text: 'K8s 存储与配置', link: '/devops/container/kubernetes/storage' },
            { text: 'K8s 弹性伸缩', link: '/devops/container/kubernetes/scaling' },
            { text: 'K8s 部署策略', link: '/devops/container/kubernetes/deployment' },
          ]
        },
        {
          text: '交付与监控',
          items: [
            { text: 'CI/CD 流水线设计', link: '/devops/delivery/cicd' },
            { text: '监控体系搭建', link: '/devops/delivery/monitor' },
            { text: '日志体系设计', link: '/devops/delivery/logging' },
          ]
        }
      ]

      const scenariosSidebar = [
        {
          text: '交易场景',
          items: [
            { text: '秒杀系统全链路方案', link: '/scenarios/trade/seckill' },
            { text: '订单超时自动关闭', link: '/scenarios/trade/order-timeout' },
            { text: '分布式登录方案', link: '/scenarios/trade/sso' },
            { text: '幂等设计实战', link: '/scenarios/trade/idempotent' },
          ]
        },
        {
          text: '数据场景',
          items: [
            { text: '海量数据处理', link: '/scenarios/data/big-data' },
            { text: '数据一致性方案', link: '/scenarios/data/consistency' },
            { text: '延迟队列方案', link: '/scenarios/data/delay-queue' },
            { text: '限流熔断落地', link: '/scenarios/data/ratelimit' },
          ]
        }
      ]

      const toolsExpSidebar = [
        {
          text: '工具链',
          items: [
            { text: 'Git 工作流', link: '/tools/git' },
            { text: 'Maven/Gradle 工程管理', link: '/tools/build' },
            { text: '单元测试与 TDD', link: '/tools/unit-test' },
          ]
        },
        {
          text: '方法论',
          items: [
            { text: '代码规范与 Code Review', link: '/methodology/code-style' },
            { text: '接口设计规范', link: '/methodology/api-design' },
            { text: '技术方案文档写作', link: '/methodology/tech-writing' },
            { text: '性能调优方法论', link: '/methodology/performance-tuning' },
            { text: '线上故障排查', link: '/methodology/troubleshooting' },
          ]
        }
      ]

      return {
        '/java/': javaSidebar,
        '/framework/': frameworkMiddlewareSidebar,
        '/middleware/': frameworkMiddlewareSidebar,
        '/database/': databaseSidebar,
        '/algorithm/': algorithmSidebar,
        '/architecture/': architectureSidebar,
        '/cs/': csSidebar,
        '/devops/': devopsSidebar,
        '/scenarios/': scenariosSidebar,
        '/tools/': toolsExpSidebar,
        '/methodology/': toolsExpSidebar,
        // 特殊页面不显示侧边栏
        '/': [],
        '/projects/': [],
        '/about': [],
      }
    })(),

    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ],

    search: {
      provider: 'local'
    },

    outline: {
      level: [2, 3],
      label: '本文目录'
    },

    docFooter: {
      prev: '← 上一篇',
      next: '下一篇 →'
    },

    footer: {
      message: 'Copyright © 2024-2026 代码流工作室 Code Flow Studio | Java全栈实战录',
    },

    lastUpdatedText: '最后更新',
  },

  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }],
  ],
})
