
#### 算术运算
```bash
echo $(( 10 + 3 ))  #13
```

##### 字符串处理
```bash
# 字符串替换（abc替换成123）
echo ${varname/abc/123}
```

##### 查找文件
```bash

find -mtime 0 -type f  #24小时内修改
find -mtime +0 -type f  #24小时前修改
find -size 0  #大小为0
find -size -10k  #小于10k
find -type d -empty  #空目录
find . -type l -! -exec test -e {} \; -print #断开的符号链接
```


##### 压缩格式
```bash
tar cvzf $TarFile --transform 's,^,mydir/,' --show-transformed-names $Files  #压缩同时加上目录
tar xf <压缩文件> --strip-components 1 #解压同时去掉顶层目录
* 显示tgz文件列表：`tar tf <压缩文件>`
* 显示tgz文件列表和大小：`tar ztvf <压缩文件>`
* 显示zip文件列表：`unzip -l <zip文件>`
```

##### rsync
* ssh端口同步：`rsync -zvr  -e "ssh -p <ssh端口>" <本地目录> <远程ssh用户名>@<远程主机>:<远程目录>`
* rsync端口同步：`rsync -zvr <远程rsync用户名>@<远程主机>::<rsync目录>/<rsync文件> <本地目录>`

##### 其他
```bash
# 按行数拆分文件
split --verbose -d -a 3 -l $LineCount $FileName

# 自动添加crontab
crontab -l | { cat; echo "0 * * * * mycommand"; } | crontab -
```

