# safeGet

一个很容易从对象中安全获取对象的工具

`$ npm install @fengqiaogang/safe-get`

```

const safeGet = require("@fengqiaogang/safe-get");

const data = {
  "a": {
    "b": {
      "c": [
        null,
        {
          "d": "hello world"
        }
      ]
    }
  }
};

const value = safeGet(data, "a.b.c[1].d");
// value = "hello world"
```

