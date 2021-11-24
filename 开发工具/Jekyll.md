---
tags: 开发工具 Web开发
---

## 概念

#### RubyGems

RubyGems 是 Ruby 的一个包管理器，它提供一个分发 Ruby 程序和库的标准格式，还提供一个管理程序包安装的工具。

RubyGems 旨在方便地管理 gem 安装的工具，以及用于分发 gem 的服务器。这类似于 Ubuntu 下的apt-get, Centos 的 yum，Python 的 pip。

## 命令

#### Ubuntu下安装

```bash
# Install Ruby and other prerequisites
sudo apt-get install ruby-full build-essential zlib1g-dev

# add environment variables
echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc

# install Jekyll and Bundler
gem install jekyll bundler
```

#### 新建网站

```bash
# 新建一个网站
jekyll new jekyll

# 修改Gemfile之后要更新
bundle install
```

#### 启动服务
```bash
# 启动localhost:4000服务
bundle exec jekyll serve
```

## 主题

* [Minima](https://github.com/jekyll/minima)
* [Minimal Mistakes](https://github.com/mmistakes/minimal-mistakes)

## 显示数学公式

```html
<script type="text/javascript" async
  src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-MML-AM_CHTML">
</script>
```

## 文档

* [Posts](https://jekyllrb.com/docs/posts/)
* [Pages](https://jekyllrb.com/docs/pages/)
* [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/docs/quick-start-guide/)