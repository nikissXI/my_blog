---
title: "Linux配置公钥登陆"
keywords: "ssh"
date: 2025-11-06
---

Linux的ssh连接单使用密码连接安全性较低，若密码强度弱，容易被爆破，所以使用公钥连接会大大提高安全性

# 生成密钥对
```bash
# -b 是加密位数 -t 是类型 -C 是注释，方便用于区分是哪个公钥
ssh-keygen -b 1024 -t ed25519 -C "root@example.com"
```

然后有三个步骤(你懒的话直接回车三次完事)
```plaintext
# 第一步是确认文件保存目录，默认是~/.ssh，不改直接回车
Enter file in which to save the key (/root/.ssh/id_rsa):

# 第二步是让你输入口令，可以为空
Enter passphrase (empty for no passphrase):

# 第三步是确认口令，第二步空的话继续空
Enter same passphrase again:
```

# 添加公钥到系统
生成完毕后，在`~/.ssh`文件夹里面就会有`id_ed25519`和`id_ed25519.pub`，前者是私钥，后者是公钥，私钥存到要远程连接的电脑

```bash
# 把公钥追加到authorized_keys文件中
cat ~/.ssh/id_ed25519.pub >> /~/.ssh/authorized_keys
```

# 关闭密码登录
编辑文件/etc/sshd/sshd_config
```plaintext
# 把PasswordAuthentication的注释取消，并改为no
PasswordAuthentication no
```

# 重启sshd服务
```bash
systemctl restart sshd
```
