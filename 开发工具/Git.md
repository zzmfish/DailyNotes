### 主要命令

##### add
##### apply

```bash
git apply $patch_file
```

##### bisect

##### branch
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

##### checkout
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

##### cherry-pick
```bash
# 合并特定commit
git cherry-pick $commit_id
```

##### clone

##### commit
```bash
# 修改上一次的提交记录
git commit --amend
```

##### diff
```bash
# 显示名称和状态
git diff master --name-status

# 创建patch（可能包含二进制文件如图片）
git diff --binary $commit_or_branch > $patch_file
```

##### fetch
```bash
#拉取远程分支到本地
git fetch origin $branch_name
```

##### grep
##### init
##### log
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

#显示分支图
git log --oneline --decorate --graph -10
```

##### merge
```bash
# 取消合并
git merge --abort
```


##### mv

##### pull
##### push
```bash
#推送到远程分支
git push origin $branch_name
```


##### remote
```bash
#更改代码库地址
git remote set-url origin $new_url
```


##### restore
##### rebase
##### reset
```bash
#放弃本地修改
git reset --hard origin/master

#撤销未完成的merge（merge前的版本号）
git reset --hard $commit_id

#回滚到commit（之后的提交进入到缓冲区）
git reset $commit_id

#撤销一次commit
git reset --soft HEAD^

#撤销add
git reset HEAD $file_name
```

##### rm
```bash
#从仓库和本地文件删除
git rm $file_name

#递归删除目录
git rm -r $folder_name

#只从仓库删除
git rm --cached $file_name
```

##### show
```bash
# 示某个版本的文件
git show $revision:$file_path
# 显示某个分支的文件
git show $branch_name:$file_path
```

##### sparse-checkout

##### stash
```bash
#储藏更改
git stash

#储藏更改并说明原因
git stash push -m $message

#查看现有储藏
git stash list

#应用最近的储藏
git stash apply
git stash apply stash@{1}
```

##### status
```bash
# 不显示为跟踪的文件
git status --untracked-files=no
git status -u no
git status -uno
```

##### switch
##### tag



### 底层命令

##### ls-files
```bash
# 恢复本地删除的文件
git ls-files -d | xargs -i git checkout {}
```


##### symbolic-ref
```bash
#显示当前所属分支
git symbolic-ref --short HEAD

```




