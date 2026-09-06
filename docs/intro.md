---
sidebar_position: 1
slug: /intro
title: 项目简介
---

# DocNote 简介

**DocNote** 是一个基于 [Docusaurus](https://docusaurus.io/) 构建的轻量级知识库与文档站点。它的目标很简单：**让知识沉淀，让文档发光**。

## 特性

- **纯 Markdown 写作**：所有文档都是 `.md` / `.mdx` 文件，用熟悉的 Markdown 语法即可编写，天然支持代码块、公式、图表。
- **版本化文档**：文档与代码一起管理，历史可追溯，每次变更都有记录。
- **静态站点，开箱即用**：构建产物是纯静态文件，可部署到 GitHub Pages、Vercel、Netlify 或任意静态托管服务。
- **中文优先**：站点默认语言为简体中文，开箱即用。
- **SEO 友好**：自动生成站点地图、结构化元数据，利于搜索引擎收录。

## 快速开始

```bash
# 安装依赖
npm install

# 本地开发（热更新）
npm run start

# 生产构建
npm run build

# 预览构建产物
npm run serve
```

更详细的步骤见 [快速开始](./guides/quickstart)。

## 站点结构

```text
docnote/
├── blog/          # 博客文章（Markdown）
├── docs/          # 文档内容（Markdown/MDX）
├── src/           # 站点源码（首页、组件、样式）
│   ├── components/
│   ├── css/
│   └── pages/
├── static/        # 静态资源（图片、favicon 等）
├── docusaurus.config.js  # 站点主配置
└── sidebars.js    # 文档侧边栏配置
```

## 如何贡献

欢迎通过 Pull Request 提交文档或代码改进。编辑文档时，页面底部的 **编辑本页** 链接会直接指向 GitHub 上的对应文件。

## 更多

- [快速开始](./guides/quickstart)：从零到一部署本站
- [编写文档](./guides/writing-docs)：了解 Markdown 写作规范
- 博客：站点更新日志与使用心得
