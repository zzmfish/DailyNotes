
## 运算符
#### 算术运算
```bash
echo $(( 10 + 3 ))

#求余数
echo `expr 5 % 4`
```
#### 字符串
```bash
# 字符串替换（abc替换成123）
echo ${variable/abc/123}
```

---
## 流程控制
#### case
```bash
case EXPRESSION in
  PATTERN_1)
    STATEMENTS
    ;;
  PATTERN_2)
    STATEMENTS
    ;;
  PATTERN_N)
    STATEMENTS
    ;;
  *)
    STATEMENTS
    ;;
esac
```






---
## 内置命令
#### getopts

```bash
while getopts "a:bc" arg #冒号表示该选项需要参数
do
  case $arg in
    a)
      echo "a's arg:$OPTARG" #参数存在$OPTARG中
      ;;
    b)
      echo "b"
      ;;
    c)
      echo "c"
      ;;
    ?)  #不认识的选项
      echo "unkonw argument"
      exit 1
      ;;
  esac
done
```

#### set

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



#### trap

```bash
#退出时关闭进程组
trap 'trap - SIGTERM && kill 0' SIGINT SIGTERM EXIT
```