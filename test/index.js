const safeGet = require("../dist/safeget.umd");

const value = safeGet({
  a: {
    b: [1,2,3]
  }
}, "a.b[0]");

console.log(value);