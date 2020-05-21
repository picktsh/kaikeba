// 执行webpack构建的入口
// 1. 拿到webpack.config.js 配置
const options = require("./webpack.config")
const index = require("./src/index")

module.exports = options.run()
