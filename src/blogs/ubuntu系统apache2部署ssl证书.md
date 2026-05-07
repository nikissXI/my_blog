---
title: "ubuntu系统apache2部署ssl证书"
category: "运维"
keywords: "ubuntu,apache2,ssl,https"
date: 2021-06-22
summary: "部署ssl并配置伪静态强制301重定向到https的www域名"
---

<p>部署方法<a href="https://help.aliyun.com/document_detail/102450.htm" target="_blank">https://help.aliyun.com/document_detail/102450.htm<br/></a></p><p>强制跳转到https和带www域名<br/></p><p>.htaccess文件添加以下内容<br/></p><pre><code class="Bash"><pre>RewriteEngine OnrnRewriteCond %{SERVER_PORT} 80rnRewriteRule ^(.*)$ https://www.gaofenzi.org/$1 [R=301,L]rnRewriteCond %{HTTP_HOST} ^gaofenzi.org [NC]rnRewriteRule ^(.*)$ https://www.gaofenzi.org/$1 [L,R=301]</pre></code></pre>