---
tags: 开发工具
---

## 命令

#### 仓库

###### 💻init

###### 💻clone

<center>🍉</center>

#### 工作区

###### 💻add

###### 💻apply

```bash
git apply $patch_file
```

###### 💻diff

```bash
# 显示名称和状态
git diff master --name-status

# 显示commit和上一个commit的区别
git diff $commit^!

# 创建patch（可能包含二进制文件如图片）
git diff --binary $commit_or_branch > $patch_file
```

###### 💻mv

###### 💻rm

```bash
#从仓库和本地文件删除
git rm $file_name

#递归删除目录
git rm -r $folder_name

#只从仓库删除
git rm --cached $file_name
```

###### 💻status

```bash
# 不显示未跟踪的文件
git status --untracked-files=no
git status -u no
git status -uno
```

<center>🍉</center>

#### 储藏

###### 💻stash

push

```bash
# 储藏更改
git stash

# 储藏更改并说明原因
git stash push -m $message
git stash save $message
```
list

```bash
#查看现有储藏
git stash list
```
show

```bash
#显示储藏详情
git stash show $stash

#显示diff
git stash show -p stash@{1}
```

apply

```bash
# 应用最近的储藏
git stash apply
git stash apply stash@{1}
```

pop

```bash
# apply 之后 drop
```

drop

```bash
# 删除一个储藏
```

<center>🍉</center>

#### 提交

###### 💻blame

```bash
# 显示每一行代码的作者
```

###### 💻cherry-pick

```bash
# 合并特定commit
git cherry-pick $commit_id...
```

###### 💻commit

```bash
# 参数
# --amend 修改上一次的提交记录
# -s 签名
# -a 提交全部修改或删除的文件（不包括新增）

# 公司提MR格式规范
git commit -sm "message"

# 弹出编辑器修改上一个commit message（没有push才能改）
git commit -s --amend
```

###### 💻log

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

###### 💻reset

![](http://zhouzm.cn/DailyNotes/assets/images/git%20reset.png)

<u>--soft</u>

回退到某个版本 

```bash
# 撤销一次commit
git reset --soft HEAD^
```

<u>--mixed</u> （默认）

重置暂存区与上一次提交

```bash
# 回滚到 commit
git reset $commit_id

# 撤销 add
git reset HEAD $file_name
```

<u>--hard</u>

撤销工作区未提交内容，重置暂存区与工作区，并删除之前的所有信息提交

```bash
# 放弃本地修改、撤销未完成的pull
git reset --hard origin/master

# 撤销未完成的 merge（merge前的版本号）
git reset --hard $commit_id

# 放弃本地分支的commit
git reset --hard origin/$branch_name
```

###### 💻show

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

<center>🍉</center>

#### 分支

###### 💻checkout

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

###### 💻branch

```bash
# 显示当前分支
git branch --show-current

# 删除本地分支
git branch -d $branch_name

# 强制删除本地未合并的分支
git branch -D $branch_name

# 显示全部分支
git branch -a

# 显示远程分支
git branch -r
```

###### 💻merge

```bash
# 取消合并
git merge --abort
```

###### 💻rebase

```bash
# rebase master
git rebase master

# 解决冲突之后继续
git rebase --continue

# 多个commit合并成一个
git rebase -i HEAD~3
git rebase -i $prev_commit
```

<center>🍉</center>

#### 远程

###### 💻fetch
```bash
# 拉取远程分支到本地
git fetch origin $branch_name
```

###### 💻pull

```bash
# rebase 远程提交而不是 merge
git pull --rebase
```

###### 💻push

```bash
# 推送到远程分支
git push origin $branch_name
```

###### 💻remote

```bash
# 更改代码库地址
git remote set-url origin $new_url
```

<center>🍉</center>

#### 其他

###### 💻bisect

###### 💻grep

###### 💻ls-files

```bash
# 恢复本地删除的文件
git ls-files -d | xargs -i git checkout {}
```

###### 💻sparse-checkout

###### 💻restore

###### 💻switch

###### 💻symbolic-ref
```bash
#显示当前所属分支
git symbolic-ref --short HEAD
```

###### 💻tag

<center>🍉🍉🍉</center>

## 架构

![](http://zhouzm.cn/DailyNotes/assets/images/Git%E5%B7%A5%E4%BD%9C%E5%8C%BA%E3%80%81%E6%9A%82%E5%AD%98%E5%8C%BA%E3%80%81%E7%89%88%E6%9C%AC%E5%BA%93.jpg)



![](http://zhouzm.cn/DailyNotes/assets/images/Git%E5%9F%BA%E6%9C%AC%E6%93%8D%E4%BD%9C.jpg)