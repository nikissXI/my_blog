---
title: "Linux配置rsa秘钥登陆"
category: "5"
keywords: "rsa,ssh"
date: 2021-06-13
summary: "Linux的ssh连接单使用密码连接安全性较低，如果密码强度弱容易被爆破，使用rsa证书连接能大大提高安全性。"
---

Linux 的 ssh 连接单使用密码连接安全性较低，若密码强度弱，容易被爆破，所以使用 rsa 证书连接会大大提高安全性。

相比密码登陆，rsa 登陆的安全性高很多，重点：**防爆破**。

## 在服务器生成公钥和秘钥

```bash
ssh-keygen -b 1024 -t rsa
```

- `-b` 是加密位数
- `-t` 是类型

然后有三个步骤（你懒的话直接回车三次完事）：

```bash
Enter file in which to save the key (/root/.ssh/id_rsa):
# 第一步是确认文件保存目录，默认是 ~/.ssh，不改直接回车

Enter passphrase (empty for no passphrase):
# 第二步是让你输入口令，可以为空

Enter same passphrase again:
# 第三步是确认口令，第二步空的话继续空
```

## 配置公钥

生成完毕后 `~/.ssh` 文件夹里面就会有 `id_rsa` 和 `id_rsa.pub`，前者是私钥，后者是公钥。私钥存到要远程连接的电脑。

```bash
cat id_rsa.pub >> /root/.ssh/authorized_keys
```

## 编辑 SSH 配置

编辑文件 `/etc/sshd/sshd_config`，修改以下设置：

```
RSAAuthentication yes
PubkeyAuthentication yes
AuthorizedKeysFile .ssh/authorized_keys
```

关闭密码验证：

```
PasswordAuthentication no
```

## 重启 SSH 服务

```bash
systemctl restart ssh.service
```

客户端验证方式选公钥方法，然后选择生成的私钥就可以连接了。
