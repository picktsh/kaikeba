// koa
const wechat = require('co-wechat')
const conf = require('./conf')
router.all('/wechat', wechat(conf).middleware(async (message, ctx) => {
  return 'Hello world!';
}))
