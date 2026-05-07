---
title: "VM挂载共享文件夹"
category: "技术杂谈"
keywords: "vm vmware"
date: 2026-02-06
---

<p>sudo vim /etc/rc.local</p><p>sudo /usr/bin/vmhgfs-fuse .host:/ /home/nikiss/Desktop/share/ -o allow_other -o uid=1000 -o gid=1000 -o umask=022</p><p>sudo chmod +x /etc/rc.local</p>