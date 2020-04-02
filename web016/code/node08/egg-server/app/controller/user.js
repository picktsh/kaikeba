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
   * @response baseResponse 创建成功
   * @returns {Promise<void>}
   */
  async create() {
    const {ctx} = this
    
    // 校验参数
    ctx.validate(ctx.rule.createUserRequest)
    
    // ctx.body = 'user ctrl 888'
    // const res = {abd: 123}
    
    const payload = ctx.request.body.body || {}
    
    // 调用Service 进行业务处理
    
    // 设置响应内容
    ctx.helper.success({ctx, res})
  }
}

module.exports = UserController
