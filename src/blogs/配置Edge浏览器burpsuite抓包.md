---
title: "配置Edge浏览器burpsuite抓包"
keywords: "edge,burpsuite,抓包"
date: 2021-07-28
---

打开bp，拦截打开  
![1](/images/md/配置Edge浏览器burpsuite抓包/1.jpeg)

然后去option，监听一般默认就行
![2](/images/md/配置Edge浏览器burpsuite抓包/2.jpeg)

（可选）打开Edge，去装个代理插件。试了好几个代理切换的插件，个人感觉就这个最好用了  
[proxy-switchyomega](https://microsoftedge.microsoft.com/addons/detail/proxy-switchyomega-3-zer/dmaldhchmoafliphkijbfhaomcgglmgd)

安装好之后，进去插件设置界面，操作完记得点保存  
![3](/images/md/配置Edge浏览器burpsuite抓包/3.jpeg)
![4](/images/md/配置Edge浏览器burpsuite抓包/4.jpeg)

现在去下载burp的ssl证书  
![5](/images/md/配置Edge浏览器burpsuite抓包/5.jpeg)

然后打开证书管理  
![6](/images/md/配置Edge浏览器burpsuite抓包/6.jpeg)
![7](/images/md/配置Edge浏览器burpsuite抓包/7.jpeg)
![8](/images/md/配置Edge浏览器burpsuite抓包/8.jpeg)
![9](/images/md/配置Edge浏览器burpsuite抓包/9.jpeg)
![10](/images/md/配置Edge浏览器burpsuite抓包/10.jpeg)
![11](/images/md/配置Edge浏览器burpsuite抓包/11.jpeg)
能抓到百度的包了  
![12](/images/md/配置Edge浏览器burpsuite抓包/12.jpeg)
