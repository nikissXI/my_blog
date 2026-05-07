---
title: "AnolisOS8安装wireguard组网"
category: "运维"
keywords: "wireguard AnolisOS"
date: 2025-03-19
summary: "阿里的龙蜥操作系统安装wg"
---

<div><p>导入 ELRepo 的 GPG 密钥。<br/></p><pre><code class="Bash"><xmp>rpm --import https://www.elrepo.org/RPM-GPG-KEY-elrepo.org</xmp></code></pre><p>安装 ELRepo 的发布文件。<br/></p><pre><code class="Bash"><xmp>yum install https://www.elrepo.org/elrepo-release-8.el8.elrepo.noarch.rpm</xmp></code></pre><p>安装 EPEL和 ELRepo 的release包。<br/></p><pre><code class="Bash"><xmp>yum -y install epel-release elrepo-release</xmp></code></pre><p>安装 WireGuard 的内核模块和工具。<br/></p><pre><code class="Bash"><xmp>yum -y install kmod-wireguard wireguard-tools</xmp></code></pre><p>重启系统，使得新安装的内核模块和配置生效，否则无法使用启用WG隧道。<br/></p><pre><code class="Bash"><xmp>reboot</xmp></code></pre><p>将隧道文件（文件后缀.conf，如10.0.0.2.conf）放到&nbsp;/etc/wireguard/&nbsp;文件夹中。<br/>启用WG隧道。<br/></p><pre><code class="Bash"><xmp>wg-quick up 10.0.0.2</xmp></code></pre><p>查看WG隧道信息。<br/></p><pre><code class="Bash"><xmp>wg</xmp></code></pre></div>