/**
 * @file 快速从对象中获取数据
 * @author svon.me@gmail.com
 */


function safeGet(instance, path) {
  if (instance && path) {
    var layer = path.split('.');
    var app = function(data, index) {
      var key = layer[index];
      var safeMake = function(result, name, i) {
        // 数组操作
        if (/[\w]+]$/.test(name)) {
          var indexOf = key.indexOf('[');
          var k = name.slice(0, indexOf);
          var subscript = key.slice(indexOf + 1, key.lastIndexOf(']'));
          return safeMake(result[k], subscript, i);
        }
        // 如果有下一层
        if (layer[i + 1]) {
          return result[name] ? app(result[name], i + 1) : void 0;
        } else {
          return result[name];
        }
      };
      return safeMake(data, key, index);
    };
    return app(instance, 0);
  }
  return void 0;
}

module.exports = safeGet;
exports.default = safeGet;

