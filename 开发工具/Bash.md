
#### 使用getopts处理参数

getopts是Bash内置命令，不支持长选项。

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