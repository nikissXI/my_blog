---
title: "ubuntu26.04LTS配置xrdp"
keywords: "xrdp,ubuntu26"
date: 2026-05-29
---

# 第一步：安装 xrdp 与优化桌面环境

Ubuntu 26.04LTS 默认的 GNOME 桌面与 xrdp 原生兼容性欠佳，直接使用容易出现黑屏。安装**轻量级 XFCE 桌面**是目前最稳定、流畅的方案

1.  更新软件源并安装 xfce 与 xrdp
```bash
sudo apt update
# 安装 XFCE 轻量桌面（约需 2-3 分钟）
sudo apt install xfce4 xfce4-goodies -y
# 安装 xrdp 核心服务与 Xorg 后端驱动
sudo apt install xrdp xorgxrdp -y
```

2.  配置 xrdp 默认使用 XFCE 会话  
创建配置文件，告诉 xrdp 启动时加载 XFCE
```bash
echo "xfce4-session" > ~/.xsession
```

3.  授予 xrdp 用户 SSL 证书访问权限  
这一步对 Ubuntu 20.04 及以上版本（包括 26.04）**至关重要**，否则登录时可能报错。
```bash
sudo adduser xrdp ssl-cert
```

# 第二步：解决黑屏关键——禁用 Wayland

这是最容易被忽略但**必须执行**的一步。新系统默认使用 Wayland 显示服务器，而 xrdp 仅支持 Xorg，不切换必然导致黑屏

编辑 GNOME 显示管理器配置文件
```ini
# /etc/gdm3/custom.conf
[daemon]
AutomaticLoginEnable=true
AutomaticLogin=nikiss
WaylandEnable=false # 有就修改没就追加
```

# 第三步：启动服务与防火墙放行

1.  启动并设置开机自启
```bash
sudo systemctl enable --now xrdp
```

2.  如果启用了防火墙则放行 3389 端口
```bash
sudo ufw allow 3389/tcp
```


# 第四步：连接与验证

1.  重启Ubuntu，确保上述所有配置（尤其是禁用 Wayland）完全生效

2.  Windows 端操作
    - 按下 `Win + R`，输入 `mstsc` 并回车
    - 输入Ubuntu的IP地址，点击“连接”
    - 在登录界面，**Session 选择 "Xorg"**，输入你的 Ubuntu 用户名和密码即可进入桌面
