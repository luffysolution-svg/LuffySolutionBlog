# LuffySolution Anime Blog

一个基于 Next.js App Router 的二次元个人博客模板，包含文章、杂谈、瞬间、相册、项目、音乐、时间轴、深浅主题与 GitHub Issues 评论。

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![License](https://img.shields.io/badge/license-CC%20BY--NC%204.0-lightgrey)](./LICENSE.md)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fluffysolution-svg%2FLuffySolutionBlog&env=NEXT_PUBLIC_GITHUB_COMMENTS_REPO&envDescription=GitHub%20Issues%20%E8%AF%84%E8%AE%BA%E4%BB%93%E5%BA%93%EF%BC%8C%E6%A0%BC%E5%BC%8F%E4%B8%BA%20owner%2Frepo&project-name=anime-blog&repository-name=anime-blog)

> 这是一个可 Fork、可使用 GitHub Template 创建、可一键部署到 Vercel 的非商业博客模板。首次部署前请先阅读 [个性化指南](./CUSTOMIZE.md)。

## 功能

- 深色动漫视觉主题、背景轮播与响应式布局
- Markdown 文章、杂谈、瞬间和时间轴
- 相册、友链、项目展示与网易云音乐
- Utterances GitHub Issues 评论，无需在前端保存 OAuth 密钥
- Next.js Route Handlers，可选 Gemini 聊天与和风天气接口
- Vercel Git 集成：推送 `main` 后自动重新部署

## 快速开始

环境要求：Node.js 22、npm 10 或更高版本。

```bash
git clone https://github.com/luffysolution-svg/LuffySolutionBlog.git
cd LuffySolutionBlog
npm ci
npm run dev
```

打开 <http://localhost:3000>。提交或部署前运行：

```bash
npm run build
```

## 让它变成你的博客

最主要的配置入口是 [`siteConfig.ts`](./siteConfig.ts)。建议依次完成：

1. 修改站点名称、作者简介、头像、社交账号与背景图。
2. 替换 `public/images` 中的示例素材。
3. 修改 `app/about/about.md` 和 `posts/first.md`。
4. 按需更新 `data/albums.ts`、`data/friends.ts`、`data/projects.ts`。
5. 配置自己的 GitHub 评论仓库。

完整文件清单和操作说明见 [`CUSTOMIZE.md`](./CUSTOMIZE.md)。

## GitHub 评论

评论由 [Utterances](https://utteranc.es/) 提供，数据保存在公开仓库的 Issues 中。

1. 准备一个已启用 Issues 的公开 GitHub 仓库。
2. 为该仓库安装 [Utterances GitHub App](https://github.com/apps/utterances)。
3. 创建 `blog-comment` 标签，或在 `siteConfig.ts` 中更换标签名。
4. 将环境变量 `NEXT_PUBLIC_GITHUB_COMMENTS_REPO` 设置为 `你的用户名/仓库名`。

这个变量是公开配置，不是密钥。Fork 用户必须改成自己的仓库，避免把评论写入模板作者的 Issues。

## 环境变量

复制 `.env.example` 为 `.env.local`，仅填写需要启用的功能：

| 变量 | 是否必需 | 用途 |
| --- | --- | --- |
| `NEXT_PUBLIC_GITHUB_COMMENTS_REPO` | 推荐 | 评论仓库，格式为 `owner/repo` |
| `NEXT_PUBLIC_GITHUB_COMMENTS_LABEL` | 否 | 评论 Issue 标签，默认 `blog-comment` |
| `GEMINI_API_KEY` | 否 | 启用 Gemini 猫咪聊天接口 |
| `QWEATHER_KEY` | 否 | 启用和风天气接口 |

不要提交 `.env.local`、Vercel Token 或任何私密 API Key。

## 部署

### Vercel 一键部署

点击页面顶部的 **Deploy with Vercel**，按提示创建自己的 GitHub 仓库并填写评论仓库变量。Vercel 会自动识别 Next.js。

部署完成后，Vercel 与 GitHub 保持连接：以后向 `main` 推送代码会自动触发生产部署，其他分支和 Pull Request 会生成预览部署。

### 其他 Node.js 平台

```bash
npm ci
npm run build
npm run start
```

运行环境需支持 Node.js 22 和 Next.js Server Functions。纯静态 GitHub Pages 无法运行聊天、天气等 Route Handlers。

## 内容目录

```text
app/                 页面与 Route Handlers
components/          通用组件
posts/               Markdown 文章
chatters/            Markdown 杂谈
moments/             Markdown 瞬间
data/                相册、友链、项目等结构化数据
public/images/       站点图片
siteConfig.ts        全站个性化配置
```

## 致谢与许可证

项目基于 [heiehiehi/XinghuisamaBlogs](https://github.com/heiehiehi/XinghuisamaBlogs) 二次开发，并保留原项目署名。

代码与项目结构采用 [CC BY-NC 4.0](./LICENSE.md)：允许学习、分享和非商业二次修改；公开发布修改版时需保留署名，禁止商业用途。仓库内的图片、音乐封面及第三方素材可能有各自的权利归属，Fork 用户应替换为自己有权公开使用的素材。
