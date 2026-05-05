---
title: "PVE部署教程及踩坑指南（v7.4）"
category: "1"
keywords: "PVE,虚拟化,Proxmox"
date: 2023-05-15
summary: "把服务器虚拟化，使硬件利用率最大化。PVE（Proxmox Virtual Environment）部署教程及常见踩坑记录。"
---

## PVE 安装镜像下载

从 [Proxmox 官网](https://www.proxmox.com/en/downloads) 下载安装镜像，安装过程比较简单，不再赘述。

## 把登录的订阅弹框去掉

使用该命令：

```bash
sed -i.backup -z "s/res === null || res === undefined || \!res || res\\n\\t\\t\\t.data.status.toLowerCase() \!== 'active'/false/g" /usr/share/javascript/proxmox-widget-toolkit/proxmoxlib.js && systemctl restart pveproxy.service
```

## LXC 容器里面跑 Docker

需要在 `/etc/pve/lxc/` 的对应 conf 文件追加：

```
lxc.apparmor.profile: unconfined
lxc.cap.drop:
```

## 安装 Windows 的坑

如果安装 Windows 系统需要准备驱动包：
- 下载链接：https://fedorapeople.org/groups/virt/virtio-win/direct-downloads/stable-virtio/virtio-win.iso

安装时找不到硬盘，加多一个 CD 驱动器，把驱动包 iso 加载，选择 `vioscsi` 文件夹中对应的架构，加载驱动后就可以看到硬盘了。

进系统后会发现找不到网卡，运行 `virtio-win-gt-x64.msi` 安装驱动就行。

## 更换 PVE 的 apt、pve 和 lxc 源

建议更换国内镜像源以提高下载速度，具体操作参考官方文档。
