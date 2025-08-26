# 个人简历网站

这是一个使用React和TypeScript构建的个人简历网站，采用了星空主题设计。

## 部署状态

![GitHub Pages](https://github.com/flame4343/my-site/actions/workflows/deploy.yml/badge.svg)

## 部署说明

该项目使用GitHub Actions自动部署到GitHub Pages。部署流程如下：

1. 将代码推送到main分支
2. GitHub Actions会自动运行构建流程
3. 构建产物会部署到gh-pages分支
4. 网站会通过 https://flame4343.github.io/my-site/ 访问

## 本地开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建项目
pnpm build
```