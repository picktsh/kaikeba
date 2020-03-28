const Koa = require('koa')
const router = require('koa-router')
// ....
// .....


const app = new Koa()


router.post('/users/login-tokin', async ctx => {
  const {body} = ctx.request
  
  // 用户名密码匹配
  const userinfo = body.username
  ctx.body = {
    message: '登陆成功',
    user: userinfo,
    tokin: jwt.sing({
      data: userinfo,
      exp: Math.floor(Date.now() / 1000) + 60 * 60
    }),
    secret
  }
})

router.get('users/getUser-tokin', jwtAuth({secret}), async ctx => {
  console.log(ctx.state.user);
  ctx.body = {
    message: '获取数据成功',
    userinfo: ctx.state.user.data
  }
})
