---
layout: posts
title: PostgreSQL数据类型
tags: 数据库
---


* 数值类型
  
  * `smallint`: 2 字节
  * `integer`: 4 字节
  * `bigint`: 8 字节
  * `decimal`: 可变长度，用户指定精度
  * `numeric`: 同decimal
  * `real`: 4字节，6位数字精度
  * `double precision`: 8字节，15位数字精度
  * `smallserial`: 2字节自增
  * `serial`: 4字节自增
  * `bigserial`: 8字节自增
  
* `money`: 存储货币量；8字节，小数位数固定

* 字符类型

  * `character varying(n)`, `varchar(n)`: 可变长度，但有限制
  * `character(n)`, `char(n)`: 定长，用空格填充
  * `text`: 无限制可变长度

* `bytea`: 存储二进制字符串

* 日期时间类型（p表示*秒后面保留小数位数*）

  * `timestamp [ ( p ) ]`：日期和时间
  * `timestamp [ ( p ) ] with time zone`: 日期和时间，带时区
  * `date`: 日期
  * `time [ ( p ) ]`: 时间
  * `time [ ( p ) ] with time zone`: 时间，带时区
  * `interval [ fields ] [ (p) ]`: 时间间隔

* `boolean`

* 枚举类型

  ```sql
  CREATE TYPE mood AS ENUM ('sad', 'ok', 'happy');
  ```

* 图形类型

  * `point`
  * `line`
  * `lseg`
  * `box`
  * `path`
  * `polygon`
  * `circle`

* 网络地址类型

  * `cidr`
  * `inet`
  * `macaddr`
  * `macaddr8`

* 比特位字符串（0和1组成）

  * `bit(n)`: 固定长度
  * `varying(n)`: 可变长度

* 全文搜索类型

  * `tsvector`: 经过分词和排重的词汇集合
  * `tsquery`: 要搜索的词汇，支持布尔组合

* `uuid`

* `xml`

* JSON类型

  * `json`
  * `jsonb`: 二进制格式
  * `jsonpath`

* 数组类型

  ```sql
  CREATE TABLE sal_emp (
      name            text,
      pay_by_quarter  integer[],
      schedule        text[][]
  );
  ```

* 复合类型

  ```sql
  CREATE TYPE complex AS (
      r       double precision,
      i       double precision
  );
  ```

* 范围类型

  * `int4range`
  * `int8range`
  * `numrange`
  * `tsrange`
  * `tstzrange`
  * `daterange`

* Domain类型: 有限制条件的基本类型

  ```sql
  CREATE DOMAIN posint AS integer CHECK (VALUE > 0);
  ```
