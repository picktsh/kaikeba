// 开发配置
const baseConfig = require("./webpack.config.base")
const merge = require("webpack-merge")
const devConfig = {}
module.exports = merge(baseConfig, devConfig)