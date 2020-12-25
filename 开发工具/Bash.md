
### 运算符
##### 算术运算
```bash
echo $(( 10 + 3 ))

#求余数
echo `expr 5 % 4`
```
##### 字符串
```bash
# 字符串替换（abc替换成123）
echo ${variable/abc/123}
```

---
### 流程控制
##### case
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
### 内置命令
##### getopts

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

##### trap
```bash
#退出时关闭进程组
trap 'trap - SIGTERM && kill 0' SIGINT SIGTERM EXIT
```