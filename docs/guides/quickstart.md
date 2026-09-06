---
sidebar_position: 1
title: 快速开始
---

# 快速开始

本文介绍如何在本地运行本站，以及如何将站点部署到 GitHub Pages。

## 环境要求

- Node.js **>= 20**
- npm（或 yarn / pnpm / bun）

## 1. 安装依赖

```bash
npm install
```

## 2. 本地开发

```bash
npm run start
```

启动后访问 `http://localhost:3000`，编辑 `docs/` 下的 Markdown 文件即可看到实时热更新。

## 3. 生产构建

```bash
npm run build
```

构建产物输出到 `build/` 目录，为纯静态文件，可托管到任意静态服务器。

```bash
npm run serve
```

在本地以生产模式预览构建结果。

## 4. 部署到 GitHub Pages

本站已配置好 GitHub Actions 自动部署（见 `.github/workflows/deploy.yml`）：

1. 将代码推送到仓库的 `main` 分支；
2. 在 GitHub 仓库 **Settings → Pages → Build and deployment → Source** 中选择 **GitHub Actions**；
3. 每次推送后，工作流会自动构建并发布到 `gh-pages` 分支，站点地址为：

   ```
   https://TechKitPro.github.io/docnote/
   ```

也可以手动部署：

```bash
npm run deploy
```

该命令会构建站点并推送到 `gh-pages` 分支（需提前在环境变量中配置 `GIT_USER`）。

## 5. 常用命令一览

| 命令 | 说明 |
| --- | --- |
| `npm run start` | 本地开发，支持热更新 |
| `npm run build` | 生产构建，输出到 `build/` |
| `npm run serve` | 本地预览生产构建产物 |
| `npm run deploy` | 构建并部署到 GitHub Pages |
| `npm run clear` | 清理构建缓存 |
| `npm run swizzle` | 定制主题组件 |

## 下一步

- 了解 [如何编写文档](./writing-docs)
