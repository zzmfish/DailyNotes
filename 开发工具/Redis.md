---
tags: 数据库
---

## 命令

#### 运行
```bash
redis-server
redis-server --port 6379
redis-server redis.conf --port 6379
redis-server --bind 0.0.0.0
```

#### 删除一定模式的key
```bash
redis-cli keys beh_sim_* | xargs redis-cli del
```

#### 性能测试

```bash
./redis-benchmark -q -n 100000
```

#### 命令
```
scan 0 count 10  （显示0-10个key）
info keyspace  （显示key的数量）
flushdb  （清空数据库）
keys *  （显示全部key）
```



## 数据类型

#### 列表

* **BLPOP** *key [key ...] timeout*：删除并返回第一个元素

* **BRPOP** *key [key ...] timeout*：删除并返回最后一个元素
  
* **BRPOPLPUSH** *source destination timeout*：删除最后一个，并添加到另一个列表
  
* **BLMOVE** *source destination **LEFT\|RIGHT LEFT\|RIGHT** timeout*：从一个列表弹出元素添加到另一个队列
  
* **LINDEX** `key index`：第index个元素
  
* **LINSERT** *key* **BEFORE\|AFTER** *pivot element*：在一个元素前/后插入
  
* **LLEN** *key*：列表长度
  
* **LPOP** *key [count]*：删除并返回第一个元素
  
* **LPOS** *key element* [**RANK** *rank*] [**COUNT** *num-matches*] [**MAXLEN** len]
  Return the index of matching elements on a list

* **LPUSH** *key element [element ...]*：插入元素
  
* **LPUSHX***key element [element ...]*：列表存在才插入
  
* **LRANGE** *key start stop*：得到范围内的元素
  
* **LREM** *key count element*：删除多个元素
  
* **LSET** *key index element*：设置第index个元素的值
  
* **LTRIM**  *key start stop*：删除范围内的元素
  
* **RPOP** *key [count]*：删除并返回最后一个
  
* **RPOPLPUSH** *source destination*：删除最后一个，并添加到另一个列表前面
  
* **LMOVE** *source destination* **LEFT\|RIGHT LEFT\|RIGHT**：从一个列表删除元素并添加到另外一个列表
  
* **RPUSH** *key element [element ...]*：添加元素
  
* **RPUSHX** *key element [element ...]*：列表存在才添加


#### 集合

#### 哈希

#### 有序集合



## 配置

#### 主从复制

```bash
#配置从服务器
slaveof 192.168.1.1 6379
```
