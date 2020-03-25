const uuid = require('uuid');
module.exports = {
  // 一个用户的模型
  user(ip) {
    return {
      id: uuid.v1(),
      ip: ip,
      name: '',
      online: false,
      createAt: Date.now(),
      updateAt: Date.now(),
    }
  },
  // 一条消息记录的模型
  message(props) {
    // const [content, user] = props;
    return {
      id: uuid.v1(),
      user: '',
      content: '',
      createAt: Date.now(),
      updateAt: Date.now(),
      ...props
    }
  }
}
