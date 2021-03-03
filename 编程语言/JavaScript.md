---
tags: 编程语言 Web开发
---



#### 基础数据类型

```js
//获取object的keys
Object.keys(obj)

//在数据前面添加元素
array.unshift(elem)
```

#### DOM
```js
// 删除节点
node.removeChild(child);

// 监听DOMContentLoaded事件
document.addEventListener("DOMContentLoaded", function(event) {
    alert('document is loaded!');
});

// 当前脚本路径
var scripts = document.getElementsByTagName("script"),
var src = scripts[scripts.length-1].src;
var src = document.currentScript;

// 使用XPath查询
var result = document.evaluate('//input',
    document,
    null/*命名空间*/,
    XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
    null/*结果集，null为新建*/);

// 新窗口输出html
var doc = window.open().document;
doc.open();
doc.write('hello');
doc.close();

//复制到剪切板
let textInput = document.getElementById("clipboard"); //textarea
textInput.textContent = text;
textInput.select();
textInput.setSelectionRange(0, 100000);
document.execCommand("copy")
```





#### HTTP请求
```js
//异步POST请求
var req = new XMLHttpRequest();
req.onreadystatechange = function() {
    if (req.readyState == 4) { //loaded
        if (req.status == 200) { //ok
            console.log(req.responseText); //应答内容
        }
    }
}   
req.open("POST", url, true);
req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
req.send(data);

// URL编码
var data = encodeURIComponent(value);

// JSON编码
var json = JSON.stringify(obj);

// JSON解码
var obj = eval('(' + json + ')');
```


#### 日期和时间
```js
// UTC时间戳(ms)
var timeStamp = Date.now();

// 当地时间戳(ms)
var nowDate = new Date();
var nowTime = nowDate.getTime() - nowDate.getTimezoneOffset() * 60000;

// unix时间戳(ms) 转 Date对象
Date.parse(timestamp)
```

#### 视窗
```js
//视窗滚动位置
window.scrollX;
window.scrollY;

//视窗大小
window.innerWidth;
window.innerHeight;

//元素相对视窗的位置
elem.getBoundingClientRect()
```

#### jQuery
```js
// 设置html
$('#myid').html('hello');
```

#### 第三方库
* jquery
* jquery-cookie
* Bootstrap
