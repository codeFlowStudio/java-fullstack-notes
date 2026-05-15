// 项目数据：被首页（HomePage.vue）和项目页（projects/index.md）共同引用
// 在此处增删项目，两边自动同步

export const completedProjects = [
  {
    title: '电商系统',
    subtitle: 'E-commerce Platform',
    desc: '从零到一构建完整的电商平台，涵盖商品管理、订单系统、支付集成、购物车等核心功能',
    topics: ['Spring Boot', 'MySQL', 'Redis', 'Vue.js'],
    count: '12 篇文章',
    color: 'blue',
    icon: '🛒',
    link: '#'
  },
  {
    title: '秒杀系统',
    subtitle: 'Flash Sale System',
    desc: '高并发秒杀架构设计与实现，包含限流、库存扣减、防刷等核心场景的解决方案',
    topics: ['Spring Cloud', 'Redis', 'RabbitMQ', 'Sentinel'],
    count: '8 篇文章',
    color: 'orange',
    icon: '⚡',
    link: '#'
  },
  {
    title: '权限管理系统',
    subtitle: 'RBAC Permission System',
    desc: '基于 RBAC 模型的权限管理系统，支持菜单权限、按钮权限、数据权限等多维度控制',
    topics: ['Spring Security', 'JWT', 'Vue.js', 'Element Plus'],
    count: '10 篇文章',
    color: 'green',
    icon: '🔐',
    link: '#'
  },
  {
    title: '博客系统',
    subtitle: 'Blog Platform',
    desc: '个人博客系统，支持文章管理、分类标签、评论系统、全文搜索等功能',
    topics: ['Spring Boot', 'Elasticsearch', 'MySQL', 'React'],
    count: '8 篇文章',
    color: 'teal',
    icon: '📝',
    link: '#'
  }
]

export const ongoingProjects = [
  {
    title: '工作流引擎',
    subtitle: 'Workflow Engine',
    desc: '基于 Activiti/Flowable 的工作流引擎应用，支持流程设计、审批流转、任务分配等功能',
    topics: ['Flowable', 'Spring Boot', 'MySQL', 'Vue.js'],
    count: '6 篇文章',
    color: 'purple',
    icon: '🔄',
    link: '#'
  },
  {
    title: '即时通讯系统',
    subtitle: 'Instant Messaging',
    desc: '基于 WebSocket 的即时通讯系统，支持单聊、群聊、消息推送、离线消息等功能',
    topics: ['Netty', 'WebSocket', 'Redis', 'Vue.js'],
    count: '5 篇文章',
    color: 'red',
    icon: '💬',
    link: '#'
  }
]

export const allProjects = [...completedProjects, ...ongoingProjects]
