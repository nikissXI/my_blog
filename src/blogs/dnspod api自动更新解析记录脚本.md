---
title: "dnspod api自动更新解析记录脚本"
keywords: "ddns,dnspod"
date: 2022-11-25
---

如果家里网络有公网IP，但是IP每天都不一样，那么整个DNS服务就很有必要了
下面操作是在Ubuntu下进行

先看一看dnspod api的官方文档 [点击跳转](https://support.dnspod.cn/api/)  

# 第一步
安装jq，用于解析json数据
```bash
sudo apt install jq
```

# 第二步
获取API Token [点击跳转](https://www.dnspod.cn/console/user/security)  
创建后就获得API的ID和Token，因为只显示一次，所以Token的值自己记着

# 第三步
获取域名的ID  
假设API的ID是123456，Token是aabbcc112233，login_token就是123456,aabbcc112233  
然后执行以下命令获取域名ID
```bash
curl 'https://dnsapi.cn/Domain.List' -d 'login_token=123456,aabbcc112233&format=json'
```

# 第四步
获取子域名ID  
假设第三步获取的域名ID是778899，然后执行以下命令获取子域名ID
```bash
curl 'https://dnsapi.cn/Record.List' -d 'login_token=123456,aabbcc112233&format=json&domain_id=778899'
```
假设第四步获取到的子域名ID为  
- a记录的ID是12
- b记录的ID是34
- c记录的ID是56

然后要对这三个子域名解析记录更新IP，脚本如下  
```bash
#!/bin/bash

time=$(date "+%Y-%m-%d %H:%M:%S")
oldIPFile=./oldip.txt
logFile=./updatelog.txt
LOGIN_TOKEN=123456,aabbcc112233
RECORD_ID=12,34,56

function updateIp() {
  result=$(curl -X POST https://dnsapi.cn/Batch.Record.Modify -d "login_token=${LOGIN_TOKEN}&format=json&record_id=${RECORD_ID}&change=record_type&change_to=A&value=${myip}" | jq .status.code)
  code="\"1\""
  if [ "$result" = "$code" ];
   then
       echo "${time} 更新成功 ${myip}" >> $logFile
       echo "$myip" > $oldIPFile 
   else
       echo "更新失败,代码: $result" >> $logFile
       exit 0
  fi
}

myip=$(curl https://ipinfo.io/ 2>> /dev/null | grep '\"ip\"' | awk -F '"' '{print $4}')
echo "当前ip:$myip"

if [ ! -f "$oldIPFile" ]; then
  updateIp
else
  oldip=$(cat $oldIPFile)
  if [ "$myip" = "$oldip" ]; then
    exit 0
  else
    updateIp
  fi
fi
```

# 添加定时任务
假设要每分钟执行一次
```bash
crontab -e
```

```bash
# 假设我脚本放在/home目录下，名字叫dns.sh（记得给脚本x权限）
* * * * * cd /home && bash dns.sh
```
