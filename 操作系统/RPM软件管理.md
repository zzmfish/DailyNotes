---
tags: Linux
---

#### RPM软件管理

```bash
#安装软件包
rpm -i $rpm_file

#显示软件包信息
rpm -qpi $rpm_file

#卸载软件包
rpm -e $package_name

#查找已安装的软件包
rpm -qa  | grep $keyword 

#查看安装的文件
rpm -ql $package_name

#查看软件版本
yum list $package_name —showduplicates
```
