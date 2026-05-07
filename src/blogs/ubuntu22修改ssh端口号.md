---
title: "ubuntu22修改ssh端口号"
keywords: "ubuntu，ssh"
date: 2023-05-21
---

<p>1、修改 /etc/ssh/sshd_config 中的Port为新的端口号，#去掉</p><p>2、修改 /lib/systemd/system/ssh.socket 中的ListenStream为新的端口号</p><p>3、执行&nbsp;sudo&nbsp;dpkg-reconfigure&nbsp;openssh-server 刷新配置，如果弹个菜单直接回车就行</p><p>4、执行 systemctl daemon-reload 重载守护进程</p><p>5、执行 systemctl restart sshd 重启ssh服务</p><p>完事</p>