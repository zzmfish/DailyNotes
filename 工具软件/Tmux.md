---
tags: Linux
---

## <center>命令</center>

```bash
tmux new-session -s $session_name
tmux list-sessions
tmux attach -t $session_name

# 断网重连如果卡死，就调用这个
tmux detach-client
```

## <center>快捷键</center>



#### 前缀

`Ctrl` + `b`

#### 窗口

| 按键 | 功能       |
| ---- | ---------- |
| c    | 创建新窗口 |
| w  | 列出所有窗口 |
| n |  后一个窗口|
| p |  前一个窗口 |
| f |  查找窗口 |
| , | 重命名当前窗口 |
| . | 重设序号 |
| & | 关闭当前窗口 |

#### 窗格

| 按键 | 功能       |
| ---- | ---------- |
| %  | 垂直分割 |
| " |  水平分割 |
| o |  交换窗格 |
| x |  关闭窗格 |
| ⍽（空格键） | 切换布局 |
| q | 显示每个窗格是第几个，当数字出现的时候按数字几就选中第几个窗格 |
| { | 与上一个窗格交换位置|
| }  | 与下一个窗格交换位置 |
| z | 切换窗格最大化/最小化 |

## <center>配置文件</center>

```bash
set -g prefix C-a

set -g base-index         1     # 窗口编号从 1 开始计数
set -g display-panes-time 10000 # PREFIX-Q 显示编号的驻留时长，单位 ms
set -g mouse              on    # 开启鼠标
set -g pane-base-index    1     # 窗格编号从 1 开始计数
set -g renumber-windows   on    # 关掉某个窗口后，编号重排

setw -g allow-rename      off   # 禁止活动进程修改窗口名
setw -g automatic-rename  off   # 禁止自动命名新窗口
setw -g mode-keys         vi    # 进入复制模式的时候使用 vi 键位（默认是 EMACS）

```

## <center>其他问题</center>

#### 复制到剪切板

1. 按住 `shift`，`鼠标左键` 选择内容
2. `Ctrl + Shift+C` 复制
3. `Ctrl+V` 粘贴
