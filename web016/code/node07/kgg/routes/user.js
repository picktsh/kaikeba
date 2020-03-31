module.exports = {
  'get /': async app => {
    // ctx.body = '用户首页'
    const name = await app.$service.user.getAll()
    app.ctx.body = `用户: ${name}`
  },
  'get /info': async app => {
    // ctx.body = '用户详情页面'
    app.ctx.body = `用户年龄 ${app.$service.user.getAge()}`
  },
}
