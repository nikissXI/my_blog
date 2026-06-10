---
title: "win新增用户"
keywords: "windows"
date: 2025-08-12
---

```powershell
# 新建用户
net user username password /add

# 以下可选
# 设置权限组
net localgroup Administrators username /add
# 密码永不过期，二选一
Set-LocalUser -Name "username" -PasswordNeverExpires $true
net accounts /maxpwage:unlimited
# 禁用默认用户
net user Administrator /active:no
```