// webpack 时基于 nodejs的
const path = require("path")

module.exports = {
  // 入口,执行构建的入口 项目入口
  entry: "scr/index.js",
  // 出口
  output: {
    // 构建的文件资源放在哪?必须是绝对路径
    path: path.resolve(__dirname, "./dist"),
    // 构建的文件资源叫啥?
    filename: "main.js"
  }
}
