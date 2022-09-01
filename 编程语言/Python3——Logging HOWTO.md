---
tags: 编程语言
---



## <center>Basic Logging Tutorial</center>

```python
# log to a file
logging.basicConfig(filename='example.log', encoding='utf-8', level=logging.DEBUG)

# change the format of displayed messages
logging.basicConfig(format='%(levelname)s:%(message)s', level=logging.DEBUG)

# display the date/time in messages
logging.basicConfig(format='%(asctime)s %(message)s')
logging.basicConfig(format='%(asctime)s %(message)s', datefmt='%m/%d/%Y %I:%M:%S %p')
```

## <center>Advanced Logging Tutorial</center>

#### Loggers

* expose the interface that application code directly uses
* Each instance has a <hu>name</hu>, and they are conceptually arranged in a <hu>namespace</hu> hierarchy using dots as separators
* The root of the hierarchy of loggers is called the <hu>root logger</hu>.

#### Handlers

* send the log records (created by loggers) to the appropriate destination

#### Filters

* provide a finer grained facility for determining which log records to output

#### Formatters

* specify the layout of log records in the final output

[原文](https://docs.python.org/3/howto/logging.html)