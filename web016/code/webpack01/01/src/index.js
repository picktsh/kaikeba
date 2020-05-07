// 模块化开发,当前流行的单页面入口应用 spa
console.log("index.js");
// webpack的默认配置
// 1. webpack执行构建会找 webpack.config.js 这个配置文件
import {add} from "./other"
import "./index.css"

// console.log(add(2, 3))
