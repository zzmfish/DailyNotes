---
tags: Linux
---

## 命令

```bash
tmux new-session -s $session_name
tmux list-sessions
tmux attach -t $session_name

# 断网重连如果卡死，就调用这个
tmux detach-client
```

## 配置文件

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

## 复制到剪切板

1. 按住`shift`，`鼠标左键`选择内容

2. `Ctrl + Shift+C` 复制

3. `Ctrl+V` 粘贴

