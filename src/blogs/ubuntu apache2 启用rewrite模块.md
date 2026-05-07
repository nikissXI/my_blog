---
title: "ubuntu apache2 启用rewrite模块"
category: "运维"
keywords: "apache,rewrite模块"
date: 2021-06-21
summary: "Ubuntu下apache2的rewrite模块默认是不加载的。rn只要运行了一下这个命令：a2enmod rewrite就可以启用rewrite模块了。"
---

<p>Ubuntu下apache2的rewrite模块默认是不加载的。<br/>只要运行了一下这个命令：a2enmod rewrite就可以启用rewrite模块了。<br/>启用模块：a2enmod [模块名]<br/>关闭模块：a2dismod [模块名]<br/>或<br/>sudo ln -s /etc/apache2/mods-available/rewrite.load /etc/apache2/mods-enabled/rewrite.load<br/></p><p>启用模块的命令就是在/etc/apache2 /mods-enabled目录下创建模块文件的符号链接。<br/>相反a2dismo则是通过删除符号链接而达到禁用指定模块的功能。</p><p>/etc/apache2/mods-available 放apache可用的模块文件<br/>/etc/apache2/mods-enabled 放apache已启用的模块文件的链接</p>