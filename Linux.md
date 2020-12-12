
#### 算术运算
```bash
echo $(( 10 + 3 ))
```

#### 字符串
```bash
# 字符串替换（abc替换成123）
echo ${variable/abc/123}
```

#### 文本文件
```bash
# 两行合并成一行
sed -n '{N;s/\n/ /;p}' $input_file

# 三行合并成一行
sed -n '{N;N;s/\n/ /g;p}' $input_file

# 按行数拆分文件
split --verbose -d -a 3 -l $line_count $file_name
```

#### 查找文件
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


#### 文件压缩
```bash
#压缩同时加上目录
tar cvzf $file_name --transform 's,^,mydir/,' --show-transformed-names $files

#解压同时去掉顶层目录
tar xf $file_name --strip-components 1

# 显示文件列表和大小
tar tvf $file_name

# 显示zip文件列表
unzip -l $file_name

# 压缩文件
# --ignore-failed-read: 忽略读文件错误
# --transform: 路径变换（加上顶层目录）
# -T: 指定文件列表
tar czvf scenarios20201203.tgz \
    --ignore-failed-read 
    --transform 's@^@scenarios20201203/@' \
    -T file_lis
```

##### rsync
```bash
# 通过ssh同步
rsync -zvre "ssh -p $ssh_port" $local_dir $remote_user@$rename_host:$remote_dir
```

##### 其他
```bash
# 添加crontab
crontab -l | { cat; echo "0 * * * * mycommand"; } | crontab -

# 显示进程的子孙进程
ps --ppid $ppid
```

