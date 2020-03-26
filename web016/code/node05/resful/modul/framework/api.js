module.exports = {
  async init(ctx, next) {
    console.log(ctx.params);
    const model = ctx.app.$model[ctx.params.list]
    if (model) {
      ctx.list = model
      await next()
    } else {
      ctx.body = 'no this model'
    }
  },
  async get(ctx) {
    ctx.body = await ctx.list.find({})
  },
}
