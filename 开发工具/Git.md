---
tags: 开发工具
---

<center> 概念</center>

| 名称 | 含义               |
| ---- | ------------------ |
| HEAD | 当前活跃分支的游标 |

<center>范围表示</center>

| 方法              | 例子       | 含义                                                         |
| ----------------- | ---------- | ------------------------------------------------------------ |
| \<sha1>           |            |                                                              |
| \<refname>        | master     | 符号引用                                                     |
| @                 |            | HEAD                                                         |
| \<refname>@{\<n>} | master@{1} | 该引用之前的第 n 个值                                        |
| \<rev>^、\<rev>^n |            | 直接父提交                                                   |
| \<rev>~\<n>       |            | 第 n 个祖先提交                                              |
| :/\<text>         |            | 提交信息匹配正则表达式的最近一次提交                         |
| ^\<rev>           |            | 不包含从 rev 可以追踪到的提交                                |
| \<rev1>..\<rev2>  |            | 包含从 rev2 可以追踪到的所有提交，但是不包含从 rev1 可以追踪到的提交 |
| \<rev1>…\<rev2>   |            | 包含从 rev1 或者 rev2 可以追踪到的提交，但是不包含从两者都可以追踪到的提交 |
| \<rev>^@          |            | 代表 rev 所有的父提交，但是不包含它自己                      |
| \<rev>^!          | HEAD^!     |                                                              |

<center>命令</center>


* diff

```bash
# 显示名称和状态
git diff master --name-status

# 显示commit和上一个commit的区别
git diff $commit^!

# 创建patch
git diff > $patch_file
git diff --binary $commit > $patch_file
```

* log

```bash
# 最近10条日志
git log -n 10

# 单行显示
git log --pretty=oneline
git log --oneline

# 修改的文件
git log --name-only -10
git log --name-status -10

# 显示分支名
git log --oneline --decorate -10

# 显示某个分支的修改
git log --oneline -10 $branch_name

# 显示分支图
git log --oneline --decorate --graph -10

# 在所有历史查找文件
git log --all --full-history -- "**/thefile.*"
```

* reset

![](http://zhouzm.cn/DailyNotes/assets/images/git%20reset.png)

`--soft`：回退到某个版本 

```bash
# 撤销一次commit
git reset --soft HEAD^
```

`--mixed` （默认）：重置暂存区与上一次提交

```bash
# 回滚到 commit
git reset $commit_id

# 撤销 add
git reset HEAD $file_name
```

`--hard`：撤销工作区未提交内容，重置暂存区与工作区，并删除之前的所有信息提交

```bash
# 放弃本地修改、撤销未完成的pull
git reset --hard origin/master

# 撤销未完成的 merge（merge前的版本号）
git reset --hard $commit_id

# 放弃本地分支的commit
git reset --hard origin/$branch_name
```

* show

```bash
# 显示某个版本的文件
git show $revision:$file_path
git show $branch_name:$file_path

# 显示commit/stash的diff
git show $commit
git show -p $commmit
git show stash@{0}
git show -p stash@{0}

# 只显示名称
git show --name-status stash@{0}
```


* checkout

```bash
# 新建分支
git checkout -b $branch_name

# 解决冲突状态：使用对方的修改
git checkout --theirs . 

# 撤销未完成的merge（merge时所在的分支）
git checkout $branch_name

# 检出某个版本的文件
git checkout $commit_id $file_name
git checkout $branch_name $file_name

# 撤销删除的文件/目录
git checkout HEAD $file_name
```

* rebase

```bash
# rebase master
git rebase master

# 解决冲突之后继续
git rebase --continue

# 多个commit合并成一个
git rebase -i HEAD~3
git rebase -i $prev_commit
```


* remote

```bash
# 更改代码库地址
git remote set-url origin $new_url
```

* ls-files

```bash
# 显示修改的文件
git ls-files -m

# 恢复本地删除的文件
git ls-files -d | xargs -i git checkout {}
```

* rev-parse

```bash
# 显示master的最新commit id
git rev-parse master
```

* symbolic-ref

```bash
#显示当前所属分支
git symbolic-ref --short HEAD
```

* reflog

一般用来恢复本地错误操作（比如git push --force）



