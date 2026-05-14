---
title: "AnolisOS8安装wireguard组网"
keywords: "wireguard,AnolisOS"
date: 2025-03-19
---

导入 ELRepo 的 GPG 密钥。
```bash
rpm --import https://www.elrepo.org/RPM-GPG-KEY-elrepo.org
```
安装 ELRepo 的发布文件。
```bash
yum install https://www.elrepo.org/elrepo-release-8.el8.elrepo.noarch.rpm
```
安装 EPEL和 ELRepo 的release包。
```bash
yum -y install epel-release elrepo-release
```
安装 WireGuard 的内核模块和工具。
```bash
yum -y install kmod-wireguard wireguard-tools
```
重启系统，使得新安装的内核模块和配置生效，否则无法使用启用WG隧道。
```bash
reboot
```
将隧道文件（文件后缀.conf，如10.0.0.2.conf）放到 /etc/wireguard/ 文件夹中。
启用WG隧道。
```bash
wg-quick up 10.0.0.2
```
查看WG隧道信息。
```bash
wg show
```
