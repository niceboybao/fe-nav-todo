# FE-NAV-TODO CHANGELOG

## manage develops

从 master 拉取对应的 feature 分支，`feature(测试)` -> `develop(多个feature合并测试)` -> `release(避免直接合并到master冲突)` -> `回归测试` -> `打tags并修改版本号(update_version based release)` -> `master(上线)` -> `develop`

> 紧急修复线上问题：基于 master 拉一个 `hotfix_问题` 分支 -> `测试` -> `tags` -> `master(上线)`

> 功能分支合并到 develop 有冲突: 基于 develop 拉取一个 merge 分支 `develop_merge`，将功能分支合并到 `develop_merge`解决冲突后，合并到 `develop`

相关命令行

```shell
npm version major | minor | patch
git push —-tags
```
