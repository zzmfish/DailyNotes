## 设置
安装完毕后，系统会创建一个数据库超级用户 postgres，密码为空。

```bash
sudo -i -u postgres
```

这时使用以下命令进入 postgres，输出以下信息，说明安装成功：
```
~$ psql
psql (9.5.17)
Type "help" for help.

postgres=#
```
为postgres用户设置一个密码。
```
\password postgres
```

输入以下命令退出 PostgreSQL 提示符：
```
\q
```

## 数据库
查看已经存在的数据库：
```
\l
```
进入数据库：
```
\c dbname
```