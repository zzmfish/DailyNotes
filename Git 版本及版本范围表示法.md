---
tags: 开发工具
---



## 指定版本

###### \<sha1>



###### git describe 命令输出



###### \<refname>

符号引用，例如 `master` 通常代表 `refs/heads/master`。



###### @

HEAD



###### \<refname>@{\<date>}

如 `master@{yesterday}`、`HEAD@{5 minutes ago}`



###### \<refname>@{\<n>}

该引用之前的第 n 个值，如 `master@{1}` 代表 master 之前的值



###### @{-\<n>}

之前第 n 次检出的分支或者提交



###### \<rev>^

直接父提交，`^<n>` 代表第 n 个父提交



###### \<rev>~\<n>

第 n 个祖先提交



###### :/\<text>

提交信息匹配正则表达式的最近一次提交







## 指定范围

###### \<rev>

rev 的所有祖先



###### ^\<rev>

不包含从 rev 可以追踪到的提交



###### \<rev1>..\<rev2>

包含从 rev2 可以追踪到的所有提交，但是不包含从 rev1 可以追踪到的提交。



###### \<rev1>...\<rev2>

包含从 rev1 或者 rev2 可以追踪到的提交，但是不包含从两者都可以追踪到的提交



###### \<rev>^@

代表 rev 所有的父提交，但是不包含它自己



###### \<rev>^!



[阅读原文](https://www.cnblogs.com/sunsky303/p/11589229.html)