#!/bin/bash

# Java 全栈知识体系网站 - 本地开发服务器重启脚本

echo "🔄 正在停止旧的开发服务器..."
pkill -f "vitepress"

echo "⏳ 等待进程完全退出..."
sleep 2

echo "🚀 正在启动 VitePress 开发服务器..."
npm run dev
