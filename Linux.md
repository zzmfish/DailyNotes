---
tags: Linux
---



<center>文件管理</center>

* find

```bash
# 修改时间 < 24h（不到1天）
find -mtime 0
find -mtime -1

# 24h <= 修改时间 < 48h（1天不到2天）
find -mtime 1

# 修改时间 >= 48h
find -mtime +1

# 修改时间 < 30min
find -cmin -30

# 大小为0
find -size 0

# 小于10k
find -size -10k

# 空目录
find -type d -empty

# 断开的符号链接
find -type l -! -exec test -e {} \; -print
```

* sed

```bash
# 两行合并成一行
sed -n '{N;s/\n/ /;p}' $input_file

# 三行合并成一行
sed -n '{N;N;s/\n/ /g;p}' $input_file

# 日志上色
sed -e "s/.*\[ERR\].*/\x1b[31m&\x1b[0m/" 
```

* awk

```bash
# 显示/etc/passwd的账户
awk -F ':' '{print $1}' /etc/passwd

# 搜索/etc/passwd有root的所有行，并显示对应的shell
awk -F: '/root/{print $7}' /etc/passwd

# 使用printf
awk  -F ':' '{printf("filename:%10s,linenumber:%s,columns:%s,linecontent:%s\n", FILENAME, NR, NF, $0)}' /etc/passwd

# 统计/etc/passwd的账户人数（变量没有初始化默认为0）
awk '{count++;print $0;} END{print "user count is ", count}' /etc/passwd

# 统计文件占用的字节数（以M为单位）
ls -l | awk 'BEGIN {size=0;} {size=size+$5;} END{print "size is ", size/1024/1024,"M"}'

# 统计文件占用的字节数，过滤4096大小的文件（一般都是文件夹）
ls -l |awk 'BEGIN {size=0} {if($5!=4096){size=size+$5;}} END{print "size is ", size/1024/1024,"M"}' 
```



* split

```bash
# 按行数拆分文件
split --verbose -d -a 3 -l $line_count $file_name
```

* cut

```bash
# 每行前3个字符
cut -b 1,2,3 $file_name
```

* tar
	* --transform：目录和文件名转换
	* --strip-components：去掉目录
	* -T：指定文件列表
	* --ignore-failed-read：忽略读文件错误
	* --show-transformed-names：显示转换后的目录和文件名


```bash
#压缩同时加上目录
tar cvzf $file_name --transform 's,^,mydir/,' --show-transformed-names $files

#解压同时去掉顶层目录
tar xf $file_name --strip-components 1

# 显示文件列表和大小
tar tvf $file_name
```

* unzip

```bash
# 显示zip文件列表
unzip -l $file_name
```
* flock

```bash
 flock -n -x $file_name -x 'echo 1'
```



<center>系统管理</center>

#### 磁盘

* e2label

```bash
# 修改磁盘卷标
sudo e2label /dev/sda1 "Data1"
```

* du

```bash
#统计目录大小是多少m
du -sm
```

* 用户

```bash
#添加用户：-m创建家目录 -s设置shell
useradd -m -s /bin/bash $user_name

#加入到组
usermod -aG $group_name $user_name

#重新登录（groups生效）
su - $USER

#设置sudo权限
echo "$user_name ALL=(ALL) ALL" >  /etc/sudoers.d/$user_name

#重设root密码
passwd root

#删除用户
userdel $user_name
```

#### Ubuntu

* dpkg

```bash
# 安装
dpkg -i $package_file

# 安装到指定位置
dpkg -i $package_file --instdir=$install_dir

# 已安装软件包
dpkg -l
dpkg -l | grep $keyword

# 已安装软件包的文件位置
dpkg -L $package_name
dpkg --listfiles $package_name
```

* apkg-deb

```bash
# 列出deb包含的文件
dpkg-deb -c $deb_file

# 解压deb包含的文件
dpkg-deb -x $deb_file $dest_dir
```

* apt-get

```bash
# 清理缓存
apt-get clean
```



* apt-cache

```bash
# 库中软件信息
apt-cache show $package_name

# 显示版本列表
apt-cache policy $package_name
```

#### CentOS

