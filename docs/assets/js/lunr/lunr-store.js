var store = [{
        "title": "0临时",
        "excerpt":"未分类  sar -n DEV -u ALL -r 1   自动添加crontab  crontab -l | { cat; echo \"0 * * * * /data/scripts/cleanup.sh\"; } | crontab -   #统计目录大小是多少m du -sm   #修改磁盘卷标 sudo e2label /dev/sda1 “Data1”   #安装rpm文件 rpm -ivh xxx.rpm   #时间戳转日期 date -d @1604685638   高德地图API     逆地理编码: https://restapi.amap.com/v3/geocode/regeo?key=41782f331ca7651be64145ba4a44ff01&amp;location=113.502781,23.129934  ","categories": [],
        "tags": [],
        "url": "/DailyNotes/2021/01/22/0%E4%B8%B4%E6%97%B6.html",
        "teaser": null
      },{
        "title": "面试问题",
        "excerpt":"计算机基础 TCP/IP TCP和UDP协议的区别 IPv4、IPv6地址是多少bit，我们一般使用哪个版本 什么是DHCP 局域网中的机器是怎样和外部通讯的 TCP怎样进行流量控制 Linux 进程间通讯：管道、共享内存、socket 进程和线程的区别 物理内存和虚拟内存的区别 常用linux命令（cd、pwd、ls、top、ps） 什么是用户态和内核态 编程语言 C++ 语法 虚函数 纯虚函数 STL vector list map set 原理 堆和栈 内存分配 内存释放/内存碎片 静态/动态链接库 智能指针： C++ 11 auto_ptr, shared_ptr, weak_ptr, unique_ptr 疑难问题 gdb 内存泄漏 段错误 野指针 Python 内建数据类型 int、bool、str、list、tuple、dict 怎样实现一个模块 with关键词 装饰器 怎样安装第三方包 怎样处理异常 怎样定义私有属性和方法 算法和数据结构...","categories": [],
        "tags": [],
        "url": "/DailyNotes/2021/02/08/%E9%9D%A2%E8%AF%95%E9%97%AE%E9%A2%98.html",
        "teaser": null
      },{
        "title": "中国省市县级区行政地图",
        "excerpt":"  ","categories": [],
        "tags": [],
        "url": "/DailyNotes/2021/02/22/%E4%B8%AD%E5%9B%BD%E7%9C%81%E5%B8%82%E5%8E%BF%E7%BA%A7%E5%8C%BA%E8%A1%8C%E6%94%BF%E5%9C%B0%E5%9B%BE.html",
        "teaser": null
      },{
        "title": "Bash",
        "excerpt":"运算符 算术运算 echo $(( 10 + 3 )) #求余数 echo `expr 5 % 4` 字符串 ${#str} #长度 ${str:pos} #从位置$pos开始提取子串 ${str:pos:len} #从位置$pos开始提取长度为$len的子串 ${str#substr} #从开头删除最短匹配的子串 ${str##substr} #从开头删除最长匹配的子串 ${str%substr} #从结尾删除最短匹配的子串 ${str%%substr} #从结尾删除最长匹配的子串 ${str/substr/replacement} #替换第一个匹配的子串 ${str//substr/replacement} #替换所有匹配的子串 ${str/#substr/replacement} #替换前缀匹配的子串 ${str/%substr/replacement} #替换后缀匹配的子串 流程控制 case case EXPRESSION in PATTERN_1) STATEMENTS ;; PATTERN_2) STATEMENTS ;; PATTERN_N) STATEMENTS...","categories": [],
        "tags": ["Linux"],
        "url": "/DailyNotes/2021/03/03/Bash.html",
        "teaser": null
      },{
        "title": "CSS",
        "excerpt":"/* 字体 */ body {     font-family: \"Microsoft YaHei\" }  pre { white-space: pre-wrap } /* pre允许文字折行 */ * { word-break:break-all }    /* 允许单词中间折行 */ * { white-space:nowrap }      /* 不折行 */  /*-- 选择子 --*/ div &gt; p { }      /* 孩子 */   div p { }        /* 子孙 */  ","categories": [],
        "tags": ["Web开发"],
        "url": "/DailyNotes/2021/03/03/CSS.html",
        "teaser": null
      },{
        "title": "Golang",
        "excerpt":"参数解释   import \"flag\" var value = flag.Int(\"name\", 0, \"help message\") flag.Parse()  ","categories": [],
        "tags": ["编程语言"],
        "url": "/DailyNotes/2021/03/03/Golang.html",
        "teaser": null
      },{
        "title": "JavaScript",
        "excerpt":"基础数据类型 //获取object的keys Object.keys(obj) //在数据前面添加元素 array.unshift(elem) DOM // 删除节点 node.removeChild(child); // 监听DOMContentLoaded事件 document.addEventListener(\"DOMContentLoaded\", function(event) { alert('document is loaded!'); }); // 当前脚本路径 var scripts = document.getElementsByTagName(\"script\"), var src = scripts[scripts.length-1].src; var src = document.currentScript; // 使用XPath查询 var result = document.evaluate('//input', document, null/*命名空间*/, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null/*结果集，null为新建*/); // 新窗口输出html var doc = window.open().document; doc.open(); doc.write('hello');...","categories": [],
        "tags": ["编程语言","Web开发"],
        "url": "/DailyNotes/2021/03/03/JavaScript.html",
        "teaser": null
      },{
        "title": "Jekyll",
        "excerpt":"命令   # 新建一个网站 jekyll new jekyll  # 修改Gemfile之后要更新 bundle install  # 启动localhost:4000服务 bundle exec jekyll serve   主题      Minima   Minimal Mistakes   显示数学公式   &lt;script type=\"text/javascript\" async   src=\"https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-MML-AM_CHTML\"&gt; &lt;/script&gt;   文档      Posts   Pages   Minimal Mistakes  ","categories": [],
        "tags": ["开发工具","Web开发"],
        "url": "/DailyNotes/2021/03/03/Jekyll.html",
        "teaser": null
      },{
        "title": "MongoDB",
        "excerpt":"数据库 库 //当前数据库： db db.getName() 集合 //重命名集合 db.colname.renameCollection('new_name') 索引 //查看索引 db.colname.getIndexes() //创建TTL索引 db.colname.createIndex({\"fieldname\": 1}, { background: true, expireAfterSeconds: 3600 } ) 查询 find //时间范围： db.colname.find({fieldname: {$lt: new Date('2017-05-10')}}) //正则匹配： db.colname.find({fieldname: /pattern/}) //字段存在： db.colname.find({fieldname: {$exists: true}}) //字段非空： db.colname.find({fieldname: {$ne: null}}) //格式化显示 db.colname.find().forEach(function(item) { print(item.create_at.toLocaleFormat('%Y%m%d %H%M%S'), '\\t', item.account, '\\t', item.balance, '\\t', item.category...","categories": [],
        "tags": ["数据库"],
        "url": "/DailyNotes/2021/03/03/MongoDB.html",
        "teaser": null
      },{
        "title": "Python2",
        "excerpt":"reload(sys) sys.setdefaultencoding('utf-8') 日志 日期时间 datetime.datetime.now() （当前datetime） time.localtime() （当前struct_time） time.time() （当前时间戳） time.localtime(time.time() - 24 * 3600) （昨天的日期时间） time.strptime(‘2014/12/12’, ‘%Y/%m/%d’) （字符串 -&gt; struct_time） time.localtime(ts) （unix时间戳 -&gt; struct_time） datetime.datetime.now().strftime(‘%Y-%m-%d’) （当前日期字符串） 网络 req = urllib2.Request(url = url, data = data) （HTTP请求） urllib2.urlopen(req).read() （设置默认编码 解决UnicodeEncodeError: ‘ascii’ codec can’t encode异常错误） import sys reload(sys) sys.setdefaultencoding(‘utf8’) （以指定编码打开文件） f...","categories": [],
        "tags": ["编程语言"],
        "url": "/DailyNotes/2021/03/03/Python2.html",
        "teaser": null
      },{
        "title": "RPM软件管理",
        "excerpt":"RPM软件管理   #安装软件包 rpm -i $rpm_file  #显示软件包信息 rpm -qpi $rpm_file  #卸载软件包 rpm -e $package_name  #查找已安装的软件包 rpm -qa  | grep $keyword   #查看安装的文件 rpm -ql $package_name  #查看软件版本 yum list $package_name —showduplicates  ","categories": [],
        "tags": ["Linux"],
        "url": "/DailyNotes/2021/03/03/RPM%E8%BD%AF%E4%BB%B6%E7%AE%A1%E7%90%86.html",
        "teaser": null
      },{
        "title": "Redis",
        "excerpt":"命令 运行 redis-server redis-server --port 6379 redis-server redis.conf --port 6379 redis-server --bind 0.0.0.0 删除一定模式的key redis-cli keys beh_sim_* | xargs redis-cli del 性能测试 ./redis-benchmark -q -n 100000 命令 scan 0 count 10 （显示0-10个key） info keyspace （显示key的数量） flushdb （清空数据库） keys * （显示全部key） 数据类型 列表 BLPOP key [key …] timeout：删除并返回第一个元素 BRPOP key [key...","categories": [],
        "tags": ["数据库"],
        "url": "/DailyNotes/2021/03/03/Redis.html",
        "teaser": null
      },{
        "title": "SSH",
        "excerpt":"无密码登录 # 1、我的电脑 ssh-keygen -t rsa cat ~/.ssh/id_rsa.pub #Ctrl+C 复制 # 2、服务器 vi /.ssh/authorized_keys #Ctrl+V 粘贴 chmod 700 ~ chmod 700 ~/.ssh chmod 600 ~/.ssh/authorized_keys 反向代理 # 解析：host2:port2 &lt;- - -&gt; localhost &lt;- - -&gt;  ( user1@host1:ssh_port ) - - -port1 # 参数： # -R：反向端口映射 # -N：不执行shell # -C：压缩 ssh...","categories": [],
        "tags": ["Linux","网络"],
        "url": "/DailyNotes/2021/03/03/SSH.html",
        "teaser": null
      },{
        "title": "Tmux",
        "excerpt":"命令 tmux new-session -s $session_name tmux list-sessions tmux attach -t $session_name # 断网重连如果卡死，就调用这个 tmux detach-client 配置文件 set -g prefix C-a set -g base-index 1 # 窗口编号从 1 开始计数 set -g display-panes-time 10000 # PREFIX-Q 显示编号的驻留时长，单位 ms set -g mouse on # 开启鼠标 set -g pane-base-index 1 # 窗格编号从 1 开始计数...","categories": [],
        "tags": ["Linux"],
        "url": "/DailyNotes/2021/03/03/Tmux.html",
        "teaser": null
      },{
        "title": "gRPC",
        "excerpt":"安装   C++  # 参考: https://grpc.io/docs/languages/cpp/quickstart/ git clone --recurse-submodules -b v1.33.2 https://github.com/grpc/grpc  cd grpc mkdir -p cmake/build  pushd cmake/build cmake -DgRPC_INSTALL=ON \\       -DgRPC_BUILD_TESTS=OFF \\       -DCMAKE_INSTALL_PREFIX=$MY_INSTALL_DIR \\       ../.. make -j make install  popd  ","categories": [],
        "tags": ["中间件"],
        "url": "/DailyNotes/2021/03/03/gRPC.html",
        "teaser": null
      },{
        "title": "人性的弱点",
        "excerpt":"第一章 人际交往的基本技巧   规则1：不要批评、职责或抱怨     批评的效果其实是极其有限的，因为它通常会把事情推向相反的方向   富兰克林：我从不议论别人的缺点，我只说我所看到的每个人的优点   规则2：给予对方真诚地赞美     弗洛伊德认为，人类做每件事的动机都源于两方面：性的冲动和出人头地的愿望   赞美和奉承的区别：前者是虚伪的，后者是虚伪的   规则3：引起别人的渴望     世界上唯一能够对别人施加影响的方法就是提及他们的需要，并告诉他们如何达到目的   能够换位思考的人，能设身处地想他人之所想的人，根本不必为前程担忧   在人类本性中，自我表达的需求具有支配地位   第二章 六个让人们喜欢你的方法  规则1：真诚地关心别人   规则2：微笑  ","categories": [],
        "tags": ["读书","个人提升"],
        "url": "/DailyNotes/2021/03/03/%E4%BA%BA%E6%80%A7%E7%9A%84%E5%BC%B1%E7%82%B9.html",
        "teaser": null
      },{
        "title": "刻意练习思维导图",
        "excerpt":"  ","categories": [],
        "tags": ["读书","思维导图","个人提升"],
        "url": "/DailyNotes/2021/03/03/%E5%88%BB%E6%84%8F%E7%BB%83%E4%B9%A0%E6%80%9D%E7%BB%B4%E5%AF%BC%E5%9B%BE.html",
        "teaser": null
      },{
        "title": "大数据时代",
        "excerpt":"大数据时代   第一部分 大数据时代的思维变革  更多：不是随机样本，而是全体数据      采样分析的精确性随着采样随机性的增加而大幅提高，但与样本数量的增加关系不大。       随机采样不适合考察子类别的情况。       大数据是指不用随机分析法这样的捷径，而采用所有数据的方法。       拥有全部或几乎全部的数据，我们就能够从不同的角度，更细致地观察和研究数据的方方面面。   ","categories": [],
        "tags": ["读书","大数据"],
        "url": "/DailyNotes/2021/03/03/%E5%A4%A7%E6%95%B0%E6%8D%AE%E6%97%B6%E4%BB%A3.html",
        "teaser": null
      },{
        "title": "日本移动互联网兴衰启示录",
        "excerpt":"日本移动互联网兴衰启示录 NTT 国有企业 封闭 i-mode 海外复制失败 一个用户体验良好的移动互联网生态体系要成功，必须要有产业链强势一方对整条产业链进行有效控制 苹果以iPhone手机硬件作为切入口，比i-mode通过运营商服务作为切入口进入全球容易得多 去电信化：金融、多媒体、商业、医疗、物联网、…… KDDI 稻盛和夫：让日本民众涌上价格低廉的电话 SmartPass：每月交390日元，就可以免费下载由KDDI打包买下的500多个手机App；享受优惠券、保险等业务 抓住年轻人 投资GREE等公司 软银 收购沃达丰日本公司 价格战：网内免费 市场中较小的运营商，是非常适合发动价格战的。而一个饱和的市场中，市场领先的运营商则会在价格战中束手束脚。 引入iPhone 日本手机支付 日本政府对小额支付政策的放松 日本发达的连锁业务，也为移动支付得普及铺平了道路 在中国，不管是运营商还是银联，都希望大包大揽，自己将整个产业链上下游通吃。两大阵营互补相让，这是目前阻碍中国移动支付普及的重要障碍。 NFC的问题在于普及成本过高，涉及的产业链各个环节过长 轨道交通与日本移动互联网 日本人平均每天华仔上班路上的时间是70分钟，曾是这段无聊的时间，极大地推动了日本移动互联网的发展 中国的大城市未来会更像日本，而不是美国，最主要的问题在于人口密度 美国是一个地广人稀的国家，大部分美国人散居在城市周围的一些小城镇上，所以有着发达的汽车文化 日本的手机社交网络 日本的Facebook —— Mixi兴衰记 邀请加入 日本人使用社交网络的习惯和美国用户有着很大的区别 不愿意在网上透露自己的真实信息，他们用假的网名写日记，发图片 更愿意停留在自己的朋友圈中，很少向陌生人敞开心扉 在即时通讯方面的天生劣势导致了用户的离奇 在智能手机时代仍然坚持会员邀请制度，被认为是不合时宜的 在中国的扩张 —— “蜜秀”同样也非常失败 “外来户”Facebook如何后来局上 全球性社交网络优势正日趋明显 使用实名的Facebook更容易找到自己之前的朋友 Mixi主要是在学生和年轻白领中流行，Facebook则受到更多商务人群的青睐 2011年日本大地震的爆发，大大加速了Facebook在日本的普及 日本用户数在《社交网络》影片播出后 Line：日本版“微信”的崛起之路 搭上了智能手机在日本和全世界高速普及的这艘大船 非常强调Line的日本身份...","categories": [],
        "tags": ["读书"],
        "url": "/DailyNotes/2021/03/03/%E6%97%A5%E6%9C%AC%E7%A7%BB%E5%8A%A8%E4%BA%92%E8%81%94%E7%BD%91%E5%85%B4%E8%A1%B0%E5%90%AF%E7%A4%BA%E5%BD%95.html",
        "teaser": null
      },{
        "title": "程序员的思维修炼",
        "excerpt":"从新手到专家的历程 👷 新手 只是想实现一个立竿见影的目标 👷 高级新手 能够开始摆脱固定的规则 👷 胜任者 能够建立问题的概念模型，并有效地使用它们 👷 精通者 全局思维 寻找并想了解更大的概念框架 👷 专家 根据直觉工作，而不需要理由 认识你的大脑 L型 线性、逻辑思维和语言处理 让你细致工作并实现目标 R型 搜索和模式匹配 直觉、问题解决和创造性 随时记录想法 成为专家所必须 利用右脑 1、多感官反馈 增强理解和记忆非常有效的方法 2、定期改变环境 3、隐喻 4、幽默 在不同的想法中制造新奇的联系 5、非目标驱动的思维方式 把一切都写在纸上，然后不去管它 只要简单地记住它 调试你的大脑 🔍 自私的偏见 项目的成功是我的功劳，失败则与我无关 🔍 曝光效应 我们往往只因为非常熟悉某些事物而对它有所偏好 🔍 “很少”不意味着“没有” 🔍 不要过早地下结论 减少了你的选择，甚至可能消除了成功的选择。 🔍 好记性不如烂笔头...","categories": [],
        "tags": ["读书","个人提升"],
        "url": "/DailyNotes/2021/03/03/%E7%A8%8B%E5%BA%8F%E5%91%98%E7%9A%84%E6%80%9D%E7%BB%B4%E4%BF%AE%E7%82%BC.html",
        "teaser": null
      },{
        "title": "自动驾驶汽车技术",
        "excerpt":"  ","categories": [],
        "tags": ["自动驾驶","思维导图"],
        "url": "/DailyNotes/2021/03/03/%E8%87%AA%E5%8A%A8%E9%A9%BE%E9%A9%B6%E6%B1%BD%E8%BD%A6%E6%8A%80%E6%9C%AF.html",
        "teaser": null
      },{
        "title": "自控力：01 什么是自控力",
        "excerpt":"什么是自控力   三种力量  😊 我要做：枯燥、困难或充满压力的工作   😣 我不要：克制一时的冲动   🤑 我想要：记录目标和愿望   为什么          适应环境、与人合作、维持关系            活得更幸福       神经学原理  前额皮质     两个自我     一个自我任意妄为、及时行乐 😈        一个自我克服冲动、深谋远虑 😊       关键在于学会利用原始本能，而不是反抗这些本能   怎么做  认识你自己  在作决定的时候，你必须意识到自己此刻需要意志力   训练大脑  如果你经常让大脑冥想，它会提升你的自控力，提升你集中注意力、管理压力、克制冲动和认识自我的能力   5分钟训练     原地不动，安静坐好   注意你的呼吸   感受呼吸，弄清自己是怎么走神的  ","categories": [],
        "tags": ["读书","个人提升"],
        "url": "/DailyNotes/2021/03/03/%E8%87%AA%E6%8E%A7%E5%8A%9B-01-%E4%BB%80%E4%B9%88%E6%98%AF%E8%87%AA%E6%8E%A7%E5%8A%9B.html",
        "teaser": null
      },{
        "title": "自控力：02 意志力的本能",
        "excerpt":"应激反应 🐻 危险逼近 大脑杏仁体 ↝ 信号 ➔ 应激反应 肾上腺 ↝ 压力荷尔蒙 脂肪和糖 ➔ 能量 ➔ 血液和肝脏 空气 ➔ 肺部 抑制前额皮质 ➔ 更加冲动 🍰 原始欲望 大脑 ↝ 多巴胺 ➔ 注意力、动机和行动区域 血糖降低、头晕目眩 意志力本能 神经学原理 意识到了内在冲突 前额皮质 ➔ 传递自控要求 ➔ 降低控制心率、血压、呼吸的大脑区域的运转速度 身体进入平静状态 心率变异度 吸气 ➔ 交感神经 ➔ 加速身体运动 ➔ 心率升高 呼气 ➔ 副交感神经...","categories": [],
        "tags": ["读书","个人提升"],
        "url": "/DailyNotes/2021/03/03/%E8%87%AA%E6%8E%A7%E5%8A%9B-02-%E6%84%8F%E5%BF%97%E5%8A%9B%E7%9A%84%E6%9C%AC%E8%83%BD.html",
        "teaser": null
      },{
        "title": "软件",
        "excerpt":"WinFsp is a set of software components for Windows computers that allows the creation of user mode file systems. SSHFS-Win is a minimal port of SSHFS to Windows. Under the hood it uses Cygwin for the POSIX environment and WinFsp for the FUSE functionality. SSHFS-Win Manager is a GUI for...","categories": [],
        "tags": ["Windows"],
        "url": "/DailyNotes/2021/03/03/%E8%BD%AF%E4%BB%B6.html",
        "teaser": null
      },{
        "title": "Ubuntu",
        "excerpt":"常用软件 Terminator终端 Monaco字体 gThumb 图片浏览、编辑；支持webp Ubuntu 16.04 Destop Sharing禁用加密 1、安装dconf Editor，然后启动 sudo apt install dconf-editor 2、跳转到org -&gt; gnome -&gt; desktop -&gt; remote-access 3、取消require-encryption选项 软件管理 # 已安装软件包 dpkg -l dpkg -l | grep $keyword # 已安装软件包的文件位置 dpkg -L $package_name dpkg --listfiles $package_name # 库中软件信息 apt-cache show $package_name systemctl # 列出全部服务 systemctl...","categories": [],
        "tags": ["Linux"],
        "url": "/DailyNotes/2021/03/05/Ubuntu.html",
        "teaser": null
      },{
        "title": "Linux技巧",
        "excerpt":"生成core dump文件   # 检查core文件大小限制 ulimit -a | grep 'core'  # 设置core文件大小限制 # 不限制 ulimit -c unlimited # 限制大小为1024 ulimit -c 1024 # 限制大小为0，即不输出core文件 ulimit -c 0  # 设置core dump文件的输出路径 echo \"/tmp/cores/core.%p\" &gt; /proc/sys/kernel/core_pattern   ","categories": [],
        "tags": [],
        "url": "/DailyNotes/2021/03/06/Linux%E6%8A%80%E5%B7%A7.html",
        "teaser": null
      },{
        "title": "Linux命令",
        "excerpt":"常用命令 crontab # 添加crontab crontab -l | { cat; echo \"0 * * * * mycommand\"; } | crontab - find # 修改时间 &lt; 24h（不到1天） find -mtime 0 find -mtime -1 # 24h &lt;= 修改时间 &lt; 48h（1天不到2天） find -mtime 1 # 修改时间 &gt;= 48h find -mtime +1 # 修改时间 &lt;...","categories": [],
        "tags": ["Linux","网络"],
        "url": "/DailyNotes/2021/03/09/Linux%E5%91%BD%E4%BB%A4.html",
        "teaser": null
      },{
        "title": "RabbitMQ",
        "excerpt":"目录 日志目录: /var/log/rabbitmq/ 配置文件: /etc/rabbitmq/rabbitmq.conf rabbitmqctl # 显示vhost列表 rabbitmqctl list_vhosts # 创建用户名密码 rabbitmqctl add_user $user $password # 显示用户列表 rabbitmqctl list_users # 用户授权给vhost \"/\" rabbitmqctl set_permissions -p \"/\" $user \".*\" \".*\" \".*\" WebUI # 启动Web UI # http://localhost:15672 rabbitmq-plugins enable rabbitmq_management # 设置用户权限 rabbitmqctl set_user_tags $user administrator 参考 Tutorial 1: Hello...","categories": [],
        "tags": [],
        "url": "/DailyNotes/2021/03/19/RabbitMQ.html",
        "teaser": null
      },{
        "title": "第一本无人驾驶技术书：08 无人驾驶的行为预测",
        "excerpt":"总体架构 感知 定位服务：无人车主车本身 在哪里 高精地图：配合定位模块提供 定位地图；对感知模块的 先验补充 环境感知：利用 传感器 得到的实时数据，检测 和 追踪 周边物体 行为预测 规划控制（广义） 行为预测：基于 感知模块 的检测结果，最这些物体的 短时间未来行为 作出预测 路由导航 行为决策 动作规划 低层控制 分类问题 问题拆解 车辆 是否 会沿 某一特定道路序列 行进 特征设计 数据帧概念：某一个时刻t对应的所有已知最新数据 预测目标车辆的历史属性 时刻t对应的位置、速度、姿态 时间窗口[t-w, t-1]内的运动属性 时间窗口内行驶所遵循的道路序列的形状特征 预测目标道路序列的属性 均匀抽取样点 朝向、曲率、与道路边界的距离 周边物体的特征 前车和后车距离目标车辆投影位置的距离 前车和后车的横向位置、速度及朝向 无人车主车的规划结果 目标车辆的周边物体 自身行为是已知的 模型选择 无记忆模型 SVM、DNN...","categories": [],
        "tags": ["读书","自动驾驶"],
        "url": "/DailyNotes/2021/04/11/%E7%AC%AC%E4%B8%80%E6%9C%AC%E6%97%A0%E4%BA%BA%E9%A9%BE%E9%A9%B6%E6%8A%80%E6%9C%AF%E4%B9%A6-08-%E6%97%A0%E4%BA%BA%E9%A9%BE%E9%A9%B6%E7%9A%84%E8%A1%8C%E4%B8%BA%E9%A2%84%E6%B5%8B.html",
        "teaser": null
      },{
        "title": "代码大全2",
        "excerpt":"打好基础 软件构建中的设计 要避免做出“聪明”的设计。应该做出 简单且易于理解的设计 高扇入：让大量的类使用某个给定的类 低扇出：是让一个类里少量或适中地使用其他的类 尽量使用 标准的、常用的方法，让整个系统给人一种熟悉的感觉 通过 限制子系统之间的通信 来让每个子系统更有存在意义 创建高质量的代码 类 抽象数据类型：一些数据以及对这些数据所进行操作的集合 继承 给程序增加了复杂度，因此它是一种危险的技术 高质量的子程序 内聚性：指子程序中各种操作之间联系的紧密程序 功能上的内聚性：说一个子程序仅执行一项操作 防御式编程 子程序应该不因传入错误数据而被破坏，哪怕是由其他子程序产生的错误数据 伪代码编程过程 使用变量的一般事项 把一个变量的引用点尽可能集中在一起 尽可能缩短变量的存活时间 变量 变量名 一个好记的名字反映的通常都是问题，而不是解决方案 命名规则 的存在为你的代码 增加了结构，减少了你需要考虑的事情 基本数据类型 浮点数避免等量判断 把布尔表达式的结果付给一个变量，从而使得这一判断的含义变得更加明显 不常见的数据类型 把 指针 操作限制在子程序或者类里面 全局变量 破坏了 模块化和智力上的可管理性 语句 直线型代码 让程序易于 自上而下阅读，而不是让读者的目光跳来跳去 条件语句 控制循环 注意三种情况：开始的情况，任意选择的中间情况，以及最终的情况 把嵌套限制在 3层...","categories": [],
        "tags": ["读书"],
        "url": "/DailyNotes/2021/04/13/%E4%BB%A3%E7%A0%81%E5%A4%A7%E5%85%A82.html",
        "teaser": null
      },{
        "title": "ElasticSearch",
        "excerpt":"API Search API 参数 参数 作用 默认值 from 跳过的文档数 0 size 返回的文档数 10 sort 排序字段   search_after 用作分页   应答 { \"_shards\" : { \"total\" : 2, \"successful\" : 2, \"skipped\" : 0, \"failed\" : 0 }, \"hits\" : { \"total\" : { \"value\" : 10000, //文档数 \"relation\" : \"gte\"...","categories": [],
        "tags": ["数据库"],
        "url": "/DailyNotes/2021/04/14/ElasticSearch.html",
        "teaser": null
      },{
        "title": "使用 gdb 和 gdb_graphs 生成运行时函数调用图",
        "excerpt":"以 MfLocalPose 为例，我想看 MfLocalPose构造函数在哪些地方被调用。 查找函数符号 使用nm命令查找 MfLocalPose函数符号： &gt; nm build/bin/map_manager | grep ' T ' | grep MfLocalPose 0000000000594780 T _ZN6xpilot14reference_line10RefLineMap18ReadMfLocalPoseMsgEv 0000000000529110 T _ZN6xpilot14reference_line9RefLineCP18ReadMfLocalPoseMsgEv 0000000000836520 T _ZN6xpilot3msg10map_fusion14MfLocalPoseMsgC1Ev 0000000000836520 T _ZN6xpilot3msg10map_fusion14MfLocalPoseMsgC2Ev 0000000000837000 T _ZN6xpilot3msg10map_fusion24MfLocalPoseMsgPlugin_newEv 00000000008371e0 T _ZN6xpilot3msg10map_fusion27MfLocalPoseMsgPlugin_deleteEP14PRESTypePlugin 0000000000836f80 T _ZN6xpilot3msg10map_fusion32MfLocalPoseMsgPlugin_copy_sampleEPvPNS1_14MfLocalPoseMsgEPKS3_ 0000000000836ff0 T _ZN6xpilot3msg10map_fusion33MfLocalPoseMsgPlugin_get_key_kindEv _ZN6xpilot3msg10map_fusion14MfLocalPoseMsgC1Ev 和 _ZN6xpilot3msg10map_fusion14MfLocalPoseMsgC2Ev 就是 MfLocalPose 的构造函数。（其中_ZN6xpilot3msg10map_fusion14是命名空间、LocalPoseMsg是类名、C1/C2是构造函数、Ev表示参数为void）。 设置 gdb...","categories": [],
        "tags": ["开发工具"],
        "url": "/DailyNotes/2021/04/15/%E4%BD%BF%E7%94%A8-gdb-%E5%92%8C-gdb_graphs-%E7%94%9F%E6%88%90%E8%BF%90%E8%A1%8C%E6%97%B6%E5%87%BD%E6%95%B0%E8%B0%83%E7%94%A8%E5%9B%BE.html",
        "teaser": null
      },{
        "title": "Python3",
        "excerpt":"编译安装 sudo apt install libssl-dev libffi-dev libbz2-dev libncurses5-dev libncursesw5-dev libsqlite3-dev ./configure --prefix=$prefix --enable-loadable-sqlite-extensions #打开config.log查找ssl、ffi、sqlite是否成功 make make install 代码片段 参数解释 import argparse parser = argparse.ArgumentParser() #--job或-j，整数类型，必需 parser.add_argument('--job_id', '-j', type=int, required=True) args = parser.parse_args() print(args.job_id) 日志输出 # 输出日志到文件 logging.basicConfig(filename='example.log', format='%(levelname)s:%(message)s', level=logging.DEBUG) # 输出日志到终端 logger = logging.getLogger() logger.addHandler(logging.StreamHandler(sys.stdout)) logger.setLevel(logging.DEBUG) # 根据日期切换日志文件 logging.basicConfig() file_handler...","categories": [],
        "tags": ["编程语言"],
        "url": "/DailyNotes/2021/04/21/Python3.html",
        "teaser": null
      },{
        "title": "Nginx",
        "excerpt":"命令 nginx nginx -s quit nginx -s reload 安装文件位置（Ubuntu） # 配置文件 /etc/nginx/nginx.conf # 静态网页 /var/www/html/ 配置文件 http {     # 上传大小限制     client_max_body_size 8M;     client_body_buffer_size 128k; # 列出目录文件 autoindex on; charset utf-8; # 日志格式 log_format main '$time_local`$remote_addr $request`$status $body_bytes_sent`$http_user_agent'; access_log /var/log/nginx/access.log main;     server {...","categories": [],
        "tags": ["中间件"],
        "url": "/DailyNotes/2021/04/27/Nginx.html",
        "teaser": null
      },{
        "title": "时间简史：01 我们的宇宙图象",
        "excerpt":"公元前340年 希腊 哲学家 亚里士多德 在他的 《论天》一书中，对于 地球是一个圆球 提出两个有力的论证：           月食 是由于地球运行到太阳与月亮之间引起的；            在南方地区观测 北极星 在天空中显得较低。       1514年 波兰 教士 尼古拉·哥白尼 提出 日心说。      1687年 艾萨克·牛顿 出版 《自然哲学的数学原理》，提出了 万有引力定律，恒星应该相互吸引。   1929年 埃德温·哈勃 观测到不管你往哪个方向观测，远处的星系都正急速地飞离我们而去。   今天科学家按照两个基本的部分理论来描述宇宙：           广义相对论 描述 引力和宇宙的大尺度结构；            量子力学 描述 极小尺度 的现象。         ","categories": [],
        "tags": ["读书"],
        "url": "/DailyNotes/2021/05/03/%E6%97%B6%E9%97%B4%E7%AE%80%E5%8F%B2-01-%E6%88%91%E4%BB%AC%E7%9A%84%E5%AE%87%E5%AE%99%E5%9B%BE%E8%B1%A1.html",
        "teaser": null
      },{
        "title": "时间简史：02 空间和时间",
        "excerpt":"伽利略 测量指出，不管物体的重量多少，其速度增加的速率是一样的。   牛顿第一定律：只要物体没有受到外力，它就会以同样的速度保持直线运动。   牛顿第二定律：物体在被加速或改变其速度时，其改变率与所受的外力成比例。   牛顿万有引力定律：任何两个物体都相互吸引，其引力大小与每个物体的质量成比例。   不存在绝对静止意味着 不能给事件指定一个绝对的空间位置。   1676年，丹麦的天文学家 欧尔·克里斯琴森·罗默 发现 我们离木星越远则木星的月食出现得越晚，证明 光以有限但非常高的速度旅行。。      1865年，英国的物理学家 詹姆士·克拉克·麦克斯韦 发表 电磁场理论：在合并的电磁场中可以存在波动的微扰，它们以固定的速度行进。   1905年，瑞士专利局的职员 阿尔伯特·爱因斯坦 发表 狭义相对论：      每一事件处在任一方向上的 光的速度都是一样的；   没有任何东西行进得比光更快。      1915年，爱因斯坦 发表 广义相对论：引力是时空不是平坦的这一事实的结果。时空中的质量和能量的分布使它弯曲。      广义相对论预言：   1) 水星椭圆的长轴应围绕着太阳以大约每1万年1度的速率进动；   2) 光线会被引力场折弯，从遥远恒星发出的刚好通过太阳附近的光线会被偏折很小的角度；   3) 在像地球这样的大质量的物体附近，时间显得流逝得更慢一些。   1962年，人们利用一对安装在水塔顶上和底下的非常准确的钟，发现底下的那只更接近地球的钟走得较慢。   ","categories": [],
        "tags": ["读书"],
        "url": "/DailyNotes/2021/05/03/%E6%97%B6%E9%97%B4%E7%AE%80%E5%8F%B2-02-%E7%A9%BA%E9%97%B4%E5%92%8C%E6%97%B6%E9%97%B4.html",
        "teaser": null
      },{
        "title": "时间简史：03 膨胀的宇宙",
        "excerpt":"太阳离我 8光分。 最近的恒星 比邻星 离我们 4光年。 1924年，美国天文学家 埃德温·哈勃 利用恒星的 光度 测量其 距离，证明 宇宙中存在其他许多星系。 银河系 是一个宽约为 10万光年 并慢慢旋转着的星系，有 1000亿 个恒星。 银河系只是 局部集团 的许多星系之一。 局部集团只是形成我们宇宙中最大已知结构的几千个集团和 星系团 之一。 如果太阳光通过一个棱镜，就会被分解成彩虹一样的颜色（光谱）。 从任何不透明的灼热的物体发出的光，有一个只依赖于它的温度的特征光谱（热谱）。 每一化学元素吸收非常独特的颜色族系（特征线族）。和恒星光谱中失去的颜色相比较，可以确定恒星大气中存在哪种元素。 20世纪20年代，天文学家发现其他星系中的恒星光谱的特征线族都向光谱的红端移动了同样的相对量——红移，证明 恒星在离开我们而去。 1929年 哈勃 发现 红移的大小和星系离开我们的距离成正比。 美国物理学家 罗伯特·狄克 和 詹姆士·皮帕尔斯 认为，早期的宇宙是非常密集的、白热的，我们仍然能看到早期宇宙的白热。 1965年，美国物理学家 阿诺·彭齐亚斯 和 罗伯特·威尔逊 用一个非常灵敏的微波探测器，收到了很大的噪声，这就是 早期宇宙的白热。 所有能看到恒星的质量总量还不到用以阻止膨胀的临界值的1％。星系里包含大量的 暗物质，那是我们不能直接看到的。 大爆炸 时星系之间的距离为零，宇宙的密度和时空曲率无限大，广义相对论失效，时间是从大爆炸开始。 1965年，英国数学家兼物理学家...","categories": [],
        "tags": ["读书"],
        "url": "/DailyNotes/2021/05/03/%E6%97%B6%E9%97%B4%E7%AE%80%E5%8F%B2-03-%E8%86%A8%E8%83%80%E7%9A%84%E5%AE%87%E5%AE%99.html",
        "teaser": null
      },{
        "title": "C++",
        "excerpt":"代码片段 可变函数参数 void foo(const char * format, ...) { va_list arg_ptr; va_start(arg_ptr, format); vprintf(format, arg_ptr); fflush(stdout); va_end(arg_ptr); } 写文件 //ofstream ofstream myfile; myfile.open (\"myfile.txt\"); myfile &lt;&lt; \"hello\\n\"; myfile.close(); 日期时间 struct tm { int tm_sec; /* 秒，范围从 0 到 59 */ int tm_min; /* 分，范围从 0 到 59 */ int tm_hour;...","categories": [],
        "tags": ["编程语言"],
        "url": "/DailyNotes/2021/05/10/C++.html",
        "teaser": null
      },{
        "title": "GDB",
        "excerpt":"启动参数  gdb --args $program $arguments gdb $program $core_file   gdb命令   catch throw dds::core::PreconditionNotMetError   ","categories": [],
        "tags": [],
        "url": "/DailyNotes/2021/05/13/GDB.html",
        "teaser": null
      },{
        "title": "Bazel",
        "excerpt":"概念 Workspace 包含软件 源代码； 包含 输出目录 的符号链接； WORKSPACE （或 WORKSPACE.bazel）文件指明 外部依赖； 包含 WORKSPACE 文件的目录是 workspace 的 根目录； 忽略子目录的 WORKSPACE 文件 Repositories 用来 组织代码； 根目录又称 主仓库 或 @； 外部仓库（external）在WORKSPACE 中定义 Packages 文件 和 依赖关系 的集合； 包含 BUILD（或BUILD.bazel）文件 Targets package 包含的元素，主要是 文件或规则 Labels target 的名称 # 格式为 @repositrory_name//package_name:target_name @myrepo//my/app/main:app_binary //my/app/main:app_binary # 同一个仓库...","categories": [],
        "tags": ["开发工具"],
        "url": "/DailyNotes/2021/05/20/Bazel.html",
        "teaser": null
      },{
        "title": "Docker",
        "excerpt":"架构 命令 仓库 🔹login 🔹logout 🔹pull 🔹push 🍉🍉🍉 镜像 🔹build # 根据Dockerfile构建镜像 docker build . # 构建镜像同时打上tag docker build -t simulation:v1 . 🔹commit 🔹history 🔹images # 查看全部镜像 docker images 🔹import 🔹load 🔹rmi #删除镜像 docker rmi $image_id #如果镜像有超过一个tag，可以删除一个tag但不删除镜像 docker rmi $image_tag 🔹save 🔹search 🔹tag # 镜像命名 docker tag $image_id $repo_name:$tag_name 🍉🍉🍉...","categories": [],
        "tags": ["Linux","开发工具"],
        "url": "/DailyNotes/2021/05/20/Docker.html",
        "teaser": null
      },{
        "title": "Kubernetes",
        "excerpt":"架构 kubectl 命令 基础 🔹create # 部署应用 kubectl create deployment simulation --image=simulation:v1 🔹delete # 删除应用 kubectl delete -n default deployment simulation 🔹edit # Edit the deployment 'mydeployment' in YAML and save the modified config in its annotation: kubectl edit deployment/mydeployment -o yaml --save-config 🔹explain # 解析字段 kprod explain pods.status.containerStatuses.state 🔹expose...","categories": [],
        "tags": ["Linux","中间件"],
        "url": "/DailyNotes/2021/05/20/Kubernetes.html",
        "teaser": null
      },{
        "title": "PostgreSQL",
        "excerpt":"设置 设置初始密码 # 切换用户 postgres sudo -i -u postgres # 进入 shell psql # 设置密码 \\password postgres # 退出 \\q exit 给当前登录用户分配权限 sudo -u postgres createuser --superuser $USER sudo -u postgres createdb $USER 允许远程访问 1、编辑文件：/etc/postgresql/13/main/postgresql.conf #listen_addresses = 'localhost' listen_addresses = '*' 2、编辑文件：/etc/postgresql/13/main/pg_hba.conf # IPv4 local connections: #host all all 127.0.0.1/32...","categories": [],
        "tags": ["数据库"],
        "url": "/DailyNotes/2021/05/20/PostgreSQL.html",
        "teaser": null
      },{
        "title": "Git",
        "excerpt":"概念 git 命令 仓库 🔹init 🔹clone 🍉🍉🍉 工作区 🔹add 🔹apply git apply $patch_file 🔹diff # 显示名称和状态 git diff master --name-status # 显示commit和上一个commit的区别 git diff $commit^! # 创建patch（可能包含二进制文件如图片） git diff --binary $commit_or_branch &gt; $patch_file 🔹mv 🔹rm #从仓库和本地文件删除 git rm $file_name #递归删除目录 git rm -r $folder_name #只从仓库删除 git rm --cached $file_name 🔹status...","categories": [],
        "tags": ["开发工具"],
        "url": "/DailyNotes/2021/05/22/Git.html",
        "teaser": null
      },{
        "title": "英语单词",
        "excerpt":"🐣🐣🐣 A abash v. 使羞愧 Nothing can abash him. accommodate vi. 容纳；适应 This hotel can accommodate up to 500 guests. accomplish vt. 完成；实现 I have accomplished a great deal in the last few months. acquisition [ˌækwɪ’zɪʃn] n. 获得 Life is a process about the acquisition of knowledge, wealth and happiness....","categories": [],
        "tags": [],
        "url": "/DailyNotes/2021/05/22/%E8%8B%B1%E8%AF%AD%E5%8D%95%E8%AF%8D.html",
        "teaser": null
      },{
        "title": "特殊符号",
        "excerpt":"常用符号大全 ❤❥웃유♋☮✌☏☢☠✔☑♚▲♪✈✞÷↑↓◆◇⊙■□△▽¿─│♥❣♂♀☿Ⓐ✍✉☣☤✘☒♛▼♫⌘☪≈←→◈◎☉★☆⊿※¡━┃♡ღツ☼☁❅♒✎©®™Σ✪✯☭➳卐√↖↗●◐Θ◤◥︻〖〗┄┆℃℉°✿ϟ☃☂✄¢€£∞✫★½✡×↙↘○◑⊕◣◢︼【】┅┇☽☾✚〓▂▃▄▅▆▇█▉▊▋▌▍▎▏↔↕☽☾の•▸◂▴▾┈┊①②③④⑤⑥⑦⑧⑨⑩ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩ㍿▓♨♛❖♓☪✙┉┋☹☺☻تヅツッシÜϡﭢ™℠℗©®♥❤❥❣❦❧♡۵웃유ღ♋♂♀☿☼☀☁☂☄☾☽❄☃☈⊙☉℃℉❅✺ϟ☇♤♧♡♢♠♣♥♦☜☞☝✍☚☛☟✌✽✾✿❁❃❋❀⚘☑✓✔√☐☒✗✘ㄨ✕✖✖⋆✢✣✤✥❋✦✧✩✰✪✫✬✭✮✯❂✡★✱✲✳✴✵✶✷✸✹✺✻✼❄❅❆❇❈❉❊†☨✞✝☥☦☓☩☯☧☬☸✡♁✙♆☩☨☦✞✛✜✝✙✠✚†‡◉○◌◍◎●◐◑◒◓◔◕◖◗❂☢⊗⊙◘◙◍⅟½⅓⅕⅙⅛⅔⅖⅚⅜¾⅗⅝⅞⅘≂≃≄≅≆≇≈≉≊≋≌≍≎≏≐≑≒≓≔≕≖≗≘≙≚≛≜≝≞≟≠≡≢≣≤≥≦≧≨≩⊰⊱⋛⋚∫∬∭∮∯∰∱∲∳%℅‰‱㊣㊎㊍㊌㊋㊏㊐㊊㊚㊛㊤㊥㊦㊧㊨㊒㊞㊑㊒㊓㊔㊕㊖㊗㊘㊜㊝㊟㊠㊡㊢㊩㊪㊫㊬㊭㊮㊯㊰㊙㉿囍♔♕♖♗♘♙♚♛♜♝♞♟ℂℍℕℙℚℝℤℬℰℯℱℊℋℎℐℒℓℳℴ℘ℛℭ℮ℌℑℜℨ♪♫♩♬♭♮♯°øⒶ☮✌☪✡☭✯卐✐✎✏✑✒✍✉✁✂✃✄✆✉☎☏◤◥◄►▶◀◣◢▲▼◥▸◂▴▾△▽▷◁⊿▻◅▵▿▹◃❏❐❑❒▀▁▂▃▄▅▆▇▉▊▋█▌▍▎▏▐░▒▓▔▕■□▢▣▤▥▦▧▨▩▪▫▬▭▮▯☰☲☱☴☵☶☳☷☯ 特殊符号 ♠♣♧♡♥❤❥❣♂♀✲☀☼☾☽◐◑☺☻☎☏✿❀№↑↓←→√×÷★℃℉°◆◇⊙■□△▽¿½☯✡㍿卍卐♂♀✚〓㎡♪♫♩♬㊚㊛囍㊒㊖Φ♀♂‖$@*&amp;#※卍卐Ψ♫♬♭♩♪♯♮⌒¶∮‖€￡¥$ 编号序号 ①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭⑮⑯⑰⑱⑲⑳⓪❶❷❸❹❺❻❼❽❾❿⓫⓬⓭⓮⓯⓰⓱⓲⓳⓴㊀㊁㊂㊃㊄㊅㊆㊇㊈㊉㈠㈡㈢㈣㈤㈥㈦㈧㈨㈩⑴⑵⑶⑷⑸⑹⑺⑻⑼⑽⑾⑿⒀⒁⒂⒃⒄⒅⒆⒇⒈⒉⒊⒋⒌⒍⒎⒏⒐⒑⒒⒓⒔⒕⒖⒗⒘⒙⒚⒛ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩⅪⅫⅰⅱⅲⅳⅴⅵⅶⅷⅸⅹⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ⒜⒝⒞⒟⒠⒡⒢⒣⒤⒥⒦⒧⒨⒩⒪⒫⒬⒭⒮⒯⒰⒱⒲⒳⒴⒵ 数学符号 ﹢﹣×÷±/=≌∽≦≧≒﹤﹥≈≡≠=≤≥&lt;&gt;≮≯∷∶∫∮∝∞∧∨∑∏∪∩∈∵∴⊥∥∠⌒⊙√∟⊿㏒㏑%‰⅟½⅓⅕⅙⅛⅔⅖⅚⅜¾⅗⅝⅞⅘≂≃≄≅≆≇≈≉≊≋≌≍≎≏≐≑≒≓≔≕≖≗≘≙≚≛≜≝≞≟≠≡≢≣≤≥≦≧≨≩⊰⊱⋛⋚∫∬∭∮∯∰∱∲∳%℅‰‱øØπ 爱心符号 ♥❣ღ♠♡♤❤❥ 标点符号 。，、＇：∶；?‘’“”〝〞ˆˇ﹕︰﹔﹖﹑•¨….¸;！´？！～—ˉ｜‖＂〃｀@﹫¡¿﹏﹋﹌︴々﹟#﹩$﹠&amp;﹪%*﹡﹢﹦﹤‐￣¯―﹨ˆ˜﹍﹎+=&lt;＿-\\ˇ~﹉﹊（）〈〉‹›﹛﹜『』〖〗［］《》〔〕{}「」【】︵︷︿︹︽﹁﹃︻︶︸﹀︺︾ˉ﹂﹄︼❝❞ 箭头符号 ↑↓←→↖↗↘↙↔↕➻➼➽➸➳➺➻➴➵➶➷➹▶►▷◁◀◄«»➩➪➫➬➭➮➯➱⏎➲➾➔➘➙➚➛➜➝➞➟➠➡➢➣➤➥➦➧➨↚↛↜↝↞↟↠↠↡↢↣↤↤↥↦↧↨⇄⇅⇆⇇⇈⇉⇊⇋⇌⇍⇎⇏⇐⇑⇒⇓⇔⇖⇗⇘⇙⇜↩↪↫↬↭↮↯↰↱↲↳↴↵↶↷↸↹☇☈↼↽↾↿⇀⇁⇂⇃⇞⇟⇠⇡⇢⇣⇤⇥⇦⇧⇨⇩⇪↺↻⇚⇛♐ 符号图案 ✐✎✏✑✒✍✉✁✂✃✄✆✉☎☏☑✓✔√☐☒✗✘ㄨ✕✖✖☢☠☣✈★☆✡囍㍿☯☰☲☱☴☵☶☳☷☜☞☝✍☚☛☟✌♤♧♡♢♠♣♥♦☀☁☂❄☃♨웃유❖☽☾☪✿♂♀✪✯☭➳卍卐√×■◆●○◐◑✙☺☻❀⚘♔♕♖♗♘♙♚♛♜♝♞♟♧♡♂♀♠♣♥❤☜☞☎☏⊙◎☺☻☼▧▨♨◐◑↔↕▪▒◊◦▣▤▥▦▩◘◈◇♬♪♩♭♪の★☆→あぃ￡Ю〓§♤♥▶¤✲❈✿✲❈➹☀☂☁【】┱┲❣✚✪✣✤✥✦❉❥❦❧❃❂❁❀✄☪☣☢☠☭ღ▶▷◀◁☀☁☂☃☄★☆☇☈⊙☊☋☌☍ⓛⓞⓥⓔ╬『』∴☀♫♬♩♭♪☆∷﹌の★◎▶☺☻►◄▧▨♨◐◑↔↕↘▀▄█▌◦☼♪の☆→♧ぃ￡❤▒▬♦◊◦♠♣▣۰•❤•۰►◄▧▨♨◐◑↔↕▪▫☼♦⊙●○①⊕◎Θ⊙¤㊣★☆♀◆◇◣◢◥▲▼△▽⊿◤◥✐✌✍✡✓✔✕✖♂♀♥♡☜☞☎☏⊙◎☺☻►◄▧▨♨◐◑↔↕♥♡▪▫☼♦▀▄█▌▐░▒▬♦◊◘◙◦☼♠♣▣▤▥▦▩◘◙◈♫♬♪♩♭♪✄☪☣☢☠♯♩♪♫♬♭♮☎☏☪♈ºº₪¤큐«»™♂✿♥　◕‿-｡　｡◕‿◕｡ 中文字符 零壹贰叁肆伍陆柒捌玖拾佰仟万亿吉太拍艾分厘毫微卍卐卄巜弍弎弐朤氺曱甴囍兀々〆のぁ〡〢〣〤〥〦〧〨〩㊎㊍㊌㊋㊏㊚㊛㊐㊊㊣㊤㊥㊦㊧㊨㊒㊫㊑㊓㊔㊕㊖㊗㊘㊜㊝㊞㊟㊠㊡㊢㊩㊪㊬㊭㊮㊯㊰㊀㊁㊂㊃㊄㊅㊆㊇㊈㊉ 制表符 ─ ━│┃╌╍╎╏┄ ┅┆┇┈ ┉┊┋┌┍┎┏┐┑┒┓└ ┕┖┗ ┘┙┚┛├┝┞┟┠┡┢┣ ┤┥┦┧┨┩┪┫┬ ┭ ┮ ┯ ┰ ┱ ┲ ┳ ┴ ┵ ┶ ┷ ┸ ┹ ┺ ┻┼ ┽ ┾ ┿ ╀ ╁ ╂ ╃ ╄ ╅...","categories": [],
        "tags": [],
        "url": "/DailyNotes/2021/05/23/%E7%89%B9%E6%AE%8A%E7%AC%A6%E5%8F%B7.html",
        "teaser": null
      }]
