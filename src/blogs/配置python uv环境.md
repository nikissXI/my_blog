---
title: "配置python uv环境"
keywords: "python,uv环境"
date: 2026-06-01
---

[uv官方文档](https://uv.doczh.com/getting-started/installation/)

如果没代理官方安装命令大概率用不了，我建议是去uv的github仓库下载二进制包自己手动配置，下面是手动配置的步骤

# Windows
把下载的uv文件（一般是3个文件）放到路径`C:\Users\用户名\.local\bin`，如果路径不存在，需要手动创建，并在环境变量Path增加`C:\Users\用户名\.local\bin`

增加2个环境变量，镜像站地址
|变量名|变量值|
|--|--|
|UV_DEFAULT_INDEX|https://pypi.tuna.tsinghua.edu.cn/simple|
|UV_PYTHON_INSTALL_MIRROR|https://gh-proxy.com/https://github.com/astral-sh/python-build-standalone/releases/download|

# Linux
把下载的uv文件（一般是2个文件）放到路径`/usr/local/bin`

```plaintext
# 在~/.bashrc追加镜像站地址
export UV_PYTHON_INSTALL_MIRROR="https://gh-proxy.com/https://github.com/astral-sh/python-build-standalone/releases/download"
export UV_DEFAULT_INDEX="https://pypi.tuna.tsinghua.edu.cn/simple"
```