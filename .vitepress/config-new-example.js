// 新的导航栏和侧边栏配置示例
// 基于语雀知识库目录结构

export const newNavConfig = [
  { text: '首页', link: '/' },
  { text: 'Java后端', link: '/java-backend/' },
  { text: '主流框架', link: '/frameworks/' },
  { text: '中间件', link: '/middleware/' },
  { text: '数据库', link: '/database/' },
  { text: '数据结构&算法', link: '/algorithms/' },
  { text: '分布式', link: '/distributed/' },
  { text: '场景解决方案', link: '/solutions/' },
  { text: '计算机基础', link: '/cs-fundamentals/' },
  { text: '前端框架', link: '/frontend/' },
]

export const newSidebarConfig = {
  // Java后端
  '/java-backend/': [
    {
      text: '基础语法',
      items: [
        { text: '基础语法(一)', link: '/java-backend/syntax-1' },
        { text: '基础语法(二)', link: '/java-backend/syntax-2' },
        { text: '面向对象', link: '/java-backend/oop' },
        { text: '集合框架', link: '/java-backend/collections' },
        { text: '异常处理', link: '/java-backend/exceptions' },
      ]
    },
    {
      text: '高级特性',
      items: [
        { text: '泛型', link: '/java-backend/generics' },
        { text: '反射', link: '/java-backend/reflection' },
        { text: '注解', link: '/java-backend/annotations' },
        { text: 'Lambda表达式', link: '/java-backend/lambda' },
      ]
    },
    {
      text: '并发编程',
      items: [
        { text: '线程基础', link: '/java-backend/thread-basics' },
        { text: '线程池', link: '/java-backend/thread-pool' },
        { text: '锁机制', link: '/java-backend/locks' },
        { text: '并发容器', link: '/java-backend/concurrent-collections' },
      ]
    },
    {
      text: 'JVM',
      items: [
        { text: '内存模型', link: '/java-backend/jvm-memory' },
        { text: '垃圾回收', link: '/java-backend/gc' },
        { text: '性能调优', link: '/java-backend/jvm-tuning' },
        { text: '类加载机制', link: '/java-backend/class-loading' },
      ]
    }
  ],

  // 主流框架
  '/frameworks/': [
    {
      text: 'Spring',
      items: [
        { text: 'IoC容器', link: '/frameworks/spring/ioc' },
        { text: 'AOP', link: '/frameworks/spring/aop' },
        { text: '事务管理', link: '/frameworks/spring/transaction' },
      ]
    },
    {
      text: 'Spring Boot',
      items: [
        { text: '自动配置', link: '/frameworks/springboot/auto-config' },
        { text: 'starter原理', link: '/frameworks/springboot/starter' },
        { text: '配置文件', link: '/frameworks/springboot/config' },
      ]
    },
    {
      text: 'Spring Cloud',
      items: [
        { text: '服务注册与发现', link: '/frameworks/springcloud/eureka' },
        { text: '负载均衡', link: '/frameworks/springcloud/ribbon' },
        { text: '服务网关', link: '/frameworks/springcloud/gateway' },
      ]
    },
    {
      text: 'MyBatis',
      items: [
        { text: '基础使用', link: '/frameworks/mybatis/basics' },
        { text: '动态SQL', link: '/frameworks/mybatis/dynamic-sql' },
        { text: '插件开发', link: '/frameworks/mybatis/plugins' },
      ]
    }
  ],

  // 中间件
  '/middleware/': [
    {
      text: '消息队列',
      items: [
        { text: 'Kafka', link: '/middleware/kafka' },
        { text: 'RabbitMQ', link: '/middleware/rabbitmq' },
        { text: 'RocketMQ', link: '/middleware/rocketmq' },
      ]
    },
    {
      text: '缓存',
      items: [
        { text: 'Redis基础', link: '/middleware/redis/basics' },
        { text: 'Redis集群', link: '/middleware/redis/cluster' },
        { text: '缓存问题', link: '/middleware/redis/problems' },
      ]
    },
    {
      text: 'RPC框架',
      items: [
        { text: 'Dubbo', link: '/middleware/dubbo' },
        { text: 'gRPC', link: '/middleware/grpc' },
      ]
    }
  ],

  // 数据库
  '/database/': [
    {
      text: 'MySQL',
      items: [
        { text: '索引优化', link: '/database/mysql/index' },
        { text: '事务隔离', link: '/database/mysql/transaction' },
        { text: '锁机制', link: '/database/mysql/locks' },
        { text: '分库分表', link: '/database/mysql/sharding' },
      ]
    },
    {
      text: 'NoSQL',
      items: [
        { text: 'MongoDB', link: '/database/nosql/mongodb' },
        { text: 'Elasticsearch', link: '/database/nosql/es' },
      ]
    }
  ],

  // 数据结构&算法
  '/algorithms/': [
    {
      text: '数据结构',
      items: [
        { text: '数组与链表', link: '/algorithms/data-structure/array-list' },
        { text: '栈与队列', link: '/algorithms/data-structure/stack-queue' },
        { text: '树与图', link: '/algorithms/data-structure/tree-graph' },
        { text: '哈希表', link: '/algorithms/data-structure/hash' },
      ]
    },
    {
      text: '算法技巧',
      items: [
        { text: '排序算法', link: '/algorithms/skills/sorting' },
        { text: '查找算法', link: '/algorithms/skills/searching' },
        { text: '动态规划', link: '/algorithms/skills/dp' },
        { text: '贪心算法', link: '/algorithms/skills/greedy' },
        { text: '回溯算法', link: '/algorithms/skills/backtracking' },
      ]
    }
  ],

  // 分布式
  '/distributed/': [
    {
      text: '高性能',
      items: [
        { text: '缓存策略', link: '/distributed/high-performance/cache' },
        { text: '异步处理', link: '/distributed/high-performance/async' },
        { text: '池化技术', link: '/distributed/high-performance/pooling' },
      ]
    },
    {
      text: '高可用',
      items: [
        { text: '负载均衡', link: '/distributed/high-availability/lb' },
        { text: '服务降级', link: '/distributed/high-availability/degradation' },
        { text: '熔断限流', link: '/distributed/high-availability/ratelimit' },
      ]
    },
    {
      text: '海量数据',
      items: [
        { text: '分片策略', link: '/distributed/big-data/sharding' },
        { text: '数据同步', link: '/distributed/big-data/sync' },
        { text: '一致性方案', link: '/distributed/big-data/consistency' },
      ]
    }
  ],

  // 场景解决方案
  '/solutions/': [
    {
      text: '电商场景',
      items: [
        { text: '秒杀系统', link: '/solutions/ecommerce/seckill' },
        { text: '订单系统', link: '/solutions/ecommerce/order' },
        { text: '支付系统', link: '/solutions/ecommerce/payment' },
      ]
    },
    {
      text: '社交场景',
      items: [
        { text: 'feed流', link: '/solutions/social/feed' },
        { text: '即时通讯', link: '/solutions/social/im' },
      ]
    }
  ],

  // 计算机基础
  '/cs-fundamentals/': [
    {
      text: '操作系统',
      items: [
        { text: '进程与线程', link: '/cs/os/process-thread' },
        { text: '内存管理', link: '/cs/os/memory' },
        { text: '文件系统', link: '/cs/os/filesystem' },
      ]
    },
    {
      text: '网络',
      items: [
        { text: 'TCP/IP', link: '/cs/network/tcp' },
        { text: 'HTTP', link: '/cs/network/http' },
        { text: 'HTTPS', link: '/cs/network/https' },
      ]
    }
  ],

  // 前端框架
  '/frontend/': [
    {
      text: 'Vue.js',
      items: [
        { text: '基础语法', link: '/frontend/vue/basics' },
        { text: '组件开发', link: '/frontend/vue/components' },
        { text: 'Vuex', link: '/frontend/vue/vuex' },
      ]
    },
    {
      text: 'React',
      items: [
        { text: 'JSX', link: '/frontend/react/jsx' },
        { text: 'Hooks', link: '/frontend/react/hooks' },
        { text: 'Redux', link: '/frontend/react/redux' },
      ]
    }
  ],

  // 默认首页侧边栏
  '/': []
}
