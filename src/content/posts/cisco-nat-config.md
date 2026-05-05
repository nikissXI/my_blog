---
title: "思科路由器动态NAT配置"
category: "3"
keywords: "NAT,思科,路由器"
date: 2021-09-22
summary: "思科路由器的动态NAT配置，包含静态转换和动态NAT池的完整配置步骤。"
---

> PS：记得给目的路由那边配置回程路由

## 配置默认路由

```
ip route 0.0.0.0 0.0.0.0 下一跳
```

## 静态转换（给服务器用的）

```
ip nat inside source static 内网IP 外网IP
```

## 配置NAT地址池

```
ip nat pool poolname 起始IP 终止IP netmask 255.255.255.0
```

## 创建规则

表示内网哪些IP用这个NAT，后面是反掩码：

```
access-list 1 permit 内网IP段 0.0.0.255
```

## 绑定NAT池给规则

```
ip nat inside source list 1 pool poolname
```

## 接口配置

```
内网接口：
int f0/0
ip nat inside

外网接口：
int g0/0
ip nat outside
```

配置完成！
