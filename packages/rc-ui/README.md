## FAQ

`tsconfig.json` 里的 `references` 大概是为了：

- 加载 `tsconfig.node.json` 输出的声明文件
- 业务代码与非业务代码分开构建，提高 build 速度