```bash
#安装软件包
rpm -i $rpm_file

#显示软件包信息
rpm -qpi $rpm_file

#卸载软件包
rpm -e $package_name

#查找已安装的软件包
rpm -qa  | grep $keyword 

#查看安装的文件
rpm -ql $package_name

#查看软件版本
yum list $package_name —showduplicates
```

<center>进程管理</center>

* ps

```bash
# 显示进程的子孙进程
ps --ppid $ppid

# 显示的字段
ps -o comm,pid,ppid,vsize,rss,state

# 子进程
ps --ppid $ppid
```

* crontab

```bash
# 添加crontab
crontab -l | { cat; echo "0 * * * * mycommand"; } | crontab -
```

* systemctl

```bash
# 搜索nginx服务
systemctl list-units '*nginx*'

# 列出全部服务
systemctl --type=service

# 显示服务状态
systemctl status $service_name
```

<center>调试与分析</center>
* core 文件

```bash
# 检查core文件大小限制
ulimit -a | grep 'core'

# 设置core文件大小限制
# 不限制
ulimit -c unlimited
# 限制大小为1024
ulimit -c 1024
# 限制大小为0，即不输出core文件
ulimit -c 0

# 设置core dump文件的输出路径
echo "/tmp/cores/core.%p" > /proc/sys/kernel/core_pattern
```

<center>网络应用</center>

#### IP协议

* traceroute

```bash
#显示路由
traceroute $domain
```

* ip

```bash
#显示 IP 地址
ip addr show
ip addr show $interface
```

* iptables

```bash
# 显示所有端口限制
iptables -L -n
```

#### TCP协议

* netstat
	* -l: 只显示监听端口
	* -n: 显示数字地址
	* -p: 显示程序pid和文件名
	* --inet: 只显示TCP/IP连接

```bash
#查看监听的端口
netstat -lnp --inet

#显示网络统计信息
netstat -s
```

* tcpdump
	* -n: 显示数字地址
	* -X: 以16禁止格式显示body

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

#### HTTP协议

* curl

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

* wget

```bash
#断点续传
wget -c $file_url
```

#### DNS协议

* host

```bash
host $domain
```

* nslookup

```bash
nslookup $domain
```

* dig

```bash
dig $domain
```

#### SSH协议

* ssh
	* -R：反向端口映射
	* -N：不执行shell
	* -C：压缩

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

* scp

```bash
scp -P $port $local_file $user_name@$host:$remote_path
```

* sshfs

```bash
sshfs -o nonempty -p$port $user_name@$host:  $local_dir
```

* openssl

```bash
# ~~使用密钥对传输加密数据~~
# 创建秘钥
openssl genrsa -out {key_file} 1024
# 创建公钥
openssl rsa -in {key_file} -pubout -out {pub_key_file} 
# 加密和解密
date +%s  | openssl rsautl -encrypt -inkey {pub_key_file} -pubin | openssl rsautl -decrypt -inkey {key_file}
```

* rsync

```bash
# 通过ssh同步
# -l：保留符号链接
# --delete：删除目标目录多余的文件
rsync -zvre "ssh -p $ssh_port" \
    -l \
    --exclude=$exclude_dir \
    $local_dir \
    $remote_user@$rename_host:$remote_dir
```

<center>其他</center>

* 其他命令

```bash
# 显示安装的字体
fc-list

#时间戳转日期
date -d @1604685638
```

* 常用软件

| 名称          | 安装方式    | 描述                           |
| ------------- | ----------- | ------------------------------ |
| inotify-tools | apt install | inotify工具包（inotifywait等） |
| Terminator    |             |                                |
| Monaco 字体   |             |                                |
| gThumb        |             | 图片浏览、编辑；支持webp       |

* Ubuntu 16.04 Destop Sharing禁用加密

1、安装dconf Editor，然后启动

```bash
sudo apt install dconf-editor
```

2、跳转到 `org -> gnome -> desktop -> remote-access`

3、取消 `require-encryption` 选项

<center>参考</center>

* [Unity Launchers And Desktop Files](https://help.ubuntu.com/community/UnityLaunchersAndDesktopFiles)
* [Install GNOME Themes](https://github.com/tliron/install-gnome-themes)
