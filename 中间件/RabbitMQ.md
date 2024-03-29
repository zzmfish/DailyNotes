---
tags: 中间件
---



#### 目录

日志目录: /var/log/rabbitmq/

配置文件: /etc/rabbitmq/rabbitmq.conf

#### rabbitmqctl

```bash
# 显示vhost列表
rabbitmqctl list_vhosts

# 创建用户名密码
rabbitmqctl add_user $user $password

# 显示用户列表
rabbitmqctl list_users

# 用户授权给vhost "/"
rabbitmqctl set_permissions -p "/" $user ".*" ".*" ".*"
```

#### WebUI
```bash
# 启动Web UI
# http://localhost:15672
rabbitmq-plugins enable rabbitmq_management

# 设置用户权限
rabbitmqctl set_user_tags $user administrator
```

#### 参考

* [Tutorial 1: Hello World!](https://www.rabbitmq.com/tutorials/tutorial-one-python.html)
* [Management Plugin](https://www.rabbitmq.com/management.html)
* [Quorum Queues](https://www.rabbitmq.com/quorum-queues.html#configuration)