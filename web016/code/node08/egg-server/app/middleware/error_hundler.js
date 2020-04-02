module.exports = (option, app) => {
  return async function (ctx, nect) {
    try {
      await next()
    } catch (err) {
      // 触发 error 事件
      app.emit('error', err, this)
      
      const status = error.status || 500
      // 500
      const error = status === 500 && app.config.env === 'prod' ? 'Internal Server Error' : error.message
      
      ctx.body = {
        code: status,
        error: error
      }
      if (status === 422) {
        ctx.body.detail = err.errors
      }
      ctx.status = 200
    }
    
  }
}
