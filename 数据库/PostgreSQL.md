## 安装
#### 初始化
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

## 数据库操作
###### 查看已经存在的数据库：
```postgresql
\l
```

###### 进入数据库：
```postgresql
\c dbname
```

###### 查看所有表格
```postgresql
\d
```
###### 查看表格信息
```postgresql
\d table_name
```

## SQL命令
#### 表
###### ALTER TABLE
```postgresql
-- 增加列
ALTER TABLE table_name ADD column_name column_type;

--重命名列
ALTER TABLE table_name RENAME COLUMN column_name TO new_name;
```

#### 索引
###### CREATE INDEX
```postgresql
-- 唯一索引
CREATE UNIQUE INDEX index_name
on table_name (column_name);
```