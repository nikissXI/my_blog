---
title: "自己做docker镜像"
category: "运维"
keywords: "docker"
date: 2023-05-23
---

<p>一个简单的Dockerfile</p><pre><code class="Bash"><xmp># 使用最新的ubuntu镜像rnFROM ubuntu:latestrn# 设置时区rnENV TZ "Asia/Shanghai"rn# 语言支持rnENV LANG C.UTF-8rn# 我要自己做jvm镜像，所以把自己的jvm复制进去rnCOPY zing-jdk-8.0.372 /jdkrn# 配置环境变量rnENV JAVA_HOME /jdkrn# 同上rnENV PATH $PATH:$JAVA_HOME/bin</xmp></code></pre><p>构建镜像（要与Dockerfile同路径）</p><pre><code class="Bash"><xmp>docker build -t 镜像名字:版本tag .</xmp></code></pre>