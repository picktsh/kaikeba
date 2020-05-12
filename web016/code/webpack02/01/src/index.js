// 模块化开发,当前流行的单页面入口应用 spa
console.log("index.js");
// webpack的默认配置
// 1. webpack执行构建会找 webpack.config.js 这个配置文件
import {add} from "./other"
import "./css/index.css"
import "./css/index.less"

let ele = `<div class="">模板字符串</div>`
// console.log(add(2, 3))
