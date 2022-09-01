---
tags: 开发工具
---



## <center>Phases of a build</center>

#### Loading phase

* All the necessary <hu>BUILD files</hu> for the initial targets, and their transitive closure of dependencies, are loaded, parsed, evaluated and cached

#### Analysis phase

* Semantic analysis and validation of each <hu>build rule</hu>
* Construction of a <hu>build dependency graph</hu>
* Determination of exactly what work is to be done in each step of the build

#### Execution phase

* ensures that the <hu>outputs</hu> of each step in the build are consistent with its inputs
* re-running compilation/linking/etc

## <center>Client/server implementation</center>

#### Server

* A <hu>long-lived</hu> server process
* <hu>Caches</hu> of BUILD files, dependency graphs, and other metadata
* Improves the speed of incremental builds
* The name of a Bazel server process appears in the output of `ps x` or `ps -e f`

#### Client

* `bazel` command
* Finds the server based on the output base, which by default is determined by the path of the base workspace directory and your userid
* If the client cannot find a running server instance, it starts a new one
* Will stop after a period of inactivity (3 hours, by default, which can be modified using the startup option `--max_idle_secs`)

## <center>.bazelrc, the Bazel configuration file</center>

specify unchanged options

#### Imports

###### import

###### try-import

#### Option defaults

#### --config





[原文](https://docs.bazel.build/versions/4.1.0/guide.html#phases-of-a-build)

