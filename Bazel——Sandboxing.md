---
tags: 开发工具
---



#### Sandboxing

* restricting file system access

###### `execroot/` directory

* constructed  for each action
* contains all input files to the action

###### Reasons for sandboxing

* not know if a tool uses undeclared input files
* incorrect reuse of cache entries creates problems during remote caching
* closely related to remote execution

###### Sandboxfs

* a FUSE file system
* exposes an arbitrary view of the underlying file system

#### Debugging

###### Deactivated namespaces

* On some platforms user namespaces are deactivated by default due to security concerns.

###### Detailed debugging for build failures

* If your build failed, use `--verbose_failures` and `--sandbox_debug` to make Bazel show the exact command.

[原文](https://docs.bazel.build/versions/master/sandboxing.html)

