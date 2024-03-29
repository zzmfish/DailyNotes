---
tags: Linux
---



## 简介

#### 是什么 

sed 命令采用的是 **流编辑** 模式，处理流程：

1. 每次仅读取 **一行** 内容；
2. 根据 **规则命令** 匹配并修改数据，sed 默认会将数据复制到 **缓冲区** 中，修改缓冲区中的数据；
3. 将执行结果 **输出**；
4. 重复读取下一行数据，直到将文件中所有数据处理完毕。

#### 命令格式

> sed [选项] [脚本命令] 文件名

#### 命令选项

| 选项 | 含义                                                         |
| ---- | ------------------------------------------------------------ |
| -e   | 脚本命令，将其后跟的脚本命令添加到已有的命令中               |
| -f   | 脚本命令文件，将其后文件中的脚本命令添加到已有的命令中       |
| -n   | 默认会在所有的脚本指定执行完毕后，会自动输出处理后的内容；<br>该选项会屏蔽启动输出，需使用 print 命令来完成输出。 |
| -i   | 直接修改源文件                                               |

<center>🍉🍉🍉</center>

## 脚本命令

#### 💻 s——替换

格式：

> [address]s/pattern/replacement/flags

flags：

| flags  | 功能                                                         |
| ------ | ------------------------------------------------------------ |
| n      | 要替换的字符串出现第几次时才进行替换（例如：一行中有 3 个 A，但用户只想替换第二个 A，这是就用到这个标记） |
| g      | 对数据中所有匹配到的内容进行替换；如果没有 g，则只会在第一次匹配成功时做替换操作（例如：一行数据中有 3 个 A，则只会替换第一个 A） |
| p      | 打印与替换命令中指定的模式匹配的行。此标记通常与 -n 选项一起使用。 |
| w file | 将缓冲区中的内容写到指定的 file 文件中                       |
| &      | 用正则表达式匹配的内容进行替换                               |
| \n     | 匹配第 n 个子串                                              |
| \      | 转义（：&、\ 等）                                            |

例子：

```bash
# 替换第2处匹配
sed 's/abc/ABC/2' myfile

# 替换所有匹配
sed 's/abc/ABC/g' myfile

# 只输出被替换过的行
sed -n 's/abc/ABC/p' myfile

# 将匹配后的结果保存到文件
sed 's/test/trial/w test.txt' data5.txt
```



#### 💻 d——删除

格式：

>  [address]d

例子：

```bash
# 删除第3行
sed '3d' myfile

# 删除第2、3行
sed '2,3d' myfile

# 使用两个文本模式来删除某个区间内的行，第一个模式会“打开”行删除功能，第二个模式会“关闭”行删除功能
# 删除第1~3行
sed '/1/,/3/d' myfile

# 删除第3行开始的内容
sed '3,$d' myfile
```



#### 💻 a 和 i——添加

a 命令表示在指定行的后面附加一行，i 命令表示在指定行的前面插入一行，格式：

> [address]a（或 i）\新文本内容

```bash
# 在第3行前插入一个新行
sed '3i\
new line' myfile

# 在第3行后插入一个新行
sed '3a\
new line ' myfile

# 在第3行前插入多个新行
sed '3i\
> new line\
> new line' myfile
```



#### 💻 c——替换

指定行中的所有内容，替换成该选项后面的字符串，格式：

> [address]c\用于替换的新文本

例子：

```bash
# 替换第三行中的文本
sed '3c\
> new text' myfile
```



#### 💻 y——转换

对 inchars 和 outchars 值进行一对一的映射，即 inchars 中的第一个字符会被转换为 outchars 中的第一个字符，第二个字符会被转换成 outchars 中的第二个字符，格式：

> [address]y/inchars/outchars/

例子：

```bash
# 全局转换
sed 'y/abc/ABC/' myfile
```



#### 💻 p——打印

格式：

> [address]p

例子：

```bash
# 打印包含匹配文本模式的行
sed -n '/text/p' myfile

# 与替换或修改命令一起使用，在修改行之前显示该行
sed -n '/abc/{ \
p \
s/abc/ABC/p \
}' myfile
```



#### 💻 w——写入

格式：

> [address]w filename

例子：

```bash
# 前两行打印到一个文本文件
sed '1,2w result.txt' myfile
```



#### 💻 r——插入

将一个文件的数据插入到指定位置，格式：

> [address]r filename

例子：

```bash
# 在第3行后面插入文件内容
sed '3r data.txt' myfile

# 在末尾插入文件内容
sed '$r data.txt' myfile
```



#### 💻 q——退出

在第一次匹配任务结束后，退出 sed 程序，不再进行对后续数据的处理

例子：

```bash
# 显示前两行内容
sed '2q' myfile

# 显示第一个替换后退出
sed '/abc/{ s/abc/ABC/;q; }' test.txt
```

<center>🍉🍉🍉</center>

## 寻址方式

#### 以数字形式指定行区间

```bash
# 只替换第2行内容
sed '2s/abc/ABC/' myfile

# 替换第2、3行的内容
sed '2,3s/abc/ABC/' myfile

# 替换第2行到最后一行
sed '2,$s/abc/ABC/' myfile
```



#### 用文本模式指定具体行区间

可使用正则表达式



[阅读原文](http://c.biancheng.net/view/4028.html)