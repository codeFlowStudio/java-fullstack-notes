# Java 全栈知识体系网站

基于 VitePress 构建的 Java 全栈知识体系学习网站。

## 📚 项目简介

这是一个系统化的 Java 后端技术学习平台，涵盖：
- Java 基础、JVM、并发编程
- Spring 生态（Spring、Spring Boot、Spring Cloud）
- 数据库（MySQL、Redis）
- 中间件与架构设计
- DevOps（Docker、Kubernetes）
- 项目实战

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 http://localhost:5173 预览网站。

### 构建生产版本

```bash
npm run build
```

### 预览生产构建

```bash
npm run preview
```

## 📁 项目结构

```
cfs-knowledge-site/
├── .vitepress/
│   ├── config.js          # VitePress 配置文件
│   ├── theme/
│   │   ├── index.js       # 主题入口
│   │   └── custom.css     # 自定义样式
│   └── public/
│       └── logo.svg       # 网站 Logo
├── index.md               # 首页
├── java-core/             # Java 核心知识
│   ├── index.md
│   ├── overview.md
│   ├── oop.md
│   ├── collections.md
│   ├── io-nio.md
│   ├── jvm-*.md
│   └── thread-*.md
├── framework/             # 框架知识
│   ├── index.md
│   ├── spring-core.md
│   ├── spring-boot-autoconfigure.md
│   └── ...
├── database/              # 数据库知识
├── devops/                # DevOps 知识
├── architecture/          # 架构设计知识
└── projects/              # 项目实战
```

## 🎨 特色功能

- ✅ 响应式设计，支持移动端
- ✅ 全文搜索功能
- ✅ 知识体系卡片展示
- ✅ 推荐学习路线
- ✅ 最近更新文章
- ✅ 侧边栏导航
- ✅ 文章目录大纲
- ✅ 代码高亮显示
- ✅ Markdown 支持

## 📝 添加新文章

1. 在对应目录下创建 `.md` 文件
2. 在 `.vitepress/config.js` 中添加侧边栏配置
3. 在首页 `index.md` 中更新相关链接

示例：

```markdown
---
title: 文章标题
description: 文章描述
---

# 文章标题

文章内容...
```

## 🛠️ 技术栈

- **VitePress** - 静态站点生成器
- **Vue 3** - 前端框架
- **Markdown** - 内容编写

## 📄 License

MIT

---

Copyright © 2024-2026 Java 全栈知识体系 | Built with VitePress
