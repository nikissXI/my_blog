---
title: "win11的smb无法访问"
category: "运维"
keywords: "smb"
date: 2024-08-03
summary: "win11的24H2版本更新了关于smb的安全策略，导致无法使用访问没有密码的smb网盘"
---

<p>打开组策略 win+R   gpedit.msc<br/><br/>在“本地计算机策略 &gt; 计算机配置 &gt; 管理模板 &gt; 网络 &gt; Lanman 工作站”中启用“启用不安全的来宾登录”</p><p><br/></p><p>打开管理员命令行powershell<br/>Set-SmbClientConfiguration -RequireSecuritySignature $false<br/>选A回车<br/>Set-SmbServerConfiguration -RequireSecuritySignature $false<br/>选A回车</p>