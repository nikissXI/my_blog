---
title: "ubuntu22.04"
category: "运维"
keywords: "ssh"
date: 2023-05-20
summary: "ssh公钥免密登录"
---

<p>登陆如果发现异常可以看这个日志</p><pre><code class="Bash"><pre>/var/log/auth.log</pre></code></pre><p><br/></p><h2 id="vxrhh">开始正题</h2><p>装新系统死活搞不成，翻文章看到ubuntu是移除了rsa的算法，用这个命令可以看支持的算法</p><pre><code class="Bash"><pre>sudo sshd -T | egrep "pubkey"</pre></code></pre><p>这里选择用ed25519生成</p><pre><code class="Bash"><pre>ssh-keygen -t ed25519</pre></code></pre><p>然后把生成的.pub文件改成authorized_keys</p><p>没.pub的就是私钥，登陆用的</p>