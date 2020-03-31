const fs = require('fs')
const path = require('path')
const Router = require('koa-router')

// 读取指定目录文件
function load(dir, cb) {
  // 获取绝对路径
  const url = path.resolve(__dirname, dir)
  
  // 读取文件
  const files = fs.readdirSync(url)
  
  // 遍历文件夹
  files.forEach(filename => {
    filename = filename.replace('.js', '')
    const file = require(url + '/' + filename)
    // 处理逻辑
    cb(filename, file)
  })
}
