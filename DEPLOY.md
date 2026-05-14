# 部署到 GitHub Pages 指南

## 快速部署步骤

### 1. 初始化 Git 仓库（如果还没有）

```bash
cd /Volumes/work/blog/cfs-knowledge-site
git init
git add .
git commit -m "Initial commit: Java全栈实战录"
```

### 2. 关联 GitHub 仓库

```bash
# 替换为你的 GitHub 仓库地址
git remote add origin https://github.com/你的用户名/仓库名.git
git branch -M main
git push -u origin main
```

### 3. 配置 VitePress base 路径

编辑 `.vitepress/config.js`，取消注释并修改 base：

```javascript
export default defineConfig({
  base: '/你的仓库名/',  // 例如: '/java-fullstack-notes/'
  // ... 其他配置
})
```

### 4. 推送代码触发自动部署

```bash
git add .
git commit -m "Add GitHub Actions deployment"
git push origin main
```

### 5. 配置 GitHub Pages

1. 打开 GitHub 仓库页面
2. 点击 **Settings** → **Pages**
3. 在 **Source** 选择 **GitHub Actions**
4. 等待 Actions 运行完成（约 2-3 分钟）

### 6. 访问网站

部署成功后，访问：
```
https://你的用户名.github.io/仓库名/
```

例如：
```
https://yourname.github.io/java-fullstack-notes/
```

## 自定义域名（可选）

### 1. 添加 CNAME 文件

```bash
echo "yourdomain.com" > public/CNAME
```

### 2. 配置 DNS

在你的域名服务商处添加：
- **类型**: CNAME
- **主机记录**: www 或 @
- **记录值**: 你的用户名.github.io

### 3. GitHub Pages 设置

1. Settings → Pages → Custom domain
2. 输入你的域名
3. 勾选 **Enforce HTTPS**

## 常见问题

### Q: 部署后样式丢失？
A: 检查 `base` 配置是否正确，必须与仓库名一致。

### Q: Actions 运行失败？
A: 检查 `.github/workflows/deploy.yml` 文件是否存在。

### Q: 如何更新内容？
A: 直接推送修改到 main 分支，会自动重新部署。

```bash
git add .
git commit -m "Update content"
git push origin main
```

### Q: 如何本地预览构建结果？
A: 运行以下命令：

```bash
npm run docs:build
npx vitepress preview
```

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run docs:dev

# 构建生产版本
npm run docs:build

# 预览生产版本
npm run docs:preview
```

## 部署流程图

```
推送代码到 main 分支
    ↓
GitHub Actions 自动触发
    ↓
安装依赖 (npm ci)
    ↓
构建 VitePress (npm run docs:build)
    ↓
上传到 GitHub Pages
    ↓
网站自动更新
```

## 注意事项

1. ✅ 仓库必须是 **Public**（公开）才能免费使用 GitHub Pages
2. ✅ 每次推送到 main 分支会自动重新部署
3. ✅ GitHub Pages 支持自定义域名
4. ✅ 自动启用 HTTPS
5. ⚠️ 构建产物在 `.vitepress/dist` 目录
6. ⚠️ 确保 `public` 目录下的静态文件正确

## 其他部署方式

### Vercel（推荐）
1. 登录 https://vercel.com
2. Import Git Repository
3. 自动检测 VitePress，一键部署

### Netlify
1. 登录 https://netlify.com
2. New site from Git
3. 选择仓库，自动部署

### Cloudflare Pages
1. 登录 https://pages.cloudflare.com
2. 连接 GitHub 仓库
3. 自动构建部署

---

**祝你部署顺利！** 🎉
