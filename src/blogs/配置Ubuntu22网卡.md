---
title: "配置Ubuntu22网卡"
category: "运维"
keywords: "ubuntu"
date: 2023-05-19
---

<p>编辑/etc/netplan/00-installer-config.yaml文件<br/>#ethernets下面的字段就是网卡名称</p><p>#DHCP</p><pre><code class="Bash"><pre>network:rn  ethernets:rn    eth0:rn      dhcp4: truern  version: 2</pre></code></pre><p>#配置静态IP追加以下内容</p><pre><code class="Bash"><pre>network:rn  ethernets:rn    eth0:rn      dhcp4: falsern      dhcp6: falsern      addresses: rn        - 192.168.0.120/24rn      optional: truern      routes:rn        - to: defaultrn          via: 192.168.0.1rn      nameservers:rn        addresses: rn          - 223.5.5.5rn          - 223.6.6.6rn        search:rn          - localhostrn          - localrn  version: 2rn</pre></code></pre><p>应用</p><pre><code class="Bash"><pre>netplan apply</pre></code></pre>