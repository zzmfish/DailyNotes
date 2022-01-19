---
tags: 数据库
---

## 数据库

#### 库

```javascript
//当前数据库：
db
db.getName()
```
#### 集合
```javascript
//重命名集合
db.colname.renameCollection('new_name')
```

#### 索引
```javascript
//查看索引
db.colname.getIndexes()

//创建唯一索引
db.colname.createIndex({"fieldname": 1 }, {unique: true})

//创建TTL索引
db.colname.createIndex({"fieldname": 1},
  { background: true,
    expireAfterSeconds: 3600
  }
)
```

## 更新

#### update

```js
db.collection.updateOne(
   where,
   { $set: {
       status: "D"
   }}
)
```



## 查询

#### find
```javascript
//时间范围：
db.colname.find({fieldname: {$lt: new Date('2017-05-10')}})

//正则匹配：
db.colname.find({fieldname: /pattern/})

//字段存在：
db.colname.find({fieldname: {$exists: true}})

//字段非空：
db.colname.find({fieldname: {$ne: null}})

//格式化显示
db.colname.find().forEach(function(item) {
  print(item.create_at.toLocaleFormat('%Y%m%d %H%M%S'),
    '\t',
    item.account, 
    '\t',
    item.balance,
    '\t',
    item.category
  )
})
```

#### aggregate
```javascript
//北京时间日期
col.aggregate([
  {'$project': {
    'date': {
      '$dateToString': {
        'format': "%Y-%m-%d",
        'date': {
          '$add': ['$create_at', 8 * 3600 * 1000]
        }
      }
    },
  }},
])
```




## 副本
```javascript
//初始化：
rs.initiate({
  _id: "rsname",
  members: [
    {_id: 0, host: "hostname1:port", priority:1, votes:1},
    {_id: 1, host: "hostname2:port", priority:2, votes:1},
    {_id: 2, host: "hostname3:port", priority:1, votes:1}
 ]
})

//增加副本
rs.add({host:'hostname', priority:0, votes:0})

//删除副本
rs.remove('hostname')

//增加投票节点
rs.addArb('hostname')

//切换主库
cfg = rs.conf()
cfg.members[0].priority = 1
cfg.members[1].priority = 2
rs.reconfig(cfg)
```

## 分片
```javascript
//database开启分片
sh.enableSharding(dbname)

//修改主分片
db.adminCommand( { movePrimary : "dbname", to : "shardname" } )

//增加分片
sh.addShard( "rsname/hostname:port")

//设置分片
sh.shardCollection( "dbname.colname", { fieldname : 1 } )

//删除索引
db.colname.dropIndex( "indexname" )

//更新路由数据
db.adminCommand("flushRouterConfig")
```


## 运维
#### 性能
```js
// 显示某个表正在进行的操作
db.currentOp().inprog.forEach(
  function(item) {
    if (item.ns == 'dbname.colname') {
      print(item.opid);
      print(JSON.stringify(item), null, ' ');
    }
  }
)

// 显示创建索引的进度
db.currentOp().inprog.forEach(
  function(item) {
    if (item.command && item.command.createIndexes) {
      print(JSON.stringify(item))
    }
  }
)

// 显示耗时超过60秒的操作
db.currentOp().inprog.forEach(function(item) {
  if (item.secs_running > 60) {
    print('----');
    print(item.opid);
    print(JSON.stringify(item), null, '');
  }
})

//kill某个表超过100秒的操作
db.currentOp().inprog.forEach(function(item) {
  if (item.secs_running > 100) {
    print('----');
    print(item.opid);
    print(JSON.stringify(item), null, '');
    if (item.ns == 'FEWeb.gift_items') {
      db.killOp(item.opid);
    }
  }
})
```

#### 删除
```javascript
//删除数据库：
db.drop/*危险*/Database()

//释放删除的空间
use dbname;
db.runCommand({compact: "colname"})

//删除全部库
var dbs = db.getMongo().getDBNames()
for (var i in dbs){
    db = db.getMongo().getDB( dbs[i] );
    print( "dropping db " + db.getName() );
    db.dropDatabase();
}
```

#### 退出
```js
//退出
use admin;
db.shutdownServer()
```

