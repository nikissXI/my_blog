---
title: "PVE部署教程及踩坑指南（v7.4）"
keywords: "pve"
date: 2023-05-15
---


# PVE安装镜像下载
https://www.proxmox.com/en/downloads


# 把登录的订阅弹框去掉
```bash
sed -i.backup -z "s/res === null || res === undefined || \!res || res\n\t\t\t.data.status.toLowerCase() \!== 'active'/false/g" /usr/share/javascript/proxmox-widget-toolkit/proxmoxlib.js && systemctl restart pveproxy.service
```

# LXC容器里面跑docker
需要在/etc/pve/lxc/的对应conf文件追加
```plaintext
lxc.apparmor.profile: unconfined
lxc.cap.drop:
```

# 安装Windows的坑
如果安装Windows系统需要准备驱动包，下载链接 https://fedorapeople.org/groups/virt/virtio-win/direct-downloads/stable-virtio/virtio-win.iso  
安装的时候会找不到硬盘，加多一个CD驱动器，把驱动包iso加载，选择vioscsi文件夹中对应的架构，加载驱动后就可以看到硬盘了  
进系统会找不到网卡，运行virtio-win-gt-x64.msi安装驱动就行，还有一个virtio-win-guest-tools.msi也安装上。（好像是跟交互有关系）

# 更换PVE的apt、pve和lxc源
替换前建议先更新下证书，否则可能由于证书不可用导致 https 无法使用，进而无法下载所有软件。
```bash
apt install apt-transport-https ca-certificates
apt看这个 https://mirrors.tuna.tsinghua.edu.cn/help/debian/
```

# pve和lxc（CT Templates）
看这个 https://mirrors.tuna.tsinghua.edu.cn/help/proxmox/

# 更新软件
```bash
apt update && apt upgrade

# 重启PVE服务
systemctl restart pvedaemon.service
```

# 硬件直通
修改文件`/etc/default/grub`
```plaintext
#intel的的CPU修改为 
GRUB_CMDLINE_LINUX_DEFAULT="quiet intel_iommu=on" 

#amd的CPU修改为  
GRUB_CMDLINE_LINUX_DEFAULT="quiet amd_iommu=on"

# 修改后更新grub
update-grub
```

修改内核模块`/etc/modules`，添加这些内核模块进去（直接粘贴进去就好）
```plaintext
vfio
vfio_iommu_type1
vfio_pci
vfio_virqfd
```

# 新增PVE用户
先进PVE的系统使用`useradd <用户名>`增加用户，再到WEB界面增加用户和设置密码，不给系统加用户无法设置密码

参考文章 https://blog.mstg.top/archives/730
