<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://webrow.se">
    <img alt="webrowse" src="https://static.nicegoodthings.com/project/ext/wb.logo.png" width="60" />
  </a>
</p>
<h1 align="center">
    Webrow.se
</h1>

sync tabs during remote teaching

## 如何发布一篇文章

- `content > blog` 是所有文章的根目录

- 新发布时，先在 `blog` 目录下，新建一个文件夹，如 `hello-world`, 将会生成 `https://webrow.se/blog/hello-world/` 这样的文章地址

- 然后在 `hello-world` 目录下添加一个名叫 `index.md` 的*Markdown 文件*

- 最后就可以在 `index.md` 文件里编写文章了

### `Markdown` 文章简单示例

```markdown
---
title: Hello World
date: "2015-05-01T22:12:03.284Z"
description: "Hello World"
---

This is my first post on my new fake blog! How exciting!
```

> title: 文章的标题
>
> date: 文章的发布日期时间，也可以是这样的形式： `2022-01-16 09:00`
>
> description: 文章的 seo 描述

## 如何在文章里插入图片

- 把需要的图片（如：`img.jpg`），放在当前文章目的录下，如新建的 `hello-world`目录下。
- 在 `index.md` 里引入图片时，图片地址示例：

```markdown
![图片alt](./img.jpg)
```

## 如何查看线上发布的文章

当完成一篇文章时，直接把更改，通过 `git push origin master` 的方式，提交到 `github`, 自动构建

[博客地址](https://webrow.se/blog)
