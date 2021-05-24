---
tags: 数据库
header:
  image: "http://zhouzm.cn/images/%E7%BE%8E%E5%9B%BE/210414%E6%98%9F%E7%A9%BA.jpg"
---



## API

#### Search API

#### 参数

| 参数         | 作用         | 默认值 |
| ------------ | ------------ | ------ |
| from         | 跳过的文档数 | 0      |
| size         | 返回的文档数 | 10     |
| sort         | 排序字段     |        |
| search_after | 用作分页     |        |

#### 应答

```json
{
  "_shards" : {
    "total" : 2,
    "successful" : 2,
    "skipped" : 0,
    "failed" : 0
  },
  "hits" : {
    "total" : {
      "value" : 10000, //文档数
      "relation" : "gte"
    },
    "hits" : [
      {
        "_index" : "dds-clips-tagged",
        "_type" : "_doc",
        "_id" : "c-62287440-5237-39bd-aced-e238e0797299",
        "_score" : null,
        "_source" : {
            ...
        },
        "sort" : [
          1600851199117525012   //排序值，可以在search_after使用
        ]
      }
    ]
  }
}

```



#### 链接

* [Search API](https://www.elastic.co/guide/en/elasticsearch/reference/current/search-search.html)
* [Paginate search results](https://www.elastic.co/guide/en/elasticsearch/reference/current/paginate-search-results.html)

