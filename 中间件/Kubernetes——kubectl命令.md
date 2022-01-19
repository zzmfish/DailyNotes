---
tags: 服务器
---

#### <center>通用选项</center>

<span style="border-bottom: 2px solid orange">-n</span> / <span style="border-bottom: 2px solid orange">--namespace</span>

```bash
kubectl -n $namespace get pods
```




#### <center>基础</center>

###### <span style="background-color: orange">create</span>

```bash
# 部署应用
kubectl create deployment simulation --image=simulation:v1
```

###### <span style="background-color: orange">delete</span>

```bash
# 删除应用
kubectl delete -n default deployment simulation
```

###### <span style="background-color: orange">edit</span>

```bash
# Edit the deployment 'mydeployment' in YAML and save the modified config in its annotation:
kubectl edit deployment/mydeployment -o yaml --save-config
```

###### <span style="background-color: orange">explain</span>

```bash
# 解析字段
kprod explain pods.status.containerStatuses.state
```

###### <span style="background-color: orange">expose</span>

```bash
# Create a service for a replicated nginx, which serves on port 80 and connects to the containers on port 8000.
kubectl expose rc nginx --port=80 --target-port=8000
```

###### <span style="background-color: orange">get</span>

<span style="border-bottom: 2px solid orange">service</span>

```bash
kubectl get service
```

<span style="border-bottom: 2px solid orange">pods</span>

```bash
kubectl get pods
kubectl get -o json pod $pod_name

# name, image
kubectl get pods -o custom-columns="NAME:.metadata.name,IMAGE:.status.containerStatuses[0].image"

# name, phase, start_time
kubectl get pods -o custom-columns="NAME:.metadata.name,PHASE:.status.phase, START_TIME:.status.startTime"

# name, host_ip
kubectl get pods -o custom-columns="NAME:.metadata.name,HOST_IP:.status.hostIP"
```

###### <span style="background-color: orange">proxy</span>

```bash
# api-server代理
kubectl proxy --address=0.0.0.0 --accept-hosts=.*
```

###### <span style="background-color: orange">run</span>

```bash
# Start a nginx pod.
kubectl run nginx --image=nginx
```

###### <span style="background-color: orange">set</span>

```bash
# Set a deployment's nginx container image to 'nginx:1.9.1'
kubectl set image deployment/nginx nginx=nginx:1.9.1
```

#### <center>部署</center>

###### <span style="background-color: orange">autoscale</span>

```bash
# Auto scale a replication controller "foo", with the number of pods between 1 and 5, target CPU utilization at 80%:
kubectl autoscale rc foo --max=5 --cpu-percent=80
```

###### <span style="background-color: orange">rollout</span>

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

###### <span style="background-color: orange">scale</span>

```bash
# Scale a replicaset named 'foo' to 3.
kubectl scale --replicas=3 rs/foo
```

#### <center>集群</center>

###### <span style="background-color: orange">certificate</span>

###### <span style="background-color: orange">cluster-info</span>

###### <span style="background-color: orange">top</span>

```bash
# 列出node的cpu和内存占用
kubectl top node

# 列出pod的cpu和内存占用
kubectl top pod
```



###### <span style="background-color: orange">cordon</span>

###### <span style="background-color: orange">uncordon</span>

###### <span style="background-color: orange">drain</span>

###### <span style="background-color: orange">taint</span>

#### <center>调试</center>

###### <span style="background-color: orange">describe</span>

```bash
kubectl describe pods/nginx
```

###### <span style="background-color: orange">logs</span>

###### <span style="background-color: orange">attach</span>

###### <span style="background-color: orange">exec</span>

###### <span style="background-color: orange">port-forward</span>

###### <span style="background-color: orange">proxy</span>

###### <span style="background-color: orange">cp</span>

###### <span style="background-color: orange">auth</span>

###### <span style="background-color: orange">debug</span>

#### <center>高级</center>

###### <span style="background-color: orange">diff</span>

###### <span style="background-color: orange">apply</span>

###### <span style="background-color: orange">patch</span>

###### <span style="background-color: orange">replace</span>

###### <span style="background-color: orange">wait</span>

###### <span style="background-color: orange">kustomize</span>

#### <center>设置</center>

###### <span style="background-color: orange">label</span>

###### <span style="background-color: orange">annotate</span>

###### <span style="background-color: orange">completion</span>

#### <center>其他</center>

###### <span style="background-color: orange">api-resources</span>
###### <span style="background-color: orange">api-versions</span>
###### <span style="background-color: orange">config</span>
###### <span style="background-color: orange">plugin</span>
###### <span style="background-color: orange">version</span>
