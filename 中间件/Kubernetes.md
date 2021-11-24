---
tags: 服务器
---

## kubectl 命令

#### 基础

###### 💻 create

```bash
# 部署应用
kubectl create deployment simulation --image=simulation:v1
```

###### 💻 delete

```bash
# 删除应用
kubectl delete -n default deployment simulation
```

###### 💻 edit

```bash
# Edit the deployment 'mydeployment' in YAML and save the modified config in its annotation:
kubectl edit deployment/mydeployment -o yaml --save-config
```

###### 💻 explain

```bash
# 解析字段
kprod explain pods.status.containerStatuses.state
```

###### 💻 expose

```bash
# Create a service for a replicated nginx, which serves on port 80 and connects to the containers on port 8000.
kubectl expose rc nginx --port=80 --target-port=8000
```

###### 💻 get

获取 service 信息

```bash
kubectl get service
```

获取 pod 信息
```bash
kubectl get pods
kubectl get -o json pod $pod_name

# name, image
kubectl get pods -o custom-columns="NAME:.metadata.name,IMAGE:.status.containerStatuses[0].image"

# name, host_ip, phase, start_time
get pods -o custom-columns="NAME:.metadata.name,HOST_IP:.status.hostIP,PHASE:.status.phase, START_TIME:.status.startTime"
```

###### 💻 proxy

```bash
# api-server代理
kubectl proxy --address=0.0.0.0 --accept-hosts=.*
```

###### 💻 run

```bash
# Start a nginx pod.
kubectl run nginx --image=nginx
```

###### 💻 set

```bash
# Set a deployment's nginx container image to 'nginx:1.9.1'
kubectl set image deployment/nginx nginx=nginx:1.9.1
```

<center>🍉🍉🍉</center>

#### 部署

###### 💻 autoscale

```bash
# Auto scale a replication controller "foo", with the number of pods between 1 and 5, target CPU utilization at 80%:
kubectl autoscale rc foo --max=5 --cpu-percent=80
```

###### 💻 rollout

```bash
# -- history
# 显示历史列表
kubectl rollout history deployment/$app_name

# 显示一个历史版本
kubectl rollout history deployment/$app_name --revision=$revision

# pause       标记提供的 resource 为中止状态
# restart     Restart a resource
# resume      继续一个停止的 resource
# status      显示 rollout 的状态
# undo        撤销上一次的 rollout
```

###### 💻 scale

```bash
# Scale a replicaset named 'foo' to 3.
kubectl scale --replicas=3 rs/foo
```

<center>🍉🍉🍉</center>

#### 集群

###### 💻 certificate

###### 💻 cluster-info

###### 💻 top

###### 💻 cordon

###### 💻 uncordon

###### 💻 drain

###### 💻 taint

<center>🍉🍉🍉</center>

#### 调试

###### 💻 describe

```bash
kubectl describe pods/nginx
```

###### 💻 logs

###### 💻 attach

###### 💻 exec

###### 💻 port-forward

###### 💻 proxy

###### 💻 cp

###### 💻 auth

###### 💻 debug

<center>🍉🍉🍉</center>

#### 高级

###### 💻 diff

###### 💻 apply

###### 💻 patch

###### 💻 replace

###### 💻 wait

###### 💻 kustomize

<center>🍉🍉🍉</center>

#### 设置

###### 💻 label

###### 💻 annotate

###### 💻 completion

<center>🍉🍉🍉</center>

#### 其他

###### 💻 api-resources
###### 💻 api-versions
###### 💻 config
###### 💻 plugin
###### 💻 version
