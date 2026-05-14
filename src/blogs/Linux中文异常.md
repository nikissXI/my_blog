---
title: "Linux中文异常"
keywords: "linux"
date: 2023-05-16
---

用这条命令配置语言
```bash
sudo dpkg-reconfigure locales
```
我是选en_US.UTF-8和zh_CN.UTF-8，然后OK，系统默认语言选en_US.UTF-8，如果要显示中文就zh_CN.UTF-8

（下面这个不清楚还需不需要配置）

`/etc/default/locale`文件修改如下
```plaintext
LANG=en_US.UTF-8
LANGUAGE="en_US:en"
```