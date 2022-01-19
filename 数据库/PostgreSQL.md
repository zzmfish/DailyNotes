---
tags: 数据库
---

## <center>架构</center>

![](http://zhouzm.cn/DailyNotes/assets/images/PostgreSQL.png)

## <center>设置</center>

#### <font color="orange">➢</font> 设置初始密码
```bash
# 切换用户 postgres
sudo -i -u postgres

# 进入 shell
psql

# 设置密码
\password postgres

# 退出
\q
exit
```

#### <font color="orange">➢</font> 给当前登录用户分配权限

```bash
sudo -u postgres createuser --superuser $USER
sudo -u postgres createdb $USER
```

#### <font color="orange">➢</font> 允许远程访问

* 编辑文件 `/etc/postgresql/13/main/postgresql.conf`

```bash
listen_addresses = '*'
```

* 编辑文件 `/etc/postgresql/13/main/pg_hba.conf`

```bash
host    all             all             0.0.0.0/0            md5
```

#### <font color="orange">➢</font> 重启防火墙和数据库

```bash
sudo ufw allow 5432/tcp
sudo systemctl restart postgresql
```

## <center>Shell</center>

```bash
# 查看数据库列表
\l

# 进入数据库
\c dbname

# 查看所有表
\d

# 查看表信息
\d table_name
```

## <center>SQL</center>

#### <font color="orange">➢</font> 用户管理

```sql
# 显示用户名
SELECT rolname FROM pg_roles;
```



#### <font color="orange">➢</font> 数据库

```sql
-- 显示 db 占用的磁盘空间（GB）
SELECT pg_database_size(db_name) / 1024 / 1024 / 1024;

-- 显示所有 table 占用的磁盘空间（GB）
SELECT table_name,
    pg_table_size(quote_ident(table_name)) / 1024 / 1024 / 1024
FROM information_schema.tables
WHERE table_schema = 'public'
ORDER BY 2;
```

#### <font color="orange">➢</font> 表

###### ALTER TABLE

```sql
-- 增加列
ALTER TABLE table_name ADD COLUMN column_name column_type;

-- 重命名列
ALTER TABLE table_name RENAME COLUMN column_name TO new_name;

-- 删除列
ALTER TABLE table_name DROP COLUMN column_name;
```

#### <font color="orange">➢</font> 索引

###### CREATE INDEX

```sql
-- 唯一索引
CREATE UNIQUE INDEX index_name
ON table_name (column_name);

-- 解决插入数据id错误
SELECT setval(
    '"table_name_id_seq"',
    (SELECT max(id) FROM table_name) + 1
);
```

## <center>数据类型</center>

#### <font color="orange">➢</font> 数值

###### smallint

###### integer

###### bigint

###### decimal

###### numeric

###### real

###### double precision

###### smallserial

###### serial

###### bigserial

###### money

#### <font color="orange">➢</font> 字符

###### character varying(n), varchar(n)
###### character(n), char(n)
###### text
###### bytea

#### <font color="orange">➢</font> 日期时间

###### timestamp、timestamp  with time zone
###### time、time with time zone

###### date

###### interval

###### boolean

#### <font color="orange">➢</font> 枚举

```sql
CREATE TYPE mood AS ENUM ('sad', 'ok', 'happy');
```

#### <font color="orange">➢</font> 图形

###### point
###### line
###### lseg
###### box
###### path
###### polygon
###### circle

#### <font color="orange">➢</font> 网络地址

###### cidr
###### inet
###### macaddr
###### macaddr8

#### <font color="orange">➢</font> 比特位字符串

###### bit(n)
###### varying(n)

#### <font color="orange">➢</font> 全文搜索

###### tsvector
###### tsquery

###### uuid
###### xml

#### <font color="orange">➢</font> JSON

###### json
###### jsonb
###### jsonpath

#### <font color="orange">➢</font> 数组

```sql
CREATE TABLE sal_emp (
    name            text,
    pay_by_quarter  integer[],
    schedule        text[][]
);

select count(*) from simulation_scenario where 'traffic_flow'=any(labels);
```

#### <font color="orange">➢</font> 复合

```sql
CREATE TYPE complex AS (
    r       double precision,
    i       double precision
);
```

#### <font color="orange">➢</font> 范围

###### int4range
###### int8range
###### numrange
###### tsrange
###### tstzrange
###### daterange

#### <font color="orange">➢</font> Domain

有限制条件的基本类型

```sql
CREATE DOMAIN posint AS integer CHECK (VALUE > 0);
```

## <center>Python</center>

```python
import psycopg2

conn = psycopg2.connect(host=host, port=port, database=database,
                        user=user, password=password)
```

https://wiki.postgresql.org/wiki/Psycopg2_Tutorial

