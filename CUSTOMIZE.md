# 个性化与模板使用指南

这份清单面向通过 **Use this template**、Fork 或 Vercel 一键部署创建博客的用户。

## 1. 修改站点身份

打开 `siteConfig.ts`，至少修改：

- `title`、`navTitle`、`navAfter`
- `authorName`、`bio`
- `avatarUrl`、`faviconUrl`
- `social.github`、`social.email`、`social.qq`、`social.wechat`
- `friendLinkApplyFormat`
- `buildDate`

如果不需要某个社交账号，保持空字符串即可。

## 2. 替换图片与主题

- 背景轮播：`public/images/backgrounds`
- 默认文章封面：`public/images/generated/default-post-cover.webp`
- 轮播图片列表：`siteConfig.ts` 中的 `bgImages`
- 主题色：`siteConfig.ts` 中的 `themeColors`
- 全局视觉变量：`app/globals.css`

建议使用 WebP，背景图控制在 500 KB 左右。请只上传你有权公开展示和再分发的素材。

## 3. 修改内容

- 关于页：`app/about/about.md`
- 文章：`posts/*.md`
- 杂谈：`chatters/*.md`
- 瞬间：`moments/*.md`
- 相册：`data/albums.ts`
- 友链：`data/friends.ts`
- 项目：`data/projects.ts`

可以先保留 `posts/first.md` 作为 frontmatter 格式示例。

## 4. 配置评论

评论基于 Utterances：

1. 选择一个公开 GitHub 仓库并启用 Issues。
2. 打开 <https://github.com/apps/utterances>，只授权该仓库。
3. 在仓库中创建标签 `blog-comment`。
4. 在 Vercel 添加：

```text
NEXT_PUBLIC_GITHUB_COMMENTS_REPO=你的用户名/你的仓库
NEXT_PUBLIC_GITHUB_COMMENTS_LABEL=blog-comment
```

也可以直接修改 `siteConfig.ts` 的 `githubComments`。环境变量的优先级更高。

## 5. 可选服务

在本地创建 `.env.local`，或在 Vercel Project Settings → Environment Variables 中添加：

```text
GEMINI_API_KEY=
QWEATHER_KEY=
```

两者都不是基础博客运行的必需项。不要把真实值提交到 Git。

## 6. 部署和更新

推荐使用 Vercel Git 集成：

1. 从模板创建自己的 GitHub 仓库。
2. 在 Vercel 导入该仓库。
3. Framework Preset 选择 Next.js，Root Directory 保持仓库根目录。
4. 添加环境变量并点击 Deploy。

以后更新博客：

```bash
git add <你修改的文件>
git commit -m "update blog"
git push origin main
```

Vercel 会自动构建并发布，无需再次手工创建项目。

## 7. 自定义域名

先在 Vercel 项目中添加域名，再按照 Vercel 给出的最新地址记录配置 DNS。不要预先照抄其他项目的 A 或 CNAME 记录；以你项目的 Domain 配置页面为准。

使用中国大陆解析服务不等于网站已完成 ICP 备案。是否需要备案取决于实际托管区域和当地规定。
