---
tags: 开发工具
header:
  image: "http://zhouzm.cn/images/%E7%BE%8E%E5%9B%BE/210415%E5%8A%A8%E6%BC%AB.jpg"
---



以 MfLocalPose 为例，我想看 MfLocalPose构造函数在哪些地方被调用。



## 查找函数符号

使用nm命令查找 MfLocalPose函数符号：

```bash
> nm build/bin/map_manager | grep ' T ' | grep MfLocalPose
0000000000594780 T _ZN6xpilot14reference_line10RefLineMap18ReadMfLocalPoseMsgEv
0000000000529110 T _ZN6xpilot14reference_line9RefLineCP18ReadMfLocalPoseMsgEv
0000000000836520 T _ZN6xpilot3msg10map_fusion14MfLocalPoseMsgC1Ev
0000000000836520 T _ZN6xpilot3msg10map_fusion14MfLocalPoseMsgC2Ev
0000000000837000 T _ZN6xpilot3msg10map_fusion24MfLocalPoseMsgPlugin_newEv
00000000008371e0 T _ZN6xpilot3msg10map_fusion27MfLocalPoseMsgPlugin_deleteEP14PRESTypePlugin
0000000000836f80 T _ZN6xpilot3msg10map_fusion32MfLocalPoseMsgPlugin_copy_sampleEPvPNS1_14MfLocalPoseMsgEPKS3_
0000000000836ff0 T _ZN6xpilot3msg10map_fusion33MfLocalPoseMsgPlugin_get_key_kindEv
```

_ZN6xpilot3msg10map_fusion14MfLocalPoseMsgC1Ev 和 _ZN6xpilot3msg10map_fusion14MfLocalPoseMsgC2Ev 就是 MfLocalPose 的构造函数。（其中_ZN6xpilot3msg10map_fusion14是命名空间、LocalPoseMsg是类名、C1/C2是构造函数、Ev表示参数为void）。



## 设置 gdb 断点

把这些 gdb 命令写到一个文件 gdb_cmds：
```
//1、设置断点：
break _ZN6xpilot3msg10map_fusion14MfLocalPoseMsgC1Ev
break _ZN6xpilot3msg10map_fusion14MfLocalPoseMsgC2Ev

//2、输出到日志
set pagination off
set print pretty
set logging file /tmp/gdb.log
set logging on

//3、断点处显示backtrace然后继续执行
command
bt
c
end

//4、运行程序
run
```



## 运行程序

以 map_manager 为例，修改 run_sim.py，用 gdb 来启动 map_manager：

```python
if program_name == 'map_manager':
    cmd = ['/usr/bin/gdb',
           '-x',
           '/home/user/xplorer/xpilot/modules/simulation/gdb_cmds',
           '--args'] + cmd
```

然后运行 WorldSim / LogSim。

除了 map_manager 因为有 gdb 断点会运行慢一些，其他应该和正常一样。

程序结束后，会看到 /tmp/gdb.log 文件，记录了每次调用 MfLocalPose构造函数的 backtrace。



## 生成函数调用图

1、下载  [gdb_graphs](https://github.com/tarun27sh/gdb_graphs)，并安装依赖库

2、根据 gdb.log 生成函数调用图

```bash
~/opt/gdb_graphs/gen_graph.py -i gdb.log
```

然后会得到 gdb.svg，用浏览器打开。