---
tags: Linux
---



## 其他

```bash
# 显示安装的字体
fc-list

#时间戳转日期
date -d @1604685638
```

<center>🍋🍋🍋</center>



## 软件

| 名称          | 安装方式    | 描述                           |
| ------------- | ----------- | ------------------------------ |
| inotify-tools | apt install | inotify工具包（inotifywait等） |
| Terminator    |             |                                |
| Monaco 字体   |             |                                |
| gThumb        |             | 图片浏览、编辑；支持webp       |

<center>🍋🍋🍋</center>

## 其他

#### 💻Ubuntu 16.04 Destop Sharing禁用加密

1、安装dconf Editor，然后启动

```bash
sudo apt install dconf-editor
```

2、跳转到 `org -> gnome -> desktop -> remote-access`

3、取消 `require-encryption` 选项

#### 💻生成core dump文件

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



## 参考

* [Unity Launchers And Desktop Files](https://help.ubuntu.com/community/UnityLaunchersAndDesktopFiles)
* [Install GNOME Themes](https://github.com/tliron/install-gnome-themes)

