#### 生成core dump文件

```bash
# 检查core文件大小限制
ulimit -a | grep 'core'

# 设置core文件大小限制
# 不限制
ulimit -c unlimited
# 限制大小为1024
ulimit -c 1024
# 限制大小为0，即不输出core文件
ulimit -c 0

# 设置core dump文件的输出路径
echo "/tmp/cores/core.%p" > /proc/sys/kernel/core_pattern
```

