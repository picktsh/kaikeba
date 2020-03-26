const conf = require('./conf')
const {EventEmitter} = require('events')

// 客户端
const {Mongodb} = require('mongodb')

class MongoDB {
  constructor(conf) {
    // 保存conf
    this.conf = conf
    this.emmiter = new EventEmitter()
    
    // 连接
    this.client = new Mongodb(conf.url, {useNewUrlParser: true})
    this.client.connect(err => {
      if (err) throw err
      console.log('连接成功');
      this.emmiter.emit('connect')
    })
  }
  
  /**
   * 返回集合
   * @param colName
   * @param dbName
   */
  col(colName, dbName = conf.dbName) {
    return this.client.db(dbName).collection(colName)
  }
  
  /**
   * 用于订阅连接事件
   * @param event
   * @param callback
   */
  once(event, callback) {
    this.emmiter.once(event, callback)
  }
}

module.exports = new MongoDB(conf)
