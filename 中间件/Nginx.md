---
tags: 中间件
---

#### 命令

```bash
nginx
nginx -s quit
nginx -s reload
```

#### 安装文件位置（Ubuntu）
```bash
# 配置文件
/etc/nginx/nginx.conf

# 静态网页
/var/www/html/
```

#### 配置文件
```nginx
http {
    # 上传大小限制
    client_max_body_size 8M;
    client_body_buffer_size 128k;
    
    # 列出目录文件
    autoindex on;
    charset utf-8;
    
    # 日志格式
    log_format  main  '$time_local`$remote_addr $request`$status $body_bytes_sent`$http_user_agent';
    access_log  /var/log/nginx/access.log  main;

    server {
        listen  80;
        root  /path/to/root;

        # 根据ua切换
        if ($http_user_agent ~ MicroMessenger) {
            proxy_pass http://localhost:8010;
        }

        #代理
        location /external/query {
            proxy_pass http://localhost:8020;
            proxy_read_timeout 1800s;
            proxy_set_header X-Real-IP $remote_addr;
        }
        
        # 用户名/密码验证
        # apt-get install apache2-utils
        # sudo htpasswd -c /etc/nginx/htpasswd example_user
        location /secret {
            root /secret/path;
            auth_basic_user_file /etc/nginx/htpasswd;
        }
    }
}
```
