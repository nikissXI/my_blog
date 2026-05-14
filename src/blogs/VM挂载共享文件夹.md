---
title: "VM挂载共享文件夹"
keywords: "vmware"
date: 2026-02-06
---

VM版本VM25H2，虚拟机系统Ubuntu24

```bash
# 配置开机启动项
sudo vim /etc/rc.local
# 挂在目录
sudo /usr/bin/vmhgfs-fuse .host:/ /home/nikiss/Desktop/share/ -o allow_other -o uid=10 gid=10 gid=1000 -o umask=022
# 给rc.local添加执行权限
sudosudo chmod +x /etc/rc.local
```