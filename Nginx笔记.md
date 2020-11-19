#### 命令
```bash
nginx
nginx -s quit
nginx -s reload
```

#### 配置文件
```nginx
http {
    # 上传大小限制
    client_max_body_size 8M;
    client_body_buffer_size 128k;

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
    }
}
```
