---
title: "配置Edge浏览器BurpSuite HTTPS抓包"
category: "2"
keywords: "burpsuite,https,抓包,edge"
date: 2021-07-28
summary: "火狐浏览器出问题了懒得修，刚好试试新版的Edge，然后要重新配置BurpSuite的HTTPS代理，踩坑记录。"
---

新版 Edge 浏览器性能非常好，完全可以替代 Chrome 进行渗透测试。

## 配置 Burp Suite

打开 Burp Suite，确认拦截开关已打开。

在 Options 中检查监听设置，一般默认即可（127.0.0.1:8080）。

## 安装代理插件

Edge 浏览器可以安装 Chrome 插件，推荐使用 **Proxy SwitchyOmega**：

[Proxy SwitchyOmega 下载链接](https://chrome.google.com/webstore/detail/proxy-switchyomega/padekgcemlokbadohgkifijomclgjgif)

## 配置代理

在插件设置中：

1. 新建情景模式，选择「代理服务器」
2. 代理协议选择 HTTP
3. 代理服务器填写 `127.0.0.1`
4. 代理端口填写 `8080`
5. 保存并应用

## 导入 Burp Suite 证书

1. 浏览器访问 `http://burp`
2. 点击右上角「CA Certificate」下载证书
3. 打开 Edge 的证书管理
4. 将证书导入到「受信任的根证书颁发机构」

配置完成后，Edge 浏览器即可通过 Burp Suite 进行 HTTPS 抓包分析。
