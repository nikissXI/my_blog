---
title: "用Linuxdeploy在安卓手机装Linux"
keywords: "Linuxdeploy,安卓"
date: 2023-02-28
---

**搞这个手机得先root了！**

整这玩意就可以把手机当服务器跑了，还不会影响手机的正常使用，至于用来做什么就看个人了。

# Linux Deploy介绍
Linux Deploy是一款运行在安卓平台上, 获取root权限利用chroot技术安装lxc版linux系统的软件。如果系统安卓版本较旧，可能需要安装busybox添加bin下的命令, 除此之外由于需要使用底层的指令运行脚本, 因此要求有root权限。Linux Deploy支持大部分主流Linux发行版。

# Linuxdeploy安装配置
Linuxdeploy app下载链接，最新版本[2.6.0] - 2020-02-01，停更了  
[https://github.com/meefik/linuxdeploy/releases](https://github.com/meefik/linuxdeploy/releases)

# 系统下载
安装方法有三种，本文只讲内置仓库和rootfs.tar文件安装：
- 在线安装，直接从app内置仓库拉取系统进行安装，安装简单，可以一键安装部署使用，但里面的系统比较旧并且选择少
- rootfs.tar安装（个人推荐），自行下载rootfs.tar文件进行安装，可以下载安装自己想要的系统，流行的Linux发行版都有，下面以下载ubuntu为例：  打开lxc镜像站 [https://mirrors.bfsu.edu.cn/lxc-images/images/](https://mirrors.bfsu.edu.cn/lxc-images/images/) ，搜索ubuntu并打开，选择发行版（如jammy），架构，cloud，选择最新时间的（如果出问题可以试试之前的），点击 rootfs.tar.xz 下载
- Docker安装，还没试过，可以自己试试（手动狗头）

# 运行环境配置
如果安卓版本比较旧或者软件版本较旧可能需要先使用busybox更新linux环境并在这里更新环境变量为busybox安装路径。  
左上角选项 – 设置，把 锁定Wi-Fi、CPU唤醒、联网更新 勾上；开机自启动看自己的需求；telnet和httpd暂时用不到，开不开都行。


# 系统安装
## 在线安装
1. 发行版：自行选择
2. 架构：看你处理器架构，不清楚自己查
3. 发行版本：自行选择，这里显示的都是对应版本的代号，不清楚自己查
4. 源地址：国内源推荐，这里列举两个  
    Debian: http://mirrors.ustc.edu.cn/debian/  
    Ubuntu: https://mirrors.bfsu.edu.cn/ubuntu-ports/
5. 安装类型：镜像文件，目录，分区，RAM(不建议)
6. 安装路径: 这里需要看安装类型确定, 这里给出三种:  
    - 镜像安装，就是系统镜像的路径，如`${EXTERNAL_STORAGE}/debian.img`，镜像建议分配不小于1024，因为这个镜像大小就是你系统可用空间大小，不够的话可以调，下面会说  
    - 目录，最好选择data目录下的路径如`data/data/debian`, 如果没有该文件夹会自动创建该文件夹，系统可用空间与手机共享  
    - 分区安装，需要设置安装路径。sd卡路径为`/dev/data/block/mmcblk(xpy)`, 其中 x 和 y 是数字。可以通过在本地终端或者adb shell进入终端使用命令`df -ah`查看挂载点, `ls /dev/block/mmcblk*`查看所有mmcblk这样的块设备  
7. 文件系统：ext4
8. 用户名：不要写root就行
9. 用户密码：要我帮你设置吗
10. 特权用户：不要动
11. 本地化：就是语言，如果要中文就选zh_CN.UTF-8，否则就保持C
12. 挂载点：将手机目录挂在载安装的Linux下某个目录,，类似docker的目录映射
13. SSH：如果要用SSH连就勾上
14. 声音服务：随你
15. GUI：看自己需求, 不是很流畅, 建议使用vnc + xfce
16. 回到主界面，点右上角的三个点，点击安装，等到出现 `<<<deploy` 就是安装好了。看看输出的内容有没有出现failed，如果ssh服务failed了，就用telnet或httpd进去安装ssh，进去方法下面会说。
17. 安装完成后请先点击停止卸载容器, 然后再点击开始看到最后出现 `<<<deploy` 并且没有 fail 即成功。此时可以通过 telnet 或者 SSH 登录容器。如果ssh启动失败，看本页下方的《无SSH进入系统》。

</br>

## rootfs.tar安装
1. 发行版：rootfs.tar
2. 源地址：把下载的rootfs.tar文件改名为rootfs.tar，因为下载的文件名不一定叫这个，然后把它放到系统文件管理的根目录，因此这个位置就填${EXTERNAL_STORAGE}/rootfs.tar，你要是想放其他地方或改其他名字这里跟着改
3. 安装类型：镜像文件，目录，分区，RAM(不建议)
4. 安装路径: 这里需要看安装类型确定, 这里给出三种:
    - 镜像安装，就是系统镜像的路径，如`${EXTERNAL_STORAGE}/debian.img`，镜像建议分配不小于1024，因为这个镜像大小就是你系统可用空间大小，不够的话可以调，下面会说。
    - 目录，最好选择data目录下的路径如`/data/debian`, 如果没有该文件夹会自动创建该文件夹，系统可用空间与手机共享。
    - 分区安装，需要设置安装路径。sd卡路径为`/dev/block/mmcblk(xpy)`, 其中 x 和 y 是数字。可以通过在本地终端或者adb shell进入终端使用命令`df -ah`查看挂载点, `ls /dev/block/mmcblk*`查看所有mmcblk这样的块设备
5. 文件系统：ext4
6. 用户名：不要写root就行
7. 用户密码：要我帮你设置吗
8. 特权用户：不要动
9. 本地化：就是语言，如果要中文就选zh_CN.UTF-8，否则就保持C
10. 挂载点：将手机目录挂在载安装的Linux下某个目录,，类似docker的目录映射
11. SSH：这个可以试试勾选，不过99%概率rootfs.tar包里是没有ssh的，因此用不了
12. 声音服务：随你
13. GUI：不要选，因为包里100%没有   
14. 回到主界面，点右上角的三个点，点击安装，等到出现 `<<<deploy` 就是安装好了。看看输出的内容有没有出现failed，没有就可以进行连接了。连接方式看本页《无SSH进入系统》

# 进入手机终端
左上角选项 – 设置，把TELNET或HTTP勾选，哪个方便用哪个，如果是开HTTP，左上角选项 – 终端，就会打开浏览器进去手机终端了。  
进去后输入命令`su`，切换为root再操作


# 无SSH进入系统
```bash
# 进入手机终端后，输入以下命令进入安装的系统
/data/user/0/ru.meefik.linuxdeploy/files/bin/linuxdeploy shell -u root

# 出现 root@localhost:~# 就对了

# Debian系的系统就输入以下命令安装ssh，怎么配置或其他系统自己解决啦
apt install openssh-server

# 然后可以在Linuxdeploy把SSH服务勾上了
```

# 非root的Tab补全无效
软链接bash和sh, 或者网页搜索《切换默认sh为bash》
```bash
ln -sf /bin/bash /bin/sh
```

# 修复apt错误
使用vi修改/etc/passwd中_apt的65535为3003  
再输入 /_apt 再按enter, 再按`i`键变输入模式, 修改65535为3003, 再按ESC键最后`:wq`回车保存即可

# 修复DNS解析错误
```bash
# 删除 resolv.conf
/etc/resolv.conf

# 重新创建resolv.conf并赋予755权限
touch /etc/resolv.conf && chmod 755 /etc/resolv.conf

# 最后停止容器再启动，看看DNS解析能用没，如果还不能用就再操作操作一遍
```

# 改软件源为国内镜像站
北京外国语大学开源软件镜像站，用`ctrl+F`搜对应的系统名关键字就有了  
https://mirrors.bfsu.edu.cn/help/

# 用户无法使用ping
```bash
# root登陆后输入以下命令后重启
usermod -G 3003 root

# 其他的用户将命令里的root改为新创建的用户名即可
```

# Tab补全不好使
```bash
# Debian系的系统就输入以下命令安装补全，其他系统自己解决啦
sudo apt install bash-completion
```

# 系统开机服务自启动
APP右下角设置，把初始化的启用勾上，其他不要动  
然后进系统输入以下命令  
```bash
touch /etc/rc.local && chmod 777 /etc/ rc.local
```
然后在里面写具体的命令就行
```bash
# 比如开机启动cron服务
/etc/init.d/cron start
```

# 手机锁屏后响应变卡
进入手机的终端，输入su进root，然后输入以下命令，可以阻止手机进入低功耗模式
```bash
echo ld > /sys/power/wake_lock
```

# 重启系统
由于系统是在容器里面运行的，类似于docker，所以没法在内部重启的，只能在APP里点停止再启动  
或者用以下命令直接重启手机，Linuxdeploy记得设置 开机自动启动
```bash
unchroot am start -a android.intent.action.REBOOT
```

# 镜像文件（磁盘空间）扩容
由于使用镜像文件方式安装，系统的磁盘空间就是img文件的大小，使用dd命令扩容即可  
先进入手机终端，然后找到img文件的位置，就是安装位置  
如果安装路径是`${EXTERNAL_STORAGE}/debian.img`  
那img文件绝对路径就是`/storage/emulated/0/linux/debian.img`  
可以先用cd命令看看是不是在那个地方  
然后依次输入
```bash
dd if=/dev/zero bs=1048576 count=1000 >> /storage/emulated/0/debian.img
e2fsck -f /storage/emulated/0/kali.img
resize2fs /storage/emulated/0/kali.img
```
上面的代码依次输入完磁盘空间就会增加1G  
可以自己改bs或count的值，查一下dd命令怎么用

# 外网怎么访问
可以在系统里装个frp或nps搞端口映射，或者整vpn组网，方法很多  
这里就不展开了，自己去搜索吧

# 参考文献
[MIUI12 MIUI13rnROOT 小米10安卓10-12均可_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV19S4y1j7Ba/?vd_source=17a331d2470839258ad5b683dc6ab0e0)  
[linux deploy安装指南(升级)_Xin@645的博客-CSDN博客_linux deploy 安装](https://blog.csdn.net/qq_43509120/article/details/121429387)  
[How to speedrnup linux deploy? · Issue](https://github.com/meefik/linuxdeploy/issues/1101)  
[debian | 镜像站使用帮助 | 北京外国语大学开源软件镜像站 |rnBFSU Open Source Mirror](https://mirrors.bfsu.edu.cn/help/debian/)  
[Linux deploy重启的命令_linuxrndeploy 重启_m0_59677938的博客-CSDN博客](https://blog.csdn.net/m0_59677938/article/details/124986115)  
[linux deploy安装kali和磁盘扩容_linuxdeploy安装kali_褪色472的博客-CSDN博客](https://blog.csdn.net/weixin_73464466/article/details/126654730)
