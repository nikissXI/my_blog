---
title: "win11无法访问无密码smb"
keywords: "smb"
date: 2024-08-03
---

打开组策略 `win+R`，输入 `gpedit.msc`

在“本地计算机策略 > 计算机配置 > 管理模板 > 网络 > Lanman 工作站”中启用“启用不安全的来宾登录”

打开管理员命令行powershell
```powershell
Set-SmbClientConfiguration -RequireSecuritySignature $false
# 选A回车
Set-SmbServerConfiguration -RequireSecuritySignature $false
# 选A回车
```
