---
tags: Linux
---



#### <center>文件</center>

###### <hm>find</hm>

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

###### <hm> rsync</hm>

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

#### <center>文本</center>

###### <hm> sed</hm>

```bash
# 两行合并成一行
sed -n '{N;s/\n/ /;p}' $input_file

# 三行合并成一行
sed -n '{N;N;s/\n/ /g;p}' $input_file

# 日志上色
sed -e "s/.*\[ERR\].*/\x1b[31m&\x1b[0m/" 
```

<hm>awk</hm>

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



###### <hm>split<hm>

```bash
# 按行数拆分文件
split --verbose -d -a 3 -l $line_count $file_name
```

###### <hm>cut</hm>

```bash
# 每行前3个字符
cut -b 1,2,3 $file_name
```

#### <center>压缩</center>

###### <hm>tar</hm>

* **--transform**：目录和文件名转换
* **--strip-components**：去掉目录
* **-T**：指定文件列表
* ***--ignore-failed-read***：*忽略读文件错误*
* **--show-transformed-names**：*显示转换后的目录和文件名*


```bash
#压缩同时加上目录
tar cvzf $file_name --transform 's,^,mydir/,' --show-transformed-names $files

#解压同时去掉顶层目录
tar xf $file_name --strip-components 1

# 显示文件列表和大小
tar tvf $file_name
```

###### <hm>unzip</hm>

```bash
# 显示zip文件列表
unzip -l $file_name
```