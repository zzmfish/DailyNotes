---
tags: Linux
---

## 架构

![](http://zhouzm.cn/DailyNotes/assets/images/docker%E6%9E%B6%E6%9E%84.png)

<br>

<center>🐶🐶🐶</center>

## 命令

#### 仓库

###### 🔹login

###### 🔹logout

###### 🔹pull

###### 🔹push

<br>

#### 镜像

###### 🔹build

| 参数                     | 作用                                                |
| ------------------------ | --------------------------------------------------- |
| -f, --file \<Dockerfile> |                                                     |
| --force-rm               | Always remove intermediate containers               |
| -m, --memory \<bytes>    | Memory limit                                        |
| --pull                   | Always attempt to pull a newer version of the image |
| -t, --tag \<list\>       | Name and optionally a tag in the 'name:tag' format  |
| --build-arg \<list>      | Set build-time variables                            |
| --squash                 | Squash newly built layers into a single new layer   |

```bash
# 根据Dockerfile构建镜像
docker build .
docker build -f $dockerfile .

# 构建镜像同时打上tag
docker build -t $repo_name:$tag_name .
```

###### 🔹commit

###### 🔹history


###### 🔹images

```bash
# 查看全部镜像
docker images
```

###### 🔹import

###### 🔹load

###### 🔹rmi

```bash
#删除镜像
docker rmi $image_id

#如果镜像有超过一个tag，可以删除一个tag但不删除镜像
docker rmi $image_tag
```

###### 🔹save

###### 🔹search

###### 🔹tag

```bash
# 镜像命名
docker tag $image_id $repo_name:$tag_name
```

<br>

#### 容器

###### 🔹attach

###### 🔹cp

```bash
# 复制文件或目录
docker cp $local_file $container:$remote_path
docker cp $container:$remote_path $local_file
```

###### 🔹create

###### 🔹diff

###### 🔹exec

```bash
# 解决 bash 无法输入中文
docker exec -it $container env LANG=C.UTF-8 /bin/bash
```

###### 🔹export

###### 🔹inspect

```bash
#显示容器详细信息
docker inspect $container
```

###### 🔹kill

###### 🔹logs

###### 🔹pause

###### 🔹port

###### 🔹ps

```bash
# 显示正在运行的容器
docker ps

# 显示全部容器（包括停止运行的）
docker ps -a

# 查看占用的磁盘空间
docker ps --size
```

###### 🔹rename

```bash
# 给容器命名
docker rename $container_id $name
```

###### 🔹restart

###### 🔹rm

```bash
# 删除容器
docker rm $container_id
```

###### 🔹run

Run a command in a new container

```bash
# -i: 保持stdin
# -t: 分配伪终端
docker run -it $image

# 退出容器自动删除
docker run --rm $image

# 设置环境变量
docker run --env VAR1=value1 --env VAR2=value2 $image $cmd

# container 8080端口映射到host 80端口
docker run -p 8080:80 $image $cmd

# ?
docker run -it --
```

###### 🔹start

Start one or more stopped containers

###### 🔹stats

###### 🔹stop

```bash
# 停止一个container
docker stop $container

# 停止一个container，指定等待时间
docker stop $container -t 10
```



###### 🔹top

###### 🔹unpause

###### 🔹update

###### 🔹wait

<br>

#### 其他

###### 🔹events

###### 🔹info

###### 🔹version

<center>🐶🐶🐶</center>

## Dockerfile

#### 配置指令

###### 🔹ARG

###### 🔹FROM

###### 🔹LABEL

###### 🔹EXPOSE

###### 🔹ENV

###### 🔹ENTRYPOINT

###### 🔹VOLUME

###### 🔹USER

###### 🔹WORKDIR

###### 🔹ONBUILD

###### 🔹STOPSIGNAL

###### 🔹HEALTHCHECK

###### 🔹SHELL

<br>

#### 操作指令

###### 🔹RUN

###### 🔹CMD

###### 🔹ADD

###### 🔹COPY

<center>🐶🐶🐶</center>

## 问题

#### 数据存放位置（镜像、容器）

```
/var/lib/docker
```

#### 重启docker服务

```bash
# ubuntu
sudo systemctl restart docker
```

#### 使用私有仓库

```bash
# 运行容器
docker run -d -p 5000:5000 --restart=always --name registry registry

# 推送到私有仓库（只能推送到127.0.0.1）
docker tag $image_id 127.0.0.1:5000/$repo_name:$tag_name
docker push 127.0.0.1:5000/$repo_name:$tag_name

# 查看仓库中的镜像
curl '127.0.0.1:5000/v2/_catalog'
```

