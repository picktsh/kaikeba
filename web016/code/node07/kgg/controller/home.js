module.exports = app => ({
  index: async ctx => {
    const name = await app.$service.user.getName()
  },
  detail: async ctx => {
    console.log(`访问页面 detail`);
  },
  
})
