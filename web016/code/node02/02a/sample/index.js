const Koa = require('koa');
const app = new Koa();
// 切面
app.use(async (ctx, next) => {
  const start = new Date().getTime();
  console.log(`start: ${ctx.url}`);
  await next()
  const end = new Date().getTime();
  console.log(`请求${ctx.url},耗时${end - start}ms`);
});
app.use(async (ctx, next) => {
  ctx.body = [
    {name: 'tom'}
  ];
  await next()
});

app.listen(3000);
