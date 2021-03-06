---
tags: 开发工具
---

## 概念

![](http://zhouzm.cn/DailyNotes/assets/images/Git%E5%B7%A5%E4%BD%9C%E5%8C%BA%E3%80%81%E6%9A%82%E5%AD%98%E5%8C%BA%E3%80%81%E7%89%88%E6%9C%AC%E5%BA%93.jpg)



![](http://zhouzm.cn/DailyNotes/assets/images/Git%E5%9F%BA%E6%9C%AC%E6%93%8D%E4%BD%9C.jpg)

## git 命令

#### 仓库

###### 🔹init

###### 🔹clone

<center>🍉🍉🍉</center>

#### 工作区

###### 🔹add

###### 🔹apply

```bash
git apply $patch_file
```

###### 🔹diff

```bash
# 显示名称和状态
git diff master --name-status

# 显示commit和上一个commit的区别
git diff $commit^!

# 创建patch（可能包含二进制文件如图片）
git diff --binary $commit_or_branch > $patch_file
```


###### 🔹mv

###### 🔹rm

```bash
#从仓库和本地文件删除
git rm $file_name

#递归删除目录
git rm -r $folder_name

#只从仓库删除
git rm --cached $file_name
```



###### 🔹status

```bash
# 不显示未跟踪的文件
git status --untracked-files=no
git status -u no
git status -uno
```

<center>🍉🍉🍉</center>

#### 储藏

###### 🔹stash

```bash
#储藏更改
git stash

#储藏更改并说明原因
git stash push -m $message

#查看现有储藏
git stash list

#显示储藏详情
git stash show $stash

#显示diff
git stash show -p

#应用最近的储藏
git stash apply
git stash apply stash@{1}
```

<center>🍉🍉🍉</center>

#### 提交

###### 🔹blame

###### 🔹cherry-pick

```bash
# 合并特定commit
git cherry-pick $commit_id...
```



###### 🔹commit

```bash
# 参数
# --amend 修改上一次的提交记录
# -s 签名
# -a 提交全部修改或删除的文件（不包括新增）

# 公司提MR格式规范
git commit -sm "[SIM-xxx][BehaviorPlanning] message content"

# 弹出编辑器修改上一个commit message（没有push才能改）
git commit -s --amend
```



###### 🔹log

```bash
#最近10条日志
git log -n 10

#单行显示
git log --pretty=oneline
git log --oneline

#修改的文件
git log --name-only -10

#修改的文件内容
git log --name-status -10

#master的修改
git log -n20 --graph --pretty=oneline master

#显示分支名
git log --oneline --decorate -10

# 显示某个分支的修改
git log --oneline -10 $branch_name

#显示分支图
git log --oneline --decorate --graph -10
```



###### 🔹reset

![](http://zhouzm.cn/DailyNotes/assets/images/git%20reset.png)

```bash
# 撤销一次commit
git reset --soft HEAD^

# 回滚到 commit
git reset $commit_id

# 撤销 add
git reset HEAD $file_name

# 放弃本地修改
git reset --hard origin/master

# 撤销未完成的 merge（merge前的版本号）
git reset --hard $commit_id
```



###### 🔹show

```bash
# 显示某个版本的文件
git show $revision:$file_path

# 显示某个commit的修改
git show $commit

# 显示某个分支的文件
git show $branch_name:$file_path
```

<center>🍉🍉🍉</center>

#### 分支

###### 🔹checkout

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



###### 🔹branch

```bash
#显示当前分支
git branch --show-current

#删除本地分支
git branch -d $branch_name

#显示全部分支
git branch -a

#显示远程分支
git branch -r
```



###### 🔹merge

```bash
# 取消合并
git merge --abort
```



###### 🔹rebase

<center>🍉🍉🍉</center>

#### 远程

###### 🔹fetch
```bash
# 拉取远程分支到本地
git fetch origin $branch_name
```



###### 🔹pull

```bash
# rebase 远程提交而不是 merge
git pull --rebase
```



###### 🔹push

```bash
# 推送到远程分支
git push origin $branch_name
```



###### 🔹remote

```bash
# 更改代码库地址
git remote set-url origin $new_url
```

<center>🍉🍉🍉</center>

#### 其他

###### 🔹bisect

###### 🔹grep

###### 🔹ls-files

```bash
# 恢复本地删除的文件
git ls-files -d | xargs -i git checkout {}
```

###### 🔹sparse-checkout

###### 🔹restore

###### 🔹switch

###### 🔹symbolic-ref
```bash
#显示当前所属分支
git symbolic-ref --short HEAD
```

###### 🔹tag
