---
tags: 开发工具
---

## <center>仓库</center>

###### <span style="background-color: orange">init</span>

###### <span style="background-color: orange">clone</span>

## <center>工作区</center>

###### <span style="background-color: orange">add</span>

###### <span style="background-color: orange">apply</span>

```bash
git apply $patch_file
```

###### <span style="background-color: orange">diff</span>

```bash
# 显示名称和状态
git diff master --name-status

# 显示commit和上一个commit的区别
git diff $commit^!

# 创建patch
git diff > $patch_file
git diff --binary $commit > $patch_file
```

###### <span style="background-color: orange">mv</span>

###### <span style="background-color: orange">rm</span>

```bash
#从仓库和本地文件删除
git rm $file_name

#递归删除目录
git rm -r $folder_name

#只从仓库删除
git rm --cached $file_name
```

###### <span style="background-color: orange">status</span>

```bash
# 不显示未跟踪的文件
git status --untracked-files=no
git status -u no
git status -uno
```

## <center>储藏</center>

###### <span style="background-color: orange">stash</span>

<span style="border-bottom: 2px solid orange">push</span>

```bash
# 储藏更改
git stash

# 储藏更改并说明原因
git stash push -m $message
git stash save $message
```
<span style="border-bottom: 2px solid orange">list</span>

```bash
#查看现有储藏
git stash list
```
<span style="border-bottom: 2px solid orange">show</span>

```bash
#显示储藏详情
git stash show $stash

#显示diff
git stash show -p stash@{1}
```

<span style="border-bottom: 2px solid orange">apply</span>

```bash
# 应用最近的储藏
git stash apply
git stash apply stash@{1}
```

<span style="border-bottom: 2px solid orange">pop</span>

```bash
#apply 之后 drop
```

<span style="border-bottom: 2px solid orange">drop</span>

```bash
# 删除一个储藏
```

## <center>提交</center>

###### <span style="background-color: orange">blame</span>

```bash
# 显示每一行代码的作者
```

###### <span style="background-color: orange">cherry-pick</span>

```bash
# 合并特定commit
git cherry-pick $commit_id...
```

###### <span style="background-color: orange">commit</span>

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

###### <span style="background-color: orange">log</span>

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

###### <span style="background-color: orange">reset</span>

![](http://zhouzm.cn/DailyNotes/assets/images/git%20reset.png)

<span style="border-bottom: 2px solid orange">--soft</span>

回退到某个版本 

```bash
# 撤销一次commit
git reset --soft HEAD^
```

<span style="border-bottom: 2px solid orange">--mixed</span> （默认）

重置暂存区与上一次提交

```bash
# 回滚到 commit
git reset $commit_id

# 撤销 add
git reset HEAD $file_name
```

<span style="border-bottom: 2px solid orange">--hard</span>

撤销工作区未提交内容，重置暂存区与工作区，并删除之前的所有信息提交

```bash
# 放弃本地修改、撤销未完成的pull
git reset --hard origin/master

# 撤销未完成的 merge（merge前的版本号）
git reset --hard $commit_id

# 放弃本地分支的commit
git reset --hard origin/$branch_name
```

###### <span style="background-color: orange">show</span>

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

## <center>分支</center>

###### <span style="background-color: orange">checkout</span>

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

###### <span style="background-color: orange">branch</span>

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

###### <span style="background-color: orange">merge</span>

```bash
# 取消合并
git merge --abort
```

###### <span style="background-color: orange">rebase</span>

```bash
# rebase master
git rebase master

# 解决冲突之后继续
git rebase --continue

# 多个commit合并成一个
git rebase -i HEAD~3
git rebase -i $prev_commit
```

## <center>远程</center>

###### <span style="background-color: orange">fetch</span>
```bash
# 拉取远程分支到本地
git fetch origin $branch_name
```

###### <span style="background-color: orange">pull</span>

```bash
# rebase 远程提交而不是 merge
git pull --rebase
```

###### <span style="background-color: orange">push</span>

```bash
# 推送到远程分支
git push origin $branch_name
```

###### <span style="background-color: orange">remote</span>

```bash
# 更改代码库地址
git remote set-url origin $new_url
```

## <center>高级</center>

###### <span style="background-color: orange">bisect</span>

###### <span style="background-color: orange">grep</span>

###### <span style="background-color: orange">ls-files</span>

```bash
# 显示修改的文件
git ls-files -m

# 恢复本地删除的文件
git ls-files -d | xargs -i git checkout {}
```

###### <span style="background-color: orange">sparse-checkout</span>

###### <span style="background-color: orange">restore</span>

###### <span style="background-color: orange">switch</span>

###### <span style="background-color: orange">symbolic-ref</span>
```bash
#显示当前所属分支
git symbolic-ref --short HEAD
```

###### <span style="background-color: orange">tag</span>

