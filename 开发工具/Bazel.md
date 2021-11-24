---
tags: 开发工具
header:
  image: "http://zhouzm.cn/images/%E7%BE%8E%E5%9B%BE/210519%E6%B8%B8%E6%88%8F.jpg"
---



## 概念

![](http://zhouzm.cn/DailyNotes/assets/images/bazel.webp)

#### Workspace

包含软件 **源代码**；

包含 **输出目录** 的符号链接；

WORKSPACE （或 WORKSPACE.bazel）文件指明 **外部依赖**；

包含 WORKSPACE 文件的目录是 workspace 的 **根目录**；

忽略子目录的 WORKSPACE 文件

<br>

#### Repositories

用来 **组织代码**；

根目录又称 **主仓库** 或 **@**；

**外部仓库**（external）在WORKSPACE 中定义

<br>

#### Packages

**文件** 和 **依赖关系** 的集合；

包含 **BUILD**（或BUILD.bazel）文件

<br>

#### Targets

package 包含的元素，主要是 **文件或规则**

<br>

#### Labels

target 的名称

```bash
# 格式为 @repositrory_name//package_name:target_name
@myrepo//my/app/main:app_binary
//my/app/main:app_binary    # 同一个仓库
//my/app:app
//my/app     # 同上
```

<br>

#### Rules

指明输入文件和输出文件的 **关系**；

生成输出文件的 **步骤**



<center>☁️☁️☁️</center>

## 命令

#### bazel

###### 🔹build

```bash
# 显示子命令
bazel build $target -s
bazel build $target --subcommands

# 显示详细错误
bazel build $target --verbose_failures --sandbox_debug

# 限制内存和 CPU
bazel build $target --local_cpu_resources=HOST_CPUS*.5 --local_ram_resources=HOST_RAM*.5
```

###### 🔹clean

```bash
bazel clean
bazel clean --expunge
```

###### 🔹fetch

###### 🔹run

###### 🔹info

###### 🔹shutdown

<center>☁️☁️☁️</center>

## 文件

#### WORKSPACE

###### 🔹bind

在 //external 中为目标指定一个别名



###### 🔹local_repository

```bash
# 引用其他目录中的目标
local_repository(
    name = "my-ssl",
    path = "/home/user/ssl",
)
```



###### 🔹new_local_repository

```bash
# 把本地目录变成一个仓库
new_local_repository(
    name = "my-ssl",
    path = "/home/user/ssl",
    build_file = "BUILD.my-ssl",
)
```

<br>

#### BUILD

###### 🔹cc_binary

```bash
cc_binary(
    name = "hello-world",
    srcs = ["hello-world.cc"],
)
```

###### 🔹cc_import

```bash
# 导入 C/C++ 库
cc_import(
  name = "mylib",
  hdrs = ["mylib.h"],
  shared_library = "libmylib.so",
)
```

###### 🔹cc_library

```bash
cc_library(
    name = "baz",
    srcs = [
        "baz.cc",
        "baz-impl.h",
    ],
    hdrs = ["baz.h"],
)
```

###### 🔹cc_proto_library

###### 🔹fdo_prefetch_hints

###### 🔹fdo_profile

###### 🔹propeller_optimize

###### 🔹cc_test

###### 🔹cc_toolchain

###### 🔹cc_toolchain_suite

<center>☁️☁️☁️</center>

## 文档

* [Concepts and Terminology](https://docs.bazel.build/versions/master/build-ref.html)
* [Workspace Rules](https://docs.bazel.build/versions/master/be/workspace.html)

