---
tags: 编程语言
---


## 代码片段
#### 可变函数参数

```cpp
void foo(const char * format, ...)
{
    va_list arg_ptr;
    va_start(arg_ptr, format);
    vprintf(format, arg_ptr); fflush(stdout);
    va_end(arg_ptr);
}
```

#### 写文件

```cpp
//ofstream
ofstream myfile;
myfile.open ("myfile.txt");
myfile << "hello\n";
myfile.close();
```

#### 日期时间
```cpp
struct tm {
   int tm_sec;         /* 秒，范围从 0 到 59 */
   int tm_min;         /* 分，范围从 0 到 59 */
   int tm_hour;        /* 小时，范围从 0 到 23 */
   int tm_mday;        /* 一月中的第几天，范围从 1 到 31 */
   int tm_mon;         /* 月份，范围从 0 到 11 */
   int tm_year;        /* 自 1900 起的年数 */
   int tm_wday;        /* 一周中的第几天，范围从 0 到 6 */
   int tm_yday;        /* 一年中的第几天，范围从 0 到 365 */
   int tm_isdst;       /* 夏令时 */    
};

struct timeval {
    long tv_sec;  //秒
    long tv_usec;  //微秒
};

//返回系统的当前日历时间，自 1970 年 1 月 1 日以来经过的秒数。如果系统没有时间，则返回 -1。
time_t time(time_t *time);

//返回目前时间timeval
int gettimeofday (struct timeval * tv, struct timezone * tz);

// time_t 转 tm
struct tm *localtime(const time_t *timer);

// tm 转 time_t
time_t mktime(struct tm *timeptr)
```

## 语言特性

#### 禁止函数inline

```cpp
[[gnu::noinline]]
void foo() {
  ...
}
```

#### #pragma once

避免同一个文件被include多次

#### explicit关键字

指定构造函数或转换函数（C++11起）为显式，即它不能用于 *隐式转换* 和 *复制初始化*。