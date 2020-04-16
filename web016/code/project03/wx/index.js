// koa
const wechat = require('co-wechat')
const conf = require('./conf')
router.all('/wechat', wechat(conf).middleware(async (message, ctx) => {
  return 'Hello world!';
}))
// router.get('./getToken', async ctx => {
//   const url = ` https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${conf.appid}&secret=${conf.appsecret}`
//   ctx.body = 'getToken'
// })
// router.get('./getFollowers', async ctx => {
//   const url = ` https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET`
//   ctx.body = 'getFollowers'
// })

const WechatAPI = require('co-wechat-api')
const api = new WechatAPI(conf.appid, conf.appsecret)
router.get('./getFollowers', async ctx => {
  let res = api.getFollowers()
  res = await api.batchGetUsers(res.data.openid, 'zh_CN')
  ctx.body = res
})
