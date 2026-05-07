---
title: "Config variable ${APACHE_RUN_DIR} is not defined"
keywords: "apache,环境变量"
date: 2021-06-12
---

<p>这是因为apache2的变量没有导入系统环境</p><p>临时方案：</p><pre><code class="Bash"><xmp>source /etc/apache2/envvarsrn或rn. /etc/apache2/envvars</xmp></code></pre><p>该方法仅在当次会话有效</p><p><br/></p><p>永久解决方案：</p><pre><code class="Bash"><xmp>cat /etc/apache2/envvars >> ~/.bashrc</xmp></code></pre><p>直接将变量写入当前用户的环境变量，每次登陆都有效<br/></p>