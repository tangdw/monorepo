## 安装

```bash
# 安装 pnpm 到全局 npm 里
npm i -g pnpm

# 安装 pnpm 到全局 pnpm 里
pnpm i -g pnpm

# 安装
pnpm install

# 如果出现错误 ERR_PNPM_REGISTRIES_MISMATCH 意思要更新源：
pnpm install -g

# 找到全局目录位置
pnpm root -g

# 删除 cli
pnpm rm -g pnpm # 删除全局 pnpm 里的 pnpm
npm rm -g pnpm # 删除全局 npm 里的 pnpm
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

## 项目间的链接引用

由于 `.npmrc` 设置了 `link-workspace-packages=false` 所以只支持 `workspace:` 协议链接工作区间的包

eg: 在 `dumi` 项目添加 `@monorepo/mp-modules` 依赖 `pnpm add @monorepo/mp-modules@workspace:* -w`

## 问题

如果 `.npmrc` 设置 `shamefully-hoist=true` node_modules 将会提升依赖（扁平化安装）
