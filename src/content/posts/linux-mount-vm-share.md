---
title: "Linux挂载vm的共享文件夹"
category: "5"
keywords: "vm虚拟机"
date: 2021-06-12
summary: "Linux挂载vm的共享文件夹的方法，通过vmhgfs-fuse命令将共享文件夹挂载到Linux系统中。"
featured: true
---

在正确安装 vmtools 后，去虚拟机设置里面添加共享文件夹，比如挂载文件夹名称是 `share`。

去系统输入命令：

```bash
vmware-hgfsclient
```

得到的名字就是挂载文件夹的名称 `share`。

我要把共享文件夹挂载到 `/mnt/share`，先去 `/mnt` 目录下创建一个文件夹名字叫 `share`。

然后输入命令：

```bash
vmhgfs-fuse .host:/share /mnt/share -o subtype=vmhgfs-fuse,allow_other
```

说明：
- `.host:/` 后面的 `share` 就是挂载文件夹名称
- `/mnt/share` 就是挂载路径

这两个参数需要根据实际情况自行调整。

配置完成后，就可以在 `/mnt/share` 中访问共享文件夹的内容了。
