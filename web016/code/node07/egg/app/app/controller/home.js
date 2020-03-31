'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const {ctx} = this;
    ctx.body = 'hi, 开课吧';
  }
}

module.exports = HomeController;
