---
title: "docker设置代理"
category: "5"
keywords: "docker,代理,代理配置"
date: 2023-05-18
summary: "网上大部分教程都是让改 /etc/docker/daemon.json，这没用啊！正确的做法是配置 Docker daemon 的 systemd 环境变量。"
---

## Docker daemon (Docker 守护进程) HTTP 代理配置

在执行 `docker pull` 时，是由守护进程 `dockerd` 来执行的。因此，代理需要配在 dockerd 的环境中。而这个环境，则是受 systemd 所管控的，因此实际是 systemd 的配置。

### 创建配置目录

```bash
sudo mkdir -p /etc/systemd/system/docker.service.d
vi /etc/systemd/system/docker.service.d/http-proxy.conf
```

### 添加代理配置

在 `http-proxy.conf`（可以是任意 `*.conf` 的形式）文件中，添加以下内容：

```ini
[Service]
Environment="HTTP_PROXY=http://账号:密码@服务器:端口"
Environment="HTTPS_PROXY=http://账号:密码@服务器:端口"
Environment="NO_PROXY=localhost,127.0.0.1"
```

### 重启 Docker

```bash
systemctl daemon-reload
systemctl restart docker
```

现在 Docker 就会通过代理服务器来拉取镜像了。
