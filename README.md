## 安装

```bash
npm i -g pnpm
pnpm install
```

## shared

共享配置、脚本、工具包（基于 `vite` 构建）等

开发 `pnpm run start --filter shared`

构建 `pnpm run build --filter shared`

## mp-modules

react UI 组件库

构建 `pnpm run build --filter mp-modules`

开发只需启动文档项目，在文档里引用 `@monorepo/mp-modules` 进行预览测试

## docs

文档开发 `pnpm run docs:start -w`

文档构建 `pnpm run docs:build -w`

## 项目间的引用

eg: 在 `dumi` 项目添加 `@monorepo/mp-modules` 依赖

`pnpm add @monorepo/mp-modules@workspace:* -w`
