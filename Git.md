

#### 仓库
```bash
# 更改代码库地址
git remote set-url origin $new_url


# 显示某个版本的文件
git show $revision:$file_path

```


#### 日志
```bash
# 查看最近10条日志
git log -n 10

# 单行显示
git log --pretty=online

# 显示修改的文件
git log --name-only -10

# 显示修改的文件内容
git log --name-status -10

# 查看master的修改
git log -n20 --graph --pretty=oneline master
```

#### 工作区
```bash
# 储藏更改
git stash

# 储藏更改并说明原因
git stash push -m $message

# 查看现有储藏
git stash list

# 应用最近的储藏
git stash apply
```

#### 分支
```bash
#  新建分支
git checkout -b $branch_name

#  删除本地分支
git branch -d $branch_name

# 推送到远程分支
git push origin $branch_name

#显示全部分支
git branch -a
```

#### 合并
```bash
# 合并偏离投分支：放弃本地修改
git fetch origin
git reset --hard origin/master

#解决冲突状态：使用对方的修改
git checkout --theirs . 

# 撤销未完成的merge（merge时所在的分支）
git checkout $branch_name  #merge

# 撤销未完成的merge（merge前的版本号）
git reset --hard $commit_id

# 合并特定commit
git cherry-pick $commit_id
```
#### 回滚
```bash
#回滚到commit（之后的提交进入到缓冲区）
# git reset $commit_id

# 修改上一次的提交记录
git commit --amend

# 撤销一次commit
git reset --soft HEAD^

# 撤销add
git reset HEAD $file_name
```
