---
title: "自己做docker镜像"
keywords: "docker"
date: 2023-05-23
---

# 一个简单的Dockerfile
```plaintext
# 使用最新的ubuntu镜像
FROM ubuntu:latest
# 设置时区
ENV TZ "Asia/Shanghai"
# 语言支持
ENV LANG C.UTF-8
# 我要自己做jvm镜像，所以把自己的jvm复制进去
COPY zing-jdk-8.0.372 /jdk
# 配置环境变量
ENV JAVA_HOME /jdk
# 同上
ENV PATH $PATH:$JAVA_HOME/bin
```

# 构建镜像
```bash
# 要与Dockerfile同路径
docker build -t 镜像名字:版本tag .
```
