---
title: "linux磁盘扩容"
keywords: "linux,磁盘扩容"
date: 2026-05-14
---

# 标准分区

**vda剩余的磁盘空间都分配给vda1**
```bash
# 查看分区情况
root@debian:~# lsblk
NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINTS
fd0      2:0    1    4K  0 disk 
sr0     11:0    1 1024M  0 rom  
vda    254:0    0  500G  0 disk 
├─vda1 254:1    0   96G  0 part /
├─vda2 254:2    0    1K  0 part 
└─vda5 254:5    0    4G  0 part [SWAP]
```

```bash
# 如果要保留swap分区，就记下swap的uuid
mkswap /dev/vda5
```

```bash
# 关闭 swap 并注释 fstab
swapoff /dev/vda5
sed -i '/swap/s/^/#/' /etc/fstab
```

```bash
# 使用parted工具
parted /dev/vda

print free          # 查看分区布局
rm 5                # 删除逻辑分区 vda5
rm 2                # 删除扩展分区 vda2

resizepart 1 496G   # 扩充到具体大小
resizepart 1 100%   # 扩充所有可用空间

quit
```

```bash
# 恢复swap分区
parted /dev/vda mkpart primary linux-swap 496GB 500GB
mkswap /dev/vda2
# # 使用旧 UUID 可避免修改 fstab
swaplabel -U 原来的swap_UUID /dev/vda2
```

```bash
# 扩展文件系统
resize2fs /dev/vda1
```

# LVM分区

## 使用 parted 调整分区大小
```bash
parted /dev/vda
(parted) rm 2  # 删除后如果有提示使用中，Ignore就行
(parted) mkpart primary 1G 100%  # 1G是前面分区的空间大小
(parted) quit
```
## 调整物理卷
```bash
pvresize /dev/vda2
```
## 扩展逻辑卷
```bash
lvextend -l +100%FREE /dev/mapper/ao-root
lvextend -l +100%FREE /dev/mapper/ao-home
```
## 扩展文件系统
```bash
# ext4 文件系统
resize2fs /dev/mapper/ao-root # 根路径用这个
resize2fs /dev/mapper/ao-home # 非根路径用这个

# xfs文件系统
xfs_growfs /   # 根路径用这个
xfs_growfs /dev/mapper/ao-home # 非根路径用这个
```
## 验证扩展结果
```bash
lsblk
```

