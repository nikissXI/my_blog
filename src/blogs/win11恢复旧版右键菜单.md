---
title: "win11恢复旧版右键菜单"
category: "运维"
keywords: "win11"
date: 2024-12-25
summary: "win11这B右键菜单，烦死了"
---

<p>命令行<br/><code>reg add "HKCU\Software\Classes\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\InprocServer32" /f /ve</code></p><p><code>taskkill /f /im explorer.exe &amp; start explorer.exe</code></p>