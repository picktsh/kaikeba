// webpack 是基于 nodejs的
// webpack配置就是一个对象
const path = require("path")

module.exports = {
  // 上下文 项目打包的相对路径-正常情况不会动
  // context: process.cwd(),
  // 入口,执行构建的入口 项目入口
  entry: "./src/index.js",
  // 出口
  output: {
    // 构建的文件资源放在哪?必须是绝对路径
    path: path.resolve(__dirname, "./dist"),
    // 构建的文件资源叫啥?
    filename: "main.js"
  }
}
