---
title: "Ubuntu22配置网卡"
category: "5"
keywords: "ubuntu,网卡,netplan"
date: 2023-05-19
summary: "Ubuntu 22 使用 netplan 配置网卡，包含 DHCP 和静态 IP 两种方式的配置方法。"
---

编辑 `/etc/netplan/00-installer-config.yaml` 文件。`ethernets` 下面的字段就是网卡名称。

## DHCP 配置

```yaml
network:
  ethernets:
    eth0:
      dhcp4: true
  version: 2
```

## 配置静态 IP

追加以下内容：

```yaml
network:
  ethernets:
    eth0:
      dhcp4: false
      dhcp6: false
      addresses:
        - 192.168.0.120/24
      optional: true
      routes:
        - to: default
          via: 192.168.0.1
      nameservers:
        addresses:
          - 223.5.5.5
          - 223.6.6.6
        search:
          - localhost
          - local
  version: 2
```

## 应用配置

```bash
netplan apply
```

配置即刻生效。
