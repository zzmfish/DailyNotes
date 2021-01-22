
#### 编译安装
```bash
sudo apt install libssl-dev libffi-dev libbz2-dev libncurses5-dev libncursesw5-dev
./configure --prefix=$prefix  #打开config.log查找ssl、ffi是否成功
make
make install
```

#### print中文问题
```python
import codecs
sys.stdout = codecs.getwriter("utf-8")(sys.stdout.detach())
```

#### 文件和目录

```python
os.makedirs(path)             # 递归创建目录
os.listdir(path)              # 列出目录内容
os.path.getmtime(file_path))  # 获得文件修改时间
glob.glob('*/*.gif')          # 列出匹配的文件

#遍历目录的文件
for root, dirs, files in os.walk(config.md_dir, followlinks=False):
    for file_name in files:
        print os.path.join(root, file_name)



```

