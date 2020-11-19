```bash
# 已安装软件包
dpkg -l
dpkg -l | grep $keyword

# 已安装软件包的文件位置
dpkg -L $package_name
dpkg --listfiles $package_name
```
