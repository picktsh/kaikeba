const fs = require('fs');
const path = './.db.json';
module.exports = {
  // 取值方法,传入key和回调,回调函数返回1个参数是{...data}|{}
  get(key, callback, errorCallback) {
    // 注意:读文件是异步的过程,使用异步回调
    // var date = fs.readFileSync('log.txt','utf-8'); // 同步读文件
    fs.readFile(path, async (err, buffer) => {
      if (err) {
        // 读不到文件,那就创建一个,仅限第一次
        console.log("文件不存在:", err);
        this.set(key, {});
        errorCallback && await errorCallback(err);
        return undefined
      }
      // TODO 每次取回的都是根目录,容易占内存,如何进行嵌套优化???
      const json = JSON.parse(buffer);
      callback && callback(json[key] ? json[key] : {})
    })
  },
  set(key, value) {
    fs.readFile(path, async (err, buffer) => {
      // 判断空文件
      const json = buffer ? JSON.parse(buffer) : {};
      json[key] = value;
      // 重新写入文件
      await fs.writeFile(path, JSON.stringify(json), err => {
        if (err) {
          console.log('写入时发生错误', err)
        }
        console.log('写入成功:', key);
      })
    })
  }
}


