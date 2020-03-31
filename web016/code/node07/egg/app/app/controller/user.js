const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    const {ctx} = this;
    ctx.nody = await ctx.service.user.getAll()
  }
}

modules.exports = UserController
