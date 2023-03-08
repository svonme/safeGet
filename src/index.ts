/**
 * @file 从对象中安全的获取数据
 * @author svon.me@gmail.com
 */

function getLayer(path: string): string[] {
  const list = path.split('.');
  const array = [];
  for(let i = 0, len = list.length; i < len; i++) {
    if (list[i]) {
      array.push(list[i]);
    }
  }
  return array;
}

function getArrayLayer(path: string): string[] {
  const text = String(path).replace(/\[/g, '.').replace(/\]/g, '');
  return getLayer(text);
}

/**
 * 从对象中安全的获取数据
 * @param instance 数据对象
 * @param keys     参数路径
 * @param autoValue 默认值
 * @returns 
 */
function safeGet<T>(instance?: any, keys?: string | string[], autoValue?: T): T | undefined {
  if (keys && Array.isArray(keys)) {
    let index = 0;
    let value: T | undefined = instance;
    do {
      value = safeGet(value, keys[index++]);
    } while(index < keys.length);
    return value;
  }
  const layer = keys ? getArrayLayer(keys as string) : [];
  const app = function(data: any, index: number): T | undefined {
    if (typeof data === "undefined") {
      return autoValue;
    }
    if (data == null) {
      return autoValue;
    }
    if (!data && typeof data !== "number") {
      return autoValue;
    }
    const key: string = layer[index];
    // 如果有下一层
    if (key && layer[index + 1]) {
      return app(data[key], index + 1);
    }
    if (key) {
      return data[key];
    }
    return data;
  };
  return app(instance, 0);
}

export default safeGet;
