# Astro 入门套件：极简版

```sh
pnpm create astro@latest -- --template minimal
```

> 🧑‍🚀 **经验丰富的宇航员？** 删除这个文件，尽情探索吧！

## 🚀 项目结构

在你的 Astro 项目中，你会看到以下文件夹和文件：

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro 会在 `src/pages/` 目录中查找 `.astro` 或 `.md` 文件。每个页面都会根据其文件名暴露为一个路由。

`src/components/` 没什么特别的，但我们喜欢把任何 Astro/React/Vue/Svelte/Preact 组件放在那里。

任何静态资源，如图像，都可以放在 `public/` 目录中。

## 🧞 命令

所有命令都从项目根目录在终端中运行：

| 命令                   | 操作                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | 安装依赖                            |
| `pnpm dev`             | 在 `localhost:4321` 启动本地开发服务器      |
| `pnpm build`           | 将你的生产站点构建到 `./dist/`          |
| `pnpm preview`         | 在部署前本地预览你的构建     |
| `pnpm astro ...`       | 运行 CLI 命令，如 `astro add`、`astro check` |
| `pnpm astro -- --help` | 获取使用 Astro CLI 的帮助                     |

## 👀 想了解更多？

欢迎查看 [我们的文档](https://docs.astro.build) 或加入我们的 [Discord 服务器](https://astro.build/chat)。
