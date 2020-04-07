import * as Koa from 'koa'
import * as bodify from 'koa-body'
import * as serve from 'koa-static'

const app = new Koa()
app.use(serve(`${__dirname}/public`))

app.use(bodify({
    multipart: true,
    // 使用非严格模式,允许delete
    strict: true,
}))

app.use((ctx: Koa) => {
    ctx.body = 'Hello Koa'
})

app.listen(3000, () => {
    console.log('服务器已启动, localhost:3000')
})
