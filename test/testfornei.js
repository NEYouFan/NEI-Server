var path = require('path');
var neiserver = require('../index');

// 传配置文件路径启动
neiserver({
  fromNei: true,
  config: path.join(__dirname, './nei-config.js')
});
