/**
 * websocket的应用
 * 1.简易的聊天室
 * 2.浏览器模仿控制台
 */
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const db = require('./db');
const m = require('./module');
// console.log(uuid.v1());
app.set('trust proxy', true);
let userIP = '';


/**
 * 请求浏览器发起请求的时候 判断用户,是新用户还是已存在用户
 * @param req
 * @param res
 * @param callback
 */
function checkUser(req, res, callback) {
  userIP = req.ip.match(/\d+\.\d+\.\d+\.\d+/)[0];
  // 检索用户表,如果有就使用如果没有就新增用户
  db.get('user', data => {
    // console.log('db.get:', data);
    if (!data.hasOwnProperty(userIP)) {
      // 创建一个用户
      console.log('需要添加一个用户');
      data[userIP] = m.user(userIP);
      db.set('user', data)
    }
    callback && callback(data)
  }, err => {
    let data = {};
    data[userIP] = m.user(userIP);
    db.set('user', data);
    res.send(data)
  });
}

function addMessage(msg) {
  db.get('message', data => {
    // 消息列表用数组存储
    if (Object.keys(data).length === 0) data = [];
    data.push(msg);
    db.set('message', data)
  });
  
}

// 请求根根路径
app.get('/', (req, res) => {
  checkUser(req, res);
  // console.log('用户[', userIP, ']发起请求');
  res.sendFile(__dirname + '/index.html')
});
// 请求个人信息接口
app.get('/user', (req, res) => {
  checkUser(req, res, data => {
    res.send(data[userIP])
  });
});
/**
 * 请求所有用户信息接口--用于做昵称匹配,用户列表展示,在线状态展示
 * @param all=1 返回查询到的所有用户
 * @param user=***.***.***.***  返回当前查询的用户
 */
app.get('/users', async (req, res) => {
  await db.get('user', async data => {
    // 过滤消息中没出现过的用户,不免全部暴露(只显示发过消息的用户)
    let params = req.query;
    if (params['all'] === "1") {
      res.send(data)
    } else {
      res.send(data[params['user']] ? data[params['user']] : {})
    }
  })
});
// 请求消息列表接口
app.get('/message', (req, res) => {
  let list = [];
  db.get('message', data => {
      list = data;
      res.send(list)
    }
  )
});
// 所有请求--暂时全部显示为index.html
app.get('*', (req, res) => {
  checkUser(req, res);
  // console.log('用户[', userIP, ']发起请求');
  res.sendFile(__dirname + '/index.html')
});

io.on('connection', (socket) => {
  // console.log('user connection userIP:', getuserIP());
  // io.emit('connection', getuserIP())
  // 响应用户发送的信息
  socket.on('chat message', msg => {
    console.log('前', msg);
    const msg2 = m.message({...msg});
    addMessage(msg2);
    console.log('后', msg2);
    // 广播给所有人
    io.emit('chat message', msg2)
  });
  socket.on('disconnect', () => {
    // console.log('user disconnect');
    io.emit('disconnect')
  })
});
http.listen(9000, () => {
  console.log('listen on http://127.0.0.1:9000');
});
/**
 * 使用单文件fs储存聊天记录
 * 储存所有用户,修改用户名
 * 创建用户表和聊天记录表(搭建结构)√
 * 更改在线状态
 * 广请求 *
 * 好友关系如何储存?
 *
 * */
