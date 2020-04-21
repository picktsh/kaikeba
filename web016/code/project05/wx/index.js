router.get('/wxCallback', async ctx => {
  const code = ctx.query.code; // 授权码
  console.log('getAccessToken', code)
  const token = await oauth.getAccessToken(code)
  const accessToken = token.dataaccess_token
  const openid = token.data.openid
  // 增加本地授权;此处常规操作是怎样的?
  ctx.redirect('/?openid=' + openid)
  
})

router.get('/getUser', async ctx => {
  const openid = 0
})


router.get('/getJSConfig', async ctx => {
  const res = await api.getJsConfig(ctx.query)
  console.log('res', res);
})
