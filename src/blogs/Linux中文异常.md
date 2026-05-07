---
title: "Linux中文异常"
category: "运维"
keywords: "Linux，中文"
date: 2023-05-16
summary: "经常装新系统的时候容易中文出问题，每次还得查文章，干脆自己记录"
---

<p>用这条命令配置语言</p><pre><code class="Bash"><pre>sudo dpkg-reconfigure locales</pre></code></pre><p>我是选en_US.UTF-8和zh_CN.UTF-8，然后OK，系统默认语言选en_US.UTF-8，如果要显示中文就zh_CN.UTF-8</p><p>（下面这个不清楚还需不需要配置）</p><p>/etc/default/locale 文件修改如下</p><pre><code class="Bash"><pre>LANG=en_US.UTF-8rnLANGUAGE="en_US:en"</pre></code></pre>