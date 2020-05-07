// webpack 是基于 nodejs的
// webpack配置就是一个对象
// import {CleanWebpackPlugin} from "clean-webpack-plugin";

const path = require("path")

module.exports = {
  // 上下文 项目打包的相对路径-正常情况不会动
  // context: process.cwd(),
  // 入口,执行构建的入口 项目入口 支持3种类型[字符串,数组,对象]
  entry: "./src/index.js",
  // entry: ["./src/index.js","./src/other.js"],
  // entry: {
  //   main: "./src/index.js",
  //   other: "./src/other.js",
  // },
  // 出口
  output: {
    // 构建的文件资源放在哪?必须是绝对路径
    path: path.resolve(__dirname, "./dist"),
    // 构建的文件资源叫啥? 无论是多出口还是单出口,都推拿使用占位符
    // filename: "main.js",
    filename: "[name].js",// 对象模式,多出口;占位符
    // filename: "[name]-[hash:6].js",// 对象模式,多出口;占位符
    // 占位符: 长度默认20,可以指定长度[hash:6]
    // hash  // 整个相互的hash,每构建一次,就会有一个新的hash值
    // chunkhash  // 根据不同入口entry进行依赖解析,构建对应的chunkhash,模块相应地hash
    // 只要组成entry的模块内容没有改动,则对应的hash不变
    // name
    // id
  },
  // 构建模式: none production development
  mode: "development",
  // 插件
  // plugins: [new CleanWebpackPlugin()],
  
  // 处理不认识的模块
  module: {
    // loader 模块
    rules: [
      {
        test: /\.css$/,
        // use: {
        //   // 模块转换和模块处理
        //   // loader的执行顺序时从后往前
        //   // css-loader 言简意赅 是吧css模块的内容 加入到js模块中去
        //   // css in js
        //   // style-loader 从js中提取css的loader 在html中创建一个style标签
        //   loader: ["style-loader", "css-loader"]
        // }
        use: ['style-loader', 'css-loader'],
      }
    ]
  }
}
