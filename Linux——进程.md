---
tags: Linux
---



## ps

```bash
# 显示进程的子孙进程
ps --ppid $ppid

# 显示的字段
ps -o comm,pid,ppid,vsize,rss,state

# 子进程
ps --ppid $ppid
```
<center>🍋🍋🍋</center>
## crontab

```bash
# 添加crontab
crontab -l | { cat; echo "0 * * * * mycommand"; } | crontab -
```
<center>🍋🍋🍋</center>
## systemctl

```bash
# 列出全部服务
systemctl --type=service

# 显示服务状态
systemctl status $service_name
```

