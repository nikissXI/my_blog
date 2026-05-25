---
title: "华为FC gaussdb数据库异常处理方法"
keywords: "FusionCube"
date: 2026-03-13
---

# 1. 登录FCV备节点
# 2. 切换为gaussdba用户
```bash
su -l gaussdba -s /bin/bash
```
# 3. 重命名zctl.py(防止HA干扰)
```bash
mv ${GSDB_HOME}/bin/zctl.py ${GSDB_HOME}/bin/azctl.py
```
# 4. 确保高斯已经停止
```bash
azctl.py -t kill
```
# 5. 清理残留数据
```bash
rm -f ${GSDB_DATA}/bak_process_file
rm -f ${GSDB_DATA}/archive_log/*
rm -f ${GSDB_DATA}/data/*
```
# 5. 尝试build, 如果成功(会回显success), 转第xx步; 如果失败(回显failed), 继续第6步
```bash
azctl.py -t build
```
# 6. 修改高斯配置, 允许sysdba用户免密登录
```bash
sed -i 's/ENABLE_SYSDBA_LOGIN.*/ENABLE_SYSDBA_LOGIN = TRUE/' ${GSDB_DATA}/cfg/zengine.ini
```
# 7. nomount模式重启高斯
```bash
azctl.py -t kill
azctl.py -t start -m nomount
```
# 8. 用sysdba用户登录, 执行build database; 如果成功, 继续执行后续步骤; 如果失败, 则执行步骤(9,10)恢复环境, 联系高斯维护人员处理.
```bash
zsql / as sysdba -q -c "build database;"
```
# 9. 恢复高斯配置
```bash
sed -i 's/ENABLE_SYSDBA_LOGIN.*/ENABLE_SYSDBA_LOGIN = FALSE/' ${GSDB_DATA}/cfg/zengine.ini
```
# 10. 恢复zctl.py命名
```bash
mv ${GSDB_HOME}/bin/azctl.py ${GSDB_HOME}/bin/zctl.py
```
# 11. 停止高斯, 让HA以open模式拉起高斯
```bash
azctl.py -t kill
```
