---
tags: Linux 
---

#### 常用软件

###### Terminator终端

###### Monaco字体

###### gThumb

图片浏览、编辑；支持webp



#### Ubuntu 16.04 Destop Sharing禁用加密

1、安装dconf Editor，然后启动

```bash
sudo apt install dconf-editor
```

2、跳转到`org -> gnome -> desktop -> remote-access`

3、取消`require-encryption`选项



#### 软件管理

```bash
# 已安装软件包
dpkg -l
dpkg -l | grep $keyword

# 已安装软件包的文件位置
dpkg -L $package_name
dpkg --listfiles $package_name

# 库中软件信息
apt-cache show $package_name
```



#### systemctl

```bash
# 列出全部服务
systemctl --type=service

# 显示服务状态
systemctl status $service_name


```



