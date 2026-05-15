---
title: "编译nginx"
keywords: "nginx,linux"
date: 2026-05-14
---
```bash
# 配置
./configure   --prefix=/etc/nginx   --sbin-path=/usr/local/sbin/nginx   --conf-path=/etc/nginx/nginx.conf   --error-log-path=/var/log/nginx/error.log   --http-log-path=/var/log/nginx/access.log   --with-http_ssl_module   --with-http_v2_module   --with-http_gzip_static_module   --with-http_realip_module   --with-http_sub_module   --with-http_dav_module   --with-http_flv_module   --with-http_mp4_module   --with-http_gunzip_module   --with-http_secure_link_module   --with-http_slice_module   --with-http_stub_status_module   --with-http_perl_module   --with-mail=dynamic   --with-mail_ssl_module   --with-stream=dynamic   --with-stream_ssl_module   --with-pcre   --with-pcre-jit   --with-debug --with-cc-opt='-fPIC' --with-ld-opt='-fPIC'

# 缺少依赖就根据报错问deepseek补

# 编译
make

# 安装
make install
```
