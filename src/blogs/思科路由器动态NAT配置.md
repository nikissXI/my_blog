---
title: "思科路由器动态NAT配置"
category: "路由交换"
keywords: "NAT"
date: 2021-09-22
---

<p>PS：记得给目的路由那边配置回程路由</p><p>配置默认路由<br/>ip route 0.0.0.0 0.0.0.0 下一跳<br/></p><p>静态转换，给服务器用的<br/>ip nat inside source static 内网IP 外网IP<br/></p><p>配置NAT地址池<br/>ip nat pool poolname 起始IP 终止IP netmask 255.255.255.0<br/></p><p>创建规则，表示内网哪些IP用这个NAT，后面是反掩码<br/>access-list 1 permit 内网IP段 0.0.0.255<br/></p><p>绑定NAT池给规则<br/>ip nat inside source list 1 pool poolname<br/></p><p>内网接口<br/>int f0/0<br/>ip nat inside<br/></p><p>外网接口<br/>int g0/0<br/>ip nat outside</p><p><br/></p><p>完事</p>