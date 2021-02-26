---
layout: post
title: Kubernetes
---
## 概述

#### 是什么

管理容器化的工作负载和服务的的开源平台



#### 组件

一个K8s`集群`由一组机器组成

`Node`表示一个机器

`Pod`表示一个应用负载

`Control Plane`管理集群的Node和Pod



###### Control Plane 组件

* `kube-apiserver`: 公开了 Kubernetes API

* `etcd`: 保存集群数据的键值数据库

* `kube-scheduler`: 为新创建的Pod选择运行的Node

* `kube-controller-manager`

* `cloud-controller-manager`: 特定云平台的控制组建



###### Node 组件

* `kubelet`: 保证容器都运行在 Pod 中

* `kube-proxy`: 维护节点的网络规则

* `Container Runtime`: 负责运行容器的软件（如Docker）



## 入门

#### minikube

```bash
# 启动minikube
minikube start

# 显示节点IP地址
minikube ip

# 打开仪表板
minikube dashboard

# 停止minukube
minikube stop
```

#### kubectl

```bash
# 部署应用
kubectl create deployment simulation --image=simulation:v1

# 删除应用
kubectl delete -n default deployment simulation

# 获取pods
kubectl get pods

# api-server代理
kubectl proxy --address=0.0.0.0 --accept-hosts=.*
```

