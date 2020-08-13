title:web端页面构建使用教程
---

### 1.安装 chameleon-tool@1.0.8-alpha.1 

首先安装 chameleon-tool@1.0.8-alpha.1 及以上版本


### 2.在路由配置文件新增配置

* webMpa 表示web端多页面构建的基本配置，接受一个数组
* 数组中每个对象值接受两个参数
  * name:表示该多页面的名字
  * paths:表示该应用

```json
"webMpa":[
  {
    "name":"addRoutes",
    "paths":["/pages/index/index2","/pages/index/index1"]
  },
  {
    "paths":["/pages/index/index","/pages/index/index3"]
  }

]
```
