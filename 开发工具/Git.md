### 主要命令

##### add
添加文件内容至索引

##### bisect
通过二分查找定位引入 bug 的提交


##### branch
列出、创建或删除分支
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
#新建分支
git checkout -b $branch_name

#解决冲突状态：使用对方的修改
git checkout --theirs . 

# 撤销未完成的merge（merge时所在的分支）
git checkout $branch_name
```

##### cherry-pick
```bash
# 合并特定commit
git cherry-pick $commit_id
```



##### clone
克隆仓库到一个新目录




##### commit
记录变更到仓库
```bash
# 修改上一次的提交记录
git commit --amend
```

##### diff
显示提交之间、提交和工作区之间等的差异

##### fetch
从另外一个仓库下载对象和引用
```bash
#拉取远程分支到本地
git fetch origin $branch_name
```



##### grep
输出和模式匹配的行

##### init
创建一个空的 Git 仓库或重新初始化一个已存在的仓库



##### log
显示提交日志
```bash
#最近10条日志
git log -n 10

#单行显示
git log --pretty=online

#修改的文件
git log --name-only -10

#修改的文件内容
git log --name-status -10

#master的修改
git log -n20 --graph --pretty=oneline master
```

##### merge
合并两个或更多开发历史
```bash
# 取消合并
git merge --abort
```




##### mv
移动或重命名一个文件、目录或符号链接


##### pull
获取并整合另外的仓库或一个本地分支

##### push
更新远程引用和相关的对象
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
恢复工作区文件



##### rebase
在另一个分支上重新应用提交

##### reset
重置当前 HEAD 到指定状态
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
从工作区和索引中删除文件
```bash
#从仓库和本地文件删除
git rm $file_name

#递归删除目录
git rm -r $folder_name

#只从仓库删除
git rm --cached $file_name
```

##### show
显示各种类型的对象
```bash
# 示某个版本的文件
git show $revision:$file_path
```

##### sparse-checkout
初始化及修改稀疏检出


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
显示工作区状态



##### switch
切换分支

##### tag
创建、列出、删除或校验一个 GPG 签名的标签对象




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




