var path = require('path');

module.exports = {
    id: '10731',
    proRoot: './',
    updateTime: 1449453844660,
    template: '',
    webRoot: path.join(__dirname, './demo/webapp/'),
    viewRoot: path.join(__dirname, './demo/webapp/WEB-INF/views/'),
    routes: {
      'GET /api/account/authority/get': {'type':'api', 'id': 15278, 'path': '/get/api/account/authority/get'},
      'GET /api/account/info/get':  {'type':'api', 'id': 15277, 'path': '/get/api/account/info/get'},
      'GET /api/blog/list':  {'type':'api', 'id': 15273, 'path': '/get/api/blog/list'},
      'GET /api/tag/list':  {'type':'api', 'id': 15276, 'path': '/get/api/tag/list'},
      'GET /?xx=12': {'type':'tpl', 'name': '主页', 'index': 0, 'list':[{'id': 10947, 'path': 'index'}]},
      'GET /blog/': {'type':'tpl', 'name': '博客', 'index': 0, 'list':[{'id': 10947, 'path': 'index'}]},
      'GET /blog/list/': {'type':'tpl', 'name': '博客列表', 'index': 0, 'list':[{'id': 10947, 'path': 'index'}]},
      'GET /blog/tag/': {'type':'tpl', 'name': '博客标签', 'index': 0, 'list':[{'id': 10947, 'path': 'index'}]},
      'GET /setting/': {'type':'tpl', 'name': '设置', 'index': 0, 'list':[{'id': 10947, 'path': 'index'}]},
      'GET /setting/account/': {'type':'tpl', 'name': '帐号设置', 'index': 0, 'list':[{'id': 10947, 'path': 'index'}]},
      'GET /setting/permission/': {'type':'tpl', 'name': '权限设置', 'index': 0, 'list':[{'id': 10947, 'path': 'index'}]}
    },
    launch: true,
    port: 8001,
    neiApi: '',
    mockTpl: path.join(__dirname, './demo/webapp/WEB-INF/views/mock/'),
    mockApi: path.join(__dirname, './demo/webapp/src/mock/'),
    viewExt: '.ftl',
    engine: 'freemarker'
};
