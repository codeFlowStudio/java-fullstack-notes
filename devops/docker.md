# Docker 入门

Docker 是最流行的容器化技术。

## 核心概念

- **镜像（Image）**：只读模板
- **容器（Container）**：镜像的运行实例
- **仓库（Registry）**：镜像存储和分发

## 基本命令

```bash
# 拉取镜像
docker pull nginx

# 运行容器
docker run -d -p 80:80 nginx

# 查看容器
docker ps
```
