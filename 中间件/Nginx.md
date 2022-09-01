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
    # maximum allowed size of the client request body
    client_max_body_size 8M;
    
    # buffer size for reading client request body.
    # In case the request body is larger than the buffer, the whole body or only its part is written to a temporary file.
    client_body_buffer_size 128k;
    
    # 列出目录文件
    autoindex on;
    charset utf-8;
    
    # 日志格式
    log_format  main  '$time_local`$remote_addr $request`$proxy_host $proxy_port`$status $body_bytes_sent`$http_user_agent';
    access_log  /var/log/nginx/access.log  main;

    server {
        listen  80;
        root  /path/to/root;

        # 根据ua切换
        if ($http_user_agent ~ MicroMessenger) {
            proxy_pass http://localhost:8010;
        }

        location /path {
            # protocol and address of a proxied server and an optional URI to which a location should be mapped
            proxy_pass http://localhost:8020;
            
            # timeout for reading a response from the proxied server
            proxy_read_timeout 1800s;
            
            # redefine/append fields to the request header passed to the proxied server
            proxy_set_header X-Real-IP $remote_addr;
        }
        
        location /secret {
            # root directory for requests
            root /secret/path;
            
            # 用户名/密码验证
            # apt-get install apache2-utils
            # sudo htpasswd -c /etc/nginx/htpasswd example_user
            auth_basic_user_file /etc/nginx/htpasswd;
        }
    }
}
```
