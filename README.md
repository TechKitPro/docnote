# DocNote

> 让知识沉淀，让文档发光

基于 [Docusaurus](https://docusaurus.io/) 构建的轻量级知识库与文档站点。

在线地址：<https://TechKitPro.github.io/docnote/>

## 特性

- 纯 Markdown / MDX 写作，天然支持代码块、公式、图表
- 中文优先，开箱即用
- 静态站点，可部署到 GitHub Pages / Vercel / Netlify
- 推送到 `main` 分支后自动构建并发布（GitHub Actions）

## 本地开发

环境要求：Node.js >= 20

```bash
# 安装依赖
npm install

# 本地开发（热更新）
npm run start

# 生产构建（输出到 build/）
npm run build

# 本地预览构建产物
npm run serve
```

## 目录结构

```text
docnote/
├── blog/          # 博客文章
├── docs/          # 文档内容（Markdown/MDX）
├── src/           # 站点源码（首页、组件、样式）
├── static/        # 静态资源
├── .github/workflows/deploy.yml  # GitHub Pages 自动部署
├── docusaurus.config.js          # 站点主配置
└── sidebars.js                   # 文档侧边栏配置
```

## 部署到 GitHub Pages

1. 将代码推送到 `main` 分支；
2. 在 GitHub 仓库 **Settings → Pages → Build and deployment → Source** 中选择 **GitHub Actions**；
3. 之后每次推送都会自动构建并发布，站点地址为 <https://TechKitPro.github.io/docnote/>。

手动部署：

```bash
GIT_USER=<你的GitHub用户名> npm run deploy
```

## 文档

- [项目简介](docs/intro.md)
- [快速开始](docs/guides/quickstart.md)
- [编写文档](docs/guides/writing-docs.md)

## License

待定。
