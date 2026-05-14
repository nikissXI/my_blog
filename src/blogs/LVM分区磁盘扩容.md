---
title: "LVM分区磁盘扩容"
keywords: "linux,磁盘扩容,lvm"
date: 2023-11-03
---

### 使用 parted 调整分区大小
```bash
parted /dev/vda
(parted) rm 2  # 删除后如果有提示使用中，Ignore就行
(parted) mkpart primary 1G 100%  # 1G是前面分区的空间大小
(parted) quit
```
### 调整物理卷
```bash
pvresize /dev/vda2
```
### 扩展逻辑卷
```bash
lvextend -l +100%FREE /dev/mapper/ao-root
lvextend -l +100%FREE /dev/mapper/ao-home
```
### 扩展文件系统
```bash
# ext4 文件系统
resize2fs /dev/mapper/ao-root # 根路径用这个
resize2fs /dev/mapper/ao-home # 非根路径用这个

# xfs文件系统
xfs_growfs /   # 根路径用这个
xfs_growfs /dev/mapper/ao-home # 非根路径用这个
```
### 验证扩展结果
```bash
lsblk
```
