---
tags: Linux
---



## 文件

#### find

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

#### rsync

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

<center>🍉🍉🍉</center>

## 文本

#### sed

```bash
# 两行合并成一行
sed -n '{N;s/\n/ /;p}' $input_file

# 三行合并成一行
sed -n '{N;N;s/\n/ /g;p}' $input_file

# 日志上色
sed -e "s/.*\[ERR\].*/\x1b[31m&\x1b[0m/" 
```

#### split

```bash
# 按行数拆分文件
split --verbose -d -a 3 -l $line_count $file_name
```

#### cut

```bash
# 每行前3个字符
cut -b 1,2,3 $file_name
```




<center>🍉🍉🍉</center>

## 压缩

#### tar

| 参数                       | 解析                       |
| -------------------------- | -------------------------- |
| --transform                | 目录和文件名转换           |
| --strip-components         | 去掉目录                   |
| -T                         | 指定文件列表               |
| *--ignore-failed-read*     | *忽略读文件错误*           |
| *--show-transformed-names* | *显示转换后的目录和文件名* |


```bash
#压缩同时加上目录
tar cvzf $file_name --transform 's,^,mydir/,' --show-transformed-names $files

#解压同时去掉顶层目录
tar xf $file_name --strip-components 1

# 显示文件列表和大小
tar tvf $file_name
```

#### unzip

```bash
# 显示zip文件列表
unzip -l $file_name
```