---
tags: 编程语言
---



#### 使用ofstream写文件

```C++
#include <iostream>
#include <fstream>
using namespace std;

int main () {
  ofstream myfile;
  myfile.open ("example.txt");
  myfile << "Writing this to a file.\n";
  myfile.close();
  return 0;
}
```

#### 日期时间
```C++
//返回当前unix时间戳
#include <time.h>
time_t time (time_t* timer);
```