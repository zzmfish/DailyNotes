---
tags: Linux
---



## TCP 协议

#### netstat

```bash
#查看监听的端口
#-l: 只显示监听端口
#-n: 显示数字地址
#-p: 显示程序pid和文件名
#--inet: 只显示TCP/IP连接
netstat -lnp --inet

#显示协议统计信息
netstat -s
```

#### tcpdump

```bash
#看ping的来源ip
tcpdump -i eth1 icmp and icmp[icmptype]=icmp-echo
```



<center>🍋🍋🍋</center>

## IP 协议
#### host
```bash
host www.baidu.com
```

#### nslookup
```bash
nslookup www.baidu.com
```

#### dig
```bash
dig www.baidu.com
```

#### traceroute
```bash
#显示路由
traceroute www.baidu.com
```

#### ip
```bash
#显示 IP 地址
ip addr show
ip addr show docker0
```



<center>🍋🍋🍋</center>

## HTTP 协议

#### curl
```bash
#只显示header
curl --head $url

#post数据
curl --data $data $url

#添加header
curl -H "$header: $value" $url

#自动跳转
curl -L $url

#显示跳转地址
curl -Ls -o /dev/null -w %{url_effective} $url
```
#### wget
```bash
#断点续传
wget -c $file_url
```

<center>🍋🍋🍋</center>

## SSH

#### 无密码登录

```bash
# 1、我的电脑
ssh-keygen -t rsa
cat ~/.ssh/id_rsa.pub #Ctrl+C 复制

# 2、服务器
vi /.ssh/authorized_keys #Ctrl+V 粘贴
chmod 700 ~
chmod 700 ~/.ssh
chmod 600 ~/.ssh/authorized_keys
```

#### 反向代理

```bash
# 解析：host2:port2 <- - -> localhost <- - ->  ( user1@host1:ssh_port ) - - -port1
# 参数：
# -R：反向端口映射
# -N：不执行shell
# -C：压缩
ssh -C -N -R $port1:$host2:$port2 $user1@$host1 -p$ssh_port
```

#### scp

```bash
scp -P $port $local_file $user_name@$host:$remote_path
```

#### sshfs

```bash
sshfs -o nonempty -p$port $user_name@$host:  $local_dir
```

#### 使用密钥对传输加密数据

```bash
# 创建秘钥
openssl genrsa -out {key_file} 1024
# 创建公钥
openssl rsa -in {key_file} -pubout -out {pub_key_file} 
# 加密和解密
date +%s  | openssl rsautl -encrypt -inkey {pub_key_file} -pubin | openssl rsautl -decrypt -inkey {key_file}
```

### 登录日志

```
/var/log/secure
```

#### 配置端口

/etc/ssh/sshd_config

```
Port 7788
```

#### 禁止外网登陆

/etc/pam.d/sshd的account行前面加：

```
account    required     pam_access.so 
```

/etc/security/access.conf增加

```
+ : ALL : 10.0.0.1/8 127.0.0.1/8 LOCAL
- : ALL EXCEPT navi : ALL
```

<center>🍋🍋🍋</center>

## 安全

```bash
# 显示所有端口限制
iptables -L -n

# 流量监控
dstat -nf
```

