---
title: "sing-box代理配置"
keywords: "sing-box,代理"
date: 2026-04-06
---


[https://sing-box.bid/wiki/vless.html](https://sing-box.bid/wiki/vless.html)
```json
{
  "log": {
    "level": "info"
  },
  "dns": {
    "servers": [
      {
        "tag": "cfDns",
        "type": "udp",
        "server": "1.1.1.1"
      }
    ],
    "final": "cfDns",
    "strategy": "ipv4_only"
  },
  "inbounds": [
    {
      "tag": "mixed-in",
      "type": "mixed",
      "listen": "0.0.0.0",
      "listen_port": 12345
    }
  ],
  "outbounds": [
    {
      "type": "vless",
      "tag": "vless-out",
      "server": your_server_ip,
      "server_port": your_server_port,
      "uuid": "uuid",
      "flow": "xtls-rprx-vision",
      "tls": {
        "enabled": true,
        "server_name": "www.icloud.com",
        "insecure": true,
        "utls": {
          "enabled": true,
          "fingerprint": "chrome"
        },
        "reality": {
          "enabled": true,
          "public_key": your_public_key,
          "short_id": your_short_id
        }
      }
    }
  ],
  "route": {
    "auto_detect_interface": true,
    "final": "vless-out",
    "rules": [
      {
        "inbound": [
          "mixed-in"
        ],
        "action": "sniff"
      }
    ]
  }
}
```