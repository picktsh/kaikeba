const Koa = require('koa')
const {
  initRouter,
  initController,
  initService,
  loadConfig,
  initSchedule
} = require('./kkb-loader')

class kkb {
  constructor(conf) {
    this.$app = new Koa(conf)
    
    this.$service = initSchedule()
    this.$service = loadConfig()
    this.$service = initService(this)
    this.$ctrl = initController(this)
    this.$router = initRouter(this)
    this.$app.use(this.$router.routes())
    
  }
  
  start(port) {
    this.$app.listen(port, () => {
      console.log(`服务器启动 端口 127.0.0.1:${port}`);
    })
  }
}

module.exports = {}
