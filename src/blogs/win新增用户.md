---
title: "win新增用户"
category: "运维"
keywords: "windows"
date: 2025-08-12
summary: "命令行快速新增用户"
---

<p>新建用户<br/><code>net user username password /add</code><br/>设置权限组<br/><code>net localgroup Administrators username /add</code><br/>密码永不过期<br/><code>Set-LocalUser -Name "username" -PasswordNeverExpires $true</code><br/>禁用默认用户<br/><code>net user Administrator /active:no</code></p>