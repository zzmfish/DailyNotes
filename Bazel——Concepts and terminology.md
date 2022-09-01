---
tags: 开发工具
---



## <center>Workspace, packages and targets</center>

#### Workspace

* source files
* symbolic links to directories that contain the build outputs

###### WORKSPACE file

* contains references to external dependencies required to build the outputs
* Directories containing a WORKSPACE file are considered the <hu>root</hu> of a workspace
* Directory trees in a workspace rooted at a subdirectory containing a WORKSPACE file are ignored

#### Repositories
###### Root of the main repository

* directory containing the WORKSPACE file
* also called <hu>@</hu>

###### External repository

* defined in the WORKSPACE file using workspace rules

#### Packages

* a collection of related files and a specification of the dependencies among them
* contains a  BUILD file

#### Targets

###### Files

* Source files
* Generated files

###### Rules

* The **relationship** between a set of **input** and a set of **output** files；

* The necessary **steps** to derive the outputs from the inputs

###### Package groups

* Sets of packages whose purpose is to **limit accessibility** of certain rules

#### Labels

* The **name** of a target

```bash
@myrepo//my/app/main:app_binary

# same repository
//my/app/main:app_binary

# equals to "//my/app:app"
//my/app

# equals to ":app"、"//my/app"、"//my/app:app"
app
```



## <center>BUILD files</center>

* Every package contains a BUILD file

* Evaluated using an imperative language **Starlark**
* Order does matter
* **Functions** should be declared in **.bzl**  files

#### Loading an extension

* Bazel extensions are files ending in **.bzl**
* Use the **load** statement to import a symbol from an extension.
* Symbols starting with **_** are not exported

```python
load("//foo/bar:file.bzl", "some_library")

# alias
load("//foo/bar:file.bzl", library_alias = "some_library")   

# multiple aliases
load(":my_rules.bzl", "some_rule", nice_alias = "some_other_rule")
```

## <center>Types of build rule</center>

#### *_binary rules

* Build executable programs
* The executable will reside in the build tool's binary output tree at the corresponding name for the rule's label, so `//my:program` would appear at (e.g.) `$(BINDIR)/my/program`
* Create a runfiles directory containing all the files mentioned in a **data** attribute belonging to the rule, or any rule in its transitive closure of dependencies

<br>

#### *_test rules

* for automated testing

<br>

#### *_library rules

* specify separately-compiled modules in the given programming language

## <center>Dependencies</center>

* Induces a **Directed Acyclic Graph (DAG)** over targets, and we call this a **dependency graph**
*  A target's **direct dependencies** are those other targets reachable by a path of length 1 in the dependency graph
* A target's **transitive dependencies** are those targets upon which it depends via a path of any length through the graph.

#### Actual and declared dependencies

#### Types of dependencies

#### Using labels to reference directories

[原文](https://docs.bazel.build/versions/4.1.0/build-ref.html)

