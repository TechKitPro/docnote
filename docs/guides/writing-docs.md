---
sidebar_position: 2
title: 编写文档
---

# 编写文档

本站的所有内容都是 Markdown（`.md`）或 MDX（`.mdx`）文件，放置在 `docs/` 目录下。目录结构即侧边栏结构。

## 目录与侧边栏

`docs/` 下的每个文件对应一个文档页，每级目录对应一个侧边栏分类：

```text
docs/
├── intro.md              # 简介（首页）
└── guides/               # 「指南」分类
    ├── _category_.json   # 分类元数据（标签、顺序）
    ├── quickstart.md     # 快速开始
    └── writing-docs.md   # 编写文档（本页）
```

侧边栏默认按**文件名排序**，可通过每个文件顶部的 front matter 控制：

```md
---
sidebar_position: 1   # 侧边栏位置（数字越小越靠前）
title: 自定义标题      # 侧边栏与页面标题
---

```

## 常用 Markdown 语法

```md
# 一级标题
## 二级标题

**加粗**、*斜体*、`行内代码`

- 无序列表
1. 有序列表

> 引用块

[链接文字](https://example.com)

![图片说明](https://example.com/image.png)
```

### 代码块

````md
```js
console.log('Hello DocNote');
```
````

### 折叠块

```md
<details>
  <summary>点击展开</summary>

  这里是被折叠的内容。
</details>
```

### 提示块

```md
:::tip 提示
这是一条提示。
:::

:::note 注意
这是一条注意。
:::

:::warning 警告
这是一条警告。
:::

:::danger 危险
这是一条危险提醒。
:::
```

## MDX：更强大的能力

`.mdx` 文件在 Markdown 之上支持 JSX，可以嵌入 React 组件，实现更丰富的交互。需要引入 Docusaurus 内置组件时，文件名请使用 `.mdx` 后缀。

## 写作规范建议

1. **文件名**：小写字母、连字符分隔（如 `writing-docs.md`）；
2. **标题层级**：一个文件只用一个一级标题，其余用二三级标题；
3. **链接**：站内链接使用相对路径，如 `./quickstart`，避免硬编码完整 URL；
4. **语言**：内容默认简体中文，术语可保留英文原词。

## 预览与提交

- 本地运行 `npm run start` 实时预览；
- 提交后 CI 会自动构建站点，构建失败（如链接损坏）会阻止合并。
