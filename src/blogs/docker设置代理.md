---
title: "docker设置代理"
keywords: "docker"
date: 2023-05-18
---

<h3 id="ysfbo"><font color="#4d80bf">Docker daemon ( Docker 守护进程 ）Http代理配置</font></h3><div><p>在执行docker pull时，是由守护进程dockerd来执行。因此，代理需要配在dockerd的环境中。而这个环境，则是受systemd所管控，因此实际是systemd的配置。</p><pre><code class="Bash"><pre>sudo mkdir -p /etc/systemd/system/docker.service.drnvi /etc/systemd/system/docker.service.d/http-proxy.conf</pre></code></pre></div><div><p>在这个http-proxy.conf（可以是任意*.conf的形式）文件中，添加以下内容：</p></div><div><pre><code class="Bash"><pre>[Service]rnEnvironment="HTTP_PROXY=http://账号:密码@服务器:端口"rnEnvironment="HTTPS_PROXY=http://账号:密码@服务器:端口"rnEnvironment="NO_PROXY=localhost,127.0.0.1"</pre></code></pre></div><div><p>重启 docker</p><pre><code class="Bash"><pre>systemctl restart docker</pre></code></pre></div><div><font color="#000000">参考&nbsp;<a href="http://www.voycn.com/article/dockerdailipeizhixiangjie" target="_blank">http://www.voycn.com/article/dockerdailipeizhixiangjie</a></font></div>