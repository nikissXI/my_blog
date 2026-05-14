---
title: "win11恢复旧版右键菜单"
keywords: "win11"
date: 2024-12-25
---

```powershell
# 修改注册表
reg add "HKCU\Software\Classes\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\InprocServer32" /f /ve

# 重启explorer.exe
taskkill /f /im explorer.exe
start explorer.exe
```