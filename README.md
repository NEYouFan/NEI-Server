# NEI-Server

nei构建工具模拟容器

## 通过依赖neiserver模块来启动nei项目

引用方式如下，此时是取`process.cwd()`下的neiserver.js作为配置参数：

```javascript
var neiserver = require('nei-server');

neiserver({fromNei: true});
```

同时，也可以指定配置文件的路径来启动：

```javascript
var neiserver = require('nei-server');
var path = require('path');

neiserver({
  fromNei: true,
  config: path.join(__dirname, '../config/nei-config.js')
});
```

当直接传入配置参数的时候，要注意路径不能是相对路径，不然会获取失败：

```javascript
var neiserver = require('nei-server');
var path = require('path');

neiserver({
  fromNei: true, // 表示这是nei项目
  config: {
    /* 根目录 */
    webRoot: path.join(__dirname, './demo/webapp/'),
    /* 视图目录 */
    viewRoot: path.join(__dirname, './demo/webapp/WEB-INF/views/'),
    /* 路由 */
    routes: {
      /* 异步接口 */
      'GET /api/xxx/get': {id: 15278, type: 'api', path: '/get/api/xxx/get'},
      'GET /api/xxx/info/get':  {id: 15277, type: 'api', path: '/get/api/xxx/info/get'},
      /* 同步模板 */
      'GET /': {index: 0, type: 'tpl', name: '首页XXX', list:[{id: 10947, path: 'index'}]}
    },
    /* 是否自动打开浏览器 */
    launch: true,
    /* 端口 */
    port: 8001,
    /* nei项目的在线数据url */
    neiApi: ,
    /* 同步模块mock数据路径 */
    mockTpl: path.join(__dirname, './demo/webapp/WEB-INF/views/mock/'),
    /* 异步接口mock数据路径 */
    mockApi: path.join(__dirname, './demo/webapp/src/mock/'),
    /* 模板后缀 */
    viewExt: '.ftl',
    /* 模板引擎 */
    engine: 'freemarker'
  }
});
```