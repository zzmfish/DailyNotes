---
tags: 开发工具
---



## <center>概念</center>

#### Workspace

* 包含软件源代码；
* 包含输出目录的符号链接；
* <hm>WORKSPACE</hm> 文件指明外部依赖；
* 包含 WORKSPACE 文件的目录是 workspace 的根目录；
* 忽略子目录的 WORKSPACE 文件。

#### Repositories

* 用来组织代码；
* 根目录又称 <hu>主仓库</hu> 或 @；
* <hu>外部仓库</hu> (external) 在WORKSPACE 中定义。

#### Packages

* 文件和依赖关系的集合；
* 包含 <hm>BUILD</hm> 文件。

#### Targets

* package 包含的元素，主要是文件或规则。

#### Labels

* target 的名称

```bash
# 格式为 @repositrory_name//package_name:target_name
@myrepo//my/app/main:app_binary
//my/app/main:app_binary    # 同一个仓库
//my/app:app
//my/app     # 同上
```

#### Rules

* 指明输入文件和输出文件的关系；
* 生成输出文件的步骤。



## <center>命令</center>

#### bazel

* build

```bash
# 显示子命令
bazel build $target -s
bazel build $target --subcommands

# 显示详细错误
bazel build $target --verbose_failures --sandbox_debug

# 限制内存和 CPU
bazel build $target --local_cpu_resources=HOST_CPUS*.5 --local_ram_resources=HOST_RAM*.5
```

* clean

```bash
bazel clean
bazel clean --expunge
```

* fetch
* run
* info
* shutdown

## <center>文件</center>

#### WORKSPACE

* bind
  * 在 //external 中为目标指定一个别名

* local_repository
  * 引用其他目录中的目标

```bash
local_repository(
    name = "my-ssl",
    path = "/home/user/ssl",
)
```

* new_local_repository
  * 把本地目录变成一个仓库

```bash
new_local_repository(
    name = "my-ssl",
    path = "/home/user/ssl",
    build_file = "BUILD.my-ssl",
)
```

#### BUILD

* cc_binary

```bash
cc_binary(
    name = "hello-world",
    srcs = ["hello-world.cc"],
)
```

* cc_import
  * 导入 C/C++ 库

```bash
cc_import(
  name = "mylib",
  hdrs = ["mylib.h"],
  shared_library = "libmylib.so",
)
```

* cc_library

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

* cc_proto_library

* fdo_prefetch_hints

* fdo_profile

* propeller_optimize

* cc_test

* cc_toolchain

* cc_toolchain_suite

## <center>文档</center>

* [Concepts and Terminology](https://docs.bazel.build/versions/master/build-ref.html)
* [Workspace Rules](https://docs.bazel.build/versions/master/be/workspace.html)

