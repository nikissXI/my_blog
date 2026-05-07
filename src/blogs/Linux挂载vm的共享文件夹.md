---
title: "Linux挂载vm的共享文件夹"
category: "运维"
keywords: "vm虚拟机"
date: 2021-06-12
---

<p>在正确安装vmtools后<br/>去虚拟机设置里面添加共享文件夹，比如挂载文件夹名称是share<br/>去系统输入命令</p><pre><code class="Bash"><pre>vmware-hgfsclient</pre></code></pre><p>得到的名字就是挂载文件夹的名称 share<br/>我要把共享文件夹挂载到/mnt/share<br/>先去/mnt目录下创建一个文件夹名字叫share<br/>然后输入命令</p><pre><code class="Bash"><pre>vmhgfs-fuse .host:/share /mnt/share -o subtype=vmhgfs-fuse,allow_other</pre></code></pre><p>.host:/的share就是挂载文件夹名称<br/>/mnt/share就是挂载路径<br/>这两个东西是变量，看情况自己调整<br/>然后就完事了，塞文件进去看看吧</p>