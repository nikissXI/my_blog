---
title: "docker配置代理"
keywords: "docker"
date: 2023-05-18
---
  
在执行docker pull时，是由守护进程dockerd来执行。因此，代理需要配在dockerd（Docker daemon）。而它是受systemd所管控，需要在systemd配置
```bash
sudo mkdir -p /etc/systemd/system/docker.service.d
vi /etc/systemd/system/docker.service.d/http-proxy.conf
```
在这个http-proxy.conf（可以是任意*.conf的形式）文件中，添加以下内容
```plaintext
[Service]
Environment="HTTP_PROXY=http://账号:密码@服务器:端口"
Environment="HTTPS_PROXY=http://账号:密码@服务器:端口"
Environment="NO_PROXY=localhost,127.0.0.1"
```

然后重启docker
```bash
systemctl restart docker
```

参考文章 http://www.voycn.com/article/dockerdailipeizhixiangjie
