const {Controller} = require('egg')

/**
 * @UserController 用户管理
 */
class UserController extends Controller {
  constructor(ctx) {
    super(ctx);
  }
  
  /**
   * @summary 创建用户
   * @description 创建用户,记录用户账户/密码/类型
   * @touter post /api/user
   * @request body createUserRequest *body
   * @response
   * @returns {Promise<void>}
   */
  async create() {
    const {ctx} = this
    ctx.body = 'user ctrl'
  }
}

module.exports = UserController
