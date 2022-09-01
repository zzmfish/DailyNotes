---
tags: 网络
---



#### NFSv2（1989，基本功能）

#### NFSv3（1995，bugfix）

* 修正一些bug
* 异步写操作——服务器只需要将数据写入缓存中就可以发送应答信息
* COMMIT请求——将服务器缓存中的数据刷新到磁盘中
* ACCESS请求——检查用户的访问权限

#### NFSv4.0（2003，有状态）

* 文件锁
* Delegation
  * 客户端 A 打开一个文件
  * 服务器给 A 分配一个 Delegation（Delegation 表示文件与服务器保持一致）
  * 客户端 B 访问同一个文件
  * 服务器暂缓 B 的访问请求 -> 向客户端A发送 RECALL 请求
  * A接收到 RECALL 请求 -> 将本地缓存刷新到服务器中 -> 将delegation返回服务器
  * 服务器开始处 B 的请求
* 文件属性

  * Mandatory Attributes——基本属性，所有的操作系统必须支持
  * Recommended Attributes——建议的属性，操作系统尽量实现
  * Named Attributes——操作系统可以自己实现的一些文件属性

#### NFSv4.1（2010，并行存储）

* 元数据服务器（MDS）`×1`
  * 管理文件在磁盘中的布局
* 数据服务器（DS） `×n`

[原文](https://blog.csdn.net/ycnian/article/details/8515517)

