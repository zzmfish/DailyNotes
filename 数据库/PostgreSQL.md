---
tags: 数据库
---

## <center>设置</center>

#### 设置初始密码
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

#### 给当前登录用户分配权限

```bash
sudo -u postgres createuser --superuser $USER
sudo -u postgres createdb $USER
```

#### 允许远程访问

* 编辑文件 `/etc/postgresql/13/main/postgresql.conf`

```bash
listen_addresses = '*'
```

* 编辑文件 `/etc/postgresql/13/main/pg_hba.conf`

```bash
host    all             all             0.0.0.0/0            md5
```

#### 重启防火墙和数据库

```bash
sudo ufw allow 5432/tcp
sudo systemctl restart postgresql
```

## <center>程序</center>

###### psql

进入shell

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

###### pg_dump

```bash
# dump整个库
pg_dump

# dump一个表
pg_dump -t $table_name

# dump一个表的scheme
pg_dump -st $table_name
```



## <center>SQL</center>

#### 用户管理

```sql
# 显示用户名
SELECT rolname FROM pg_roles;
```



#### 数据库

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

#### 表

###### CREATE TABLE

```sql
create table simulation_scenario_log (
  id SERIAL PRIMARY KEY,
  scenario_id bigint not null,
  create_time timestamp not null,
  update_time timestamp not null,
  event_action varchar(100) not null,
  event_target varchar(100) not null,
  event_time timestamp not null
);
```

###### ALTER TABLE

```sql
-- 增加列
ALTER TABLE table_name ADD COLUMN column_name column_type;

-- 重命名列
ALTER TABLE table_name RENAME COLUMN column_name TO new_name;

-- 删除列
ALTER TABLE table_name DROP COLUMN column_name;

-- 添加唯一约束
ALTER TABLE table_name ADD CONSTRAINT constraint_name UNIQUE (column_name);

-- 删除唯一约束
ALTER TABLE table_name DROP CONSTRAINT constraint_name;
```

#### 索引

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

#### 数值

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

#### 字符

###### character varying(n), varchar(n)
###### character(n), char(n)
###### text
###### bytea

#### 日期时间

###### timestamp、timestamp  with time zone
###### time、time with time zone
###### date
###### interval
###### boolean

#### 枚举

```sql
CREATE TYPE mood AS ENUM ('sad', 'ok', 'happy');
```

#### 图形

###### point
###### line
###### lseg
###### box
###### path
###### polygon
###### circle

#### 网络地址

###### cidr
###### inet
###### macaddr
###### macaddr8

#### 比特位字符串

###### bit(n)
###### varying(n)

#### 全文搜索

###### tsvector
###### tsquery

###### uuid
###### xml

#### JSON

###### json
###### jsonb
###### jsonpath

#### 数组

```sql
CREATE TABLE sal_emp (
    name            text,
    pay_by_quarter  integer[],
    schedule        text[][]
);

-- 包含元素: =ANY(...)
select count(*) from simulation_scenario where 'traffic_flow'=any(labels);
```

#### 复合

```sql
CREATE TYPE complex AS (
    r double precision,
    i double precision
);
```

#### 范围

###### int4range
###### int8range
###### numrange
###### tsrange
###### tstzrange
###### daterange

#### Domain

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

