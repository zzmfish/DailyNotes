---
tags: Linux
---

## <center>运算符</center>

#### 算术运算

###### $(())

```bash
echo $(( 10 + 3 ))
```
###### expr
```
#求余数
echo `expr 5 % 4`
```
#### 字符串

###### ${}

```bash
${#str}	        #长度
${str:pos}	    #从位置$pos开始提取子串
${str:pos:len}	#从位置$pos开始提取长度为$len的子串
 	 
${str#substr}	#从开头删除最短匹配的子串
${str##substr}	#从开头删除最长匹配的子串
${str%substr}	#从结尾删除最短匹配的子串
${str%%substr}	#从结尾删除最长匹配的子串
 	 
${str/substr/replacement}	#替换第一个匹配的子串
${str//substr/replacement}	#替换所有匹配的子串
${str/#substr/replacement}	#替换前缀匹配的子串
${str/%substr/replacement}	#替换后缀匹配的子串
```

## <center>流程控制</center>
###### case
```bash
case EXPRESSION in
  PATTERN)
    STATEMENTS
    ;;
  *)
    STATEMENTS
    ;;
esac
```

## <center>内置命令</center>
###### echo
```bash
# 显示颜色
echo -e "\e[31mRed\e[0m"
```

| Code | Color                    |
| ---- | :----------------------- |
| 39   | Default foreground color |
| 30   | Black                    |
| 31   | Red                      |
| 32   | Green                    |
| 33   | Yellow                   |
| 34   | Blue                     |
| 35   | Magenta                  |
| 36   | Cyan                     |
| 37   | Light gray               |
| 90   | Dark gray                |
| 91   | Light red                |
| 92   | Light green              |
| 93   | Light yellow             |
| 94   | Light blue               |
| 95   | Light magenta            |
| 96   | Light cyan               |
| 97   | White                    |

###### getopts

```bash
while getopts "a:b" arg #冒号表示该选项需要参数
do
  case $arg in
    a)
      echo "a's arg:$OPTARG" #参数存在$OPTARG中
      ;;
    b)
      echo "b"
      ;;
    ?)  #不认识的选项
      echo "unkonw argument"
      exit 1
      ;;
  esac
done
```

###### set

```bash
# 变量没声明要报错
set -u
set -o nounset

# 显示执行的命令
set -x
set -o xtrace

# 遇到错误（程序返回非0值）停止执行
set -e
set -o errexit

# 遇到错误继续执行
set +e

# 管道中的子命令出错要停止执行
set -eo pipefail
```



###### trap

```bash
#退出时关闭进程组
trap 'trap - SIGTERM && kill 0' SIGINT SIGTERM EXIT
```


