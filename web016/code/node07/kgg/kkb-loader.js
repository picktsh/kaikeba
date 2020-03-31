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

function initRouter(app) {
  const router = new Router()
  load('routes', (filename, routes) => {
    // 前缀
    const prefix = filename === 'index' ? '' : `/${filename}`
    
    // 类型判断
    routes = typeof routes === 'function' ? routes(app) : routes
    
    // 遍历对象
    Object.keys(routes).forEach(key => {
      const [method, path] = key.split(' ')
      console.log(`正在映射地址: ${method.toLocaleUpperCase()} ${prefix} ${path}`)
      // routes[method](prefix + path, routes[key])
      router[method](prefix + path, async ctx => {
        // 挂在上下文到APP
        app.ctx = ctx
        // 路由处理接收App
        await routes[key](app)
      })
    })
  })
  return router
}

function initController() {
  const controller = {}
  // 读取ctrl
  load('controller', (filename, controller) => {
    controller[filename] = controller
  })
}


function initService() {
  const service = {}
  // 读取ctrl
  load('service', (filename, service) => {
    service[filename] = service
  })
  return service
}


const Sequelize = require('sequelize')

function loadConfig() {
  load('config', (fileneme, conf) => {
    if (conf.db) {
      app.$db = new Seruqlize(conf.db)
      //加载模型
      load('model', (filename, {schema, options}) => {
        app.$model
        app.db.sync()
      })
    }
    if (conf.middleware) {
      conf.middleware.forEach(mid => {
        const midPath = path.resolve(__dirname, 'middleware', mid)
        app.$app.use(midPath)
      })
    }
  })
}


const schedule = require('node-schedule')

function initSchedule() {
  load('schedule', (filename, scheduleConfig) => {
    schedule.schedule
  })
}

module.exports = {initRouter, initController, initService, loadConfig, initSchedule}
