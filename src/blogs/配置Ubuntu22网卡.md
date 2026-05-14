---
title: "配置Ubuntu22网卡"
keywords: "ubuntu,配置网络"
date: 2023-05-19
---

编辑文件
```yaml
# /etc/netplan/00-installer-config.yaml

# DHCP
network:
  ethernets:
    eth0:
      dhcp4: true
  version: 2

# 静态IP
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

应用变更
```bash
netplan apply
```
