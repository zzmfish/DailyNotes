
## 安装
#### 编译安装
```bash
sudo apt install libssl-dev libffi-dev libbz2-dev libncurses5-dev libncursesw5-dev
./configure --prefix=$prefix  #打开config.log查找ssl、ffi是否成功
make
make install
```