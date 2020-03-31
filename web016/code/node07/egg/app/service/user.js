const {Service} = require('egg')

class UserService extends Service {
  async getAll() {
    return 'getAll'
  }
}

modules.exports = UserService
