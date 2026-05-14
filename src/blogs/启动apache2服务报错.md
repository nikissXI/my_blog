---
title: "启动apache2服务报错"
keywords: "apache,linux,环境变量"
date: 2021-06-12
---

因为apache2的变量没有导入系统环境
```plaintext
Config variable ${APACHE_RUN_DIR} is not defined
```

临时方案，仅在当次会话有效
```bash
source /etc/apache2/envvarsrn
#或
rn. /etc/apache2/envvars
```

永久解决方案，将变量写入当前用户的环境变量，每次登陆都有效
```bash
cat /etc/apache2/envvars >> ~/.bashrc
```