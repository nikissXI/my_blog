---
title: "ubuntu22修改ssh端口号"
keywords: "ubuntu,ssh"
date: 2023-05-21
---

修改 `/etc/ssh/sshd_config` 中的Port为新的端口号，#去掉

执行 `systemctl restart sshd` 重启ssh服务

**如果ssh端口没修改成功，需要执行以下步骤**

修改 `/lib/systemd/system/ssh.socket` 中的ListenStream为新的端口号

执行 `sudo dpkg-reconfigure openssh-server` 刷新配置，如果弹个菜单直接回车就行

执行 `systemctl daemon-reload` 重载守护进程

执行 `systemctl restart sshd` 重启ssh服务