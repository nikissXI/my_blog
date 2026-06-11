---
title: "禁用Windows系统更新"
keywords: "Windows"
date: 2026-06-11
---

在系统设置这位置点暂停更新是没有效果的  
![1](/images/md/禁用Windows系统更新/1.png)

直接修改注册表
按 Windows键 + R，输入`regedit`，然后按Enter  
导航到`HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows\WindowsUpdate\AU`  
创建一个名为`NoAutoUpdate`的`DWORD（32位）`值并将其设置为`1`
![2](/images/md/禁用Windows系统更新/2.png)  

在系统设置的更新界面，可以看到已经禁用更新  
![3](/images/md/禁用Windows系统更新/3.png)