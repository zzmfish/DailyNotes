---
tags: 开发工具
---

## 安装

```bash
sudo add-apt-repository ppa:jonathonf/vim
sudo apt update
sudo apt install -y vim
sudo apt install -y exuberant-ctags
sudo apt install -y flake8
sudo pip install jedi
```

<center>💮💮💮</center>

## 操作

#### 编辑

| 命令/快捷键 | 作用 |
| ----------- | ---- |
| `u`         | 撤销 |
| `Ctrl`+`r`  | 重做 |


#### 查找和替换

| 命令/快捷键                          | 作用               |
| ------------------------------------ | ------------------ |
| `/` <u>text</u> \c            | 查找（不分大小写） |
| `:` w !sudo tee %                     | 使用 sudo 保存文件 |
| `:` edit                             | 重新加载文件       |

#### 移动光标

| 命令/快捷键               | 作用                                         |
| ------------------------- | -------------------------------------------- |
| `*`                       | 向下查找光标所在处的单词                     |
| `#`                       | 向上查找光标所在处的单词                     |
| `^`                       | 跳至行首的第一个字符                         |
| `$`                       | 跳至行尾                                     |
| `g` `g`                   | 跳至文首                                     |
| `G`                       | 调至文尾                                     |
| `Ctrl` + `u`              | 上翻半页                                     |
| `Ctrl` + `d`              | 下翻半页                                     |
| `:` jumps                 | display the jump list for the current window |
| `Ctrl` + `o`              | jump back to the previous (older) location   |
| `Ctrl` + `i`              | jump forward to the next (newer) location    |
| `<number>` + `Ctrl` + `o` | jump back to the previous x location         |
| `<number>` + `Ctrl` + `o` | jump forward to the next x location          |


#### 将文件从dos格式转换到unix格式

```vim
:set fileformat=unix
:w
```

<center>💮💮💮</center>

## 插件

#### [🛸 NERDTree](https://github.com/preservim/nerdtree)

| 命令/快捷键  | 作用            |
| ------------ | --------------- |
| `Ctrl` + `n` | 打开/关闭侧边栏 |

#### [🛸 VCSCommand](https://github.com/vim-scripts/vcscommand.vim)

| 命令/快捷键         | 作用 |
| ------------------- | ---- |
| `:` VCSDiff  |      |
| `:` VCSAdd   |      |
| `:` VCSStatus |      |
| `:` VCSCommit |      |
| `:` CSAnnotate |      |

#### [🛸 jedi-vim](https://github.com/davidhalter/jedi-vim)

| 命令/快捷键     | 作用                     |
| --------------- | ------------------------ |
| `Ctrl` `Space`  | Completion               |
| `\` `d`         | Goto definition          |
| `\` `g`         | Goto assignment          |
| `\` `r`         | Renaming                 |
| `\` `s`         | Goto (typing) stub       |
| `\` `n`         | Usages                   |
| `K`             | Show Documentation/Pydoc |
| `:` Pyimport os | Open module              |

#### [🛸 Flake8](https://github.com/nvie/vim-flake8)

```bash
mkdir -p ~/.config
cat <<EOF > ~/.config/flake8
[flake8]
max-line-length = 120
EOF
```

#### [🛸 Tagbar](https://github.com/preservim/tagbar)

#### 🛸 ctags

```bash
# 创建 tags 文件
find | grep -e '\.\(c\|cpp\|h\|hpp\)$' \
    | grep -v '/third_party/' \
    | grep -v '/platform/drive-' \
    | ctags -L -
```

| 命令/快捷键      | 作用                                                         |
| ---------------- | ------------------------------------------------------------ |
| `Ctrl` + `]`     | Goto definition                                              |
| `Ctr`l + `w` `}` | Opens a preview window with the location of the tag definition |
| `Ctrl` + `w` `z` | Close preview window created by the command `Ctrl`+`w` `}`   |
| `Ctrl` + `t`     | Jump back up in the tag stack                                |
| `g` `]`          | get a list of matching tags                                  |



## 参考

* [Vim Tips Wiki——Buffers](https://vim.fandom.com/wiki/Buffers)
