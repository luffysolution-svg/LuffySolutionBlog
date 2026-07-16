# LuffySolutionBlog

LuffySolution 的个人公开博客，记录代码、思考、灵感与二次元日常。

- 在线网站：[luffysite.top](https://luffysite.top)
- 技术栈：Next.js 16、React 19、TypeScript、Tailwind CSS 4
- 部署：GitHub `main` 分支连接 Vercel 自动部署
- 评论：Utterances GitHub Issues

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![License](https://img.shields.io/badge/license-CC%20BY--NC%204.0-lightgrey)](./LICENSE.md)

## 项目定位

这个仓库是网站 [luffysite.top](https://luffysite.top) 的正式源码，保存我的个人配置、文章、杂谈、瞬间、相册和项目资料。

如果你想基于这套结构创建自己的博客，请使用独立的公开模板仓库：[luffysolution-svg/LSBlogs](https://github.com/luffysolution-svg/LSBlogs)。模板仓库提供通用占位配置和本地可视化管理器，不会把本仓库的个人内容作为默认值。

## 主要内容

```text
app/                 页面与 Route Handlers
components/          通用组件
posts/               Markdown 文章
chatters/            Markdown 杂谈
moments/             Markdown 瞬间
data/                相册、友链与项目数据
public/images/       网站公开图片
siteConfig.ts        LuffySolution 的全站配置
```

网站保留文章、杂谈、瞬间、时间轴、相册、友链、项目展示、网易云音乐、深浅主题以及 GitHub Issues 评论等功能。

## 本地运行

环境要求：Node.js 22、npm 10 或更高版本。

```bash
git clone https://github.com/luffysolution-svg/LuffySolutionBlog.git
cd LuffySolutionBlog
npm ci
npm run dev
```

提交前执行生产构建：

```bash
npm run build
```

## 部署

Vercel 已连接本仓库的 `main` 分支。推送后会自动创建生产部署，正式域名保持为 [luffysite.top](https://luffysite.top)。

评论仓库通过 `NEXT_PUBLIC_GITHUB_COMMENTS_REPO` 配置。Gemini 聊天和和风天气使用可选的服务端环境变量，任何密钥都不应提交到仓库。

## 致谢与许可

本项目基于 [heiehiehi/XinghuisamaBlogs](https://github.com/heiehiehi/XinghuisamaBlogs) 二次开发。感谢原作者提供博客结构与开源基础。

代码与项目结构遵循 [CC BY-NC 4.0](./LICENSE.md)。公开修改版需要保留署名并标明修改，且不得用于商业用途。仓库中的个人文章、图片、音乐封面及第三方素材可能具有各自的权利归属，不因源码公开而自动获得再分发授权。
