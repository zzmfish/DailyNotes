---
tags: Linux
---

## <center>网络层</center>

#### IP协议
###### <span style="background-color: orange">traceroute</span>
```bash
#显示路由
traceroute $domain
```

###### <span style="background-color: orange">ip</span>
```bash
#显示 IP 地址
ip addr show
ip addr show $interface
```

###### <span style="background-color: orange">iptables</span>

```bash
# 显示所有端口限制
iptables -L -n
```

## <center>传输层</center>

#### TCP协议
###### <span style="background-color: orange">netstat</span>

* **-l**: 只显示监听端口

* **-n**: 显示数字地址
* **-p**: 显示程序pid和文件名

* **--inet**: 只显示TCP/IP连接

```bash
#查看监听的端口
netstat -lnp --inet

#显示网络统计信息
netstat -s
```

###### <span style="background-color: orange">tcpdump</span>

* **-n**: 显示数字地址
* **-X**: 以16禁止格式显示body

```bash
# ping的来源ip
tcpdump -i $interface icmp and icmp[icmptype]=icmp-echo

# 指定端口
tcpdump port 443
tcpdump src port 1025
tcpdump portrange 21-23

# 指定网络接口
tcpdump -i eth0

# 指定IP
tcpdump host 1.1.1.1
tcpdump src 1.1.1.1
tcpdump dst 1.0.0.1

# 指定网络
tcpdump net 1.2.3.0/24

# IPv6
tcpdump ip6

# 输出到文件
tcpdump port 80 -w capture_file

# 组合
tcpdump -nnvvS src 10.5.2.3 and dst port 3389
tcpdump dst 192.168.0.2 and src net and not icmp
```





## <center>应用层</center>

#### HTTP协议
###### <span style="background-color: orange">curl</span>
```bash
# ~~~~header~~~~
# 只显示header
curl --head $url
curl -I $curl
# header输出到文件
curl -D $file $curl
# 添加header
curl -H "$header: $value" $url

# ~~~~post数据~~~~
curl -d $data $url
curl --data $data $url

# ~~~~跳转~~~~
# 自动跳转
curl -L $url
# 显示跳转地址
curl -Ls -o /dev/null -w %{url_effective} $url
```
###### <span style="background-color: orange">wget</span>
```bash
#断点续传
wget -c $file_url
```

#### DNS协议
###### <span style="background-color: orange">host</span>

```bash
host $domain
```

###### <span style="background-color: orange">nslookup</span>
```bash
nslookup $domain
```

###### <span style="background-color: orange">dig</span>
```bash
dig $domain
```

#### SSH协议

###### <span style="background-color: orange">ssh</span>

* **-R**：反向端口映射
* **-N**：不执行shell
* **-C**：压缩

```bash
# 端口映射
ssh -C -N -L $bind_address:$bind_port:$target_host:$target_hostport $user@$host

# 反向代理：host2:port2 <- - -> localhost <- - ->  ( user1@host1:ssh_port ) - - -port1
ssh -C -N -R $port1:$host2:$port2 $user1@$host1 -p$ssh_port

# ~~无密码登录~~
# 我的电脑
ssh-keygen -t rsa
cat ~/.ssh/id_rsa.pub #Ctrl+C 复制
# 服务器
vi /.ssh/authorized_keys #Ctrl+V 粘贴
chmod 700 ~
chmod 700 ~/.ssh
chmod 600 ~/.ssh/authorized_keys

# 登录日志
/var/log/secure

# 配置端口
echo "Port 7788" >> /etc/ssh/sshd_config

# ~~禁止外网登陆~~
# 修改 /etc/pam.d/sshd（在account行前面新增）
echo "account    required     pam_access.so" >> /etc/pam.d/sshd
# 修改 /etc/security/access.conf
cat >> /etc/security/access.conf <EOF
+ : ALL : 10.0.0.1/8 127.0.0.1/8 LOCAL
- : ALL EXCEPT navi : ALL
EOF
```

###### <span style="background-color: orange">scp</span>

```bash
scp -P $port $local_file $user_name@$host:$remote_path
```

###### <span style="background-color: orange">sshfs</span>

```bash
sshfs -o nonempty -p$port $user_name@$host:  $local_dir
```

###### <span style="background-color: orange">openssl</span>

```bash
# ~~使用密钥对传输加密数据~~
# 创建秘钥
openssl genrsa -out {key_file} 1024
# 创建公钥
openssl rsa -in {key_file} -pubout -out {pub_key_file} 
# 加密和解密
date +%s  | openssl rsautl -encrypt -inkey {pub_key_file} -pubin | openssl rsautl -decrypt -inkey {key_file}
```
