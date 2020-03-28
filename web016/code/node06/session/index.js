const Koa = require('koa')

const app = new Koa()

// 鉴权
app.use((ctx, next) => {
  if (ctx.url.indexOf('login') > -1) {
    next()
  } else {
    if (!ctx.session.userinfo) {
      ctx.body('登陆失败')
    } else {
      next()
    }
  }
});
router.post('/users/login', async ctx => {
  const {body} = ctx.request
  // 设置session
  ctx.session.userinfo = body.username; // 这里简写了
  ctx.body = {
    message: '登陆成功'
  }
});
router.post('/users/logout', async ctx => {
  delete ctx.session.userinfo
  ctx.body = {
    message: '登出成功'
  }
});
router.post('/users/getUser', async ctx => {
  ctx.body = {
    message: '获取用户信息',
    userinfo: ctx.session.userinfo
  }
});
app.listen(3000)

