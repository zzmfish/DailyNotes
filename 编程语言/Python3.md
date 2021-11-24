---
tags: 编程语言
header:
  image: "http://zhouzm.cn/images/%E7%BE%8E%E5%9B%BE/210420%E9%B1%BC.jpg"
---

## 编译安装

```bash
sudo apt install libssl-dev libffi-dev libbz2-dev libncurses5-dev libncursesw5-dev libsqlite3-dev
./configure --prefix=$prefix --enable-loadable-sqlite-extensions #打开config.log查找ssl、ffi、sqlite是否成功
make
make install
```

## 代码片段
#### 参数解释

```python
import argparse
parser = argparse.ArgumentParser()
#--job或-j，整数类型，必需
parser.add_argument('--job_id', '-j', type=int, required=True)
args = parser.parse_args()
print(args.job_id)
```

#### 日志输出

```python
# 输出日志到文件
logging.basicConfig(filename='example.log', format='%(levelname)s:%(message)s', level=logging.DEBUG)
# 输出日志到终端
logger = logging.getLogger()
logger.addHandler(logging.StreamHandler(sys.stdout))
logger.setLevel(logging.DEBUG)

# 根据日期切换日志文件
logging.basicConfig()
file_handler = logging.handlers.TimedRotatingFileHandler("video.log", 'MIDNIGHT')
file_handler.formatter = logging.Formatter('%(asctime)s %(message)s’)
logger = logging.getLogger()
logger.addHandler(file_handler)
```



#### print中文问题

```python
import codecs
sys.stdout = codecs.getwriter("utf-8")(sys.stdout.detach())

# 显示unicode
print(u'\u81f4\u547d\u9519\u8bef')
```

#### 文件和目录

```python
os.makedirs(path)             # 递归创建目录
os.listdir(path)              # 列出目录内容
os.path.getmtime(file_path))  # 获得文件修改时间
glob.glob('*/*.gif')          # 列出匹配的文件

# 递归遍历目录下的文件
for root, dirs, files in os.walk(config.md_dir, followlinks=False):
    for file_name in files:
        print os.path.join(root, file_name)
```

#### 显示颜色

```python
print('\033[32m' + text + '\033[m')
```

#### 网络请求

```python
import requests
# form格式
req = requests.post(url, data={'name': 'value'})
# 获取应答
print(req.text)
```

#### 日期时间

###### datetime
```python
# 当前datetime
datetime.datetime.now()

# datetime -> timestamp
datetime.datetime.now().timestamp()

# 年月日
datetime.datetime(year, month, day)

# 当前日期字符串
datetime.datetime.now().strftime('%Y-%m-%d')
```
###### struct_time
```python
# 当前struct_time
time.localtime()

# 昨天的日期时间
time.localtime(time.time() - 24 * 3600)

# 字符串 -> struct_time
time.strptime('2014/12/12', '%Y/%m/%d')

# unix时间戳 -> struct_time
time.localtime(ts)
```



###### timestamp

```python
# 当前时间戳
time.time()
```

## 疑难问题

#### 解决matplotlib无法显示

提示:

```
Matplotlib is currently using agg, which is a non-GUI backend, so cannot show the figure.
  plt.show()
```

解决办法：

```
pip3 install PyQt5
```



## 第三方库

#### pip3安装第三方库

```bash
# 安装wheel文件
pip3 install $wheel_file
```



#### matplotlib

* [Specifying Colors](https://matplotlib.org/stable/tutorials/colors/colors.html#sphx-glr-tutorials-colors-colors-py)
* [matplotlib.pyplot.plot](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.plot.html)

