---
tags: Linux
---



## DEB 软件

```bash
# 安装
dpkg -i $package_file

# 已安装软件包
dpkg -l
dpkg -l | grep $keyword

# 已安装软件包的文件位置
dpkg -L $package_name
dpkg --listfiles $package_name

# 库中软件信息
apt-cache show $package_name

# 显示版本列表
apt-cache policy $package_name
```

<center>🍉🍉🍉</center>

## RPM软件

```bash
#安装软件包
rpm -i $rpm_file

#显示软件包信息
rpm -qpi $rpm_file

#卸载软件包
rpm -e $package_name

#查找已安装的软件包
rpm -qa  | grep $keyword 

#查看安装的文件
rpm -ql $package_name

#查看软件版本
yum list $package_name —showduplicates
```

<center>🍉🍉🍉</center>

## 用户

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

<center>🍉🍉🍉</center>

## 磁盘

```bash
# 修改磁盘卷标
sudo e2label /dev/sda1 "Data1"

#统计目录大小是多少m
du -sm
```

