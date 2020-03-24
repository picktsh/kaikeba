/**
 * websocket的应用
 * 1.简易的聊天室
 * 2.浏览器模仿控制台
 */
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
// const uuid = require('uuid');
// console.log(uuid.v1());
app.set('trust proxy', true);
let userIP = '';

// 请求根根路径
app.get('/', function (req, res) {
  userIP = req.ip.match(/\d+\.\d+\.\d+\.\d+/)[0];
  res.sendFile(__dirname + '/index.html')
});
// 给前端一个IP的接口
app.get('/ip', function (req, res) {
  userIP = req.ip.match(/\d+\.\d+\.\d+\.\d+/)[0];
  res.send(`const userIP = '${userIP}'`)
});
// 所有请求--暂时全部显示为index.html
app.get('*', function (req, res) {
  userIP = req.ip.match(/\d+\.\d+\.\d+\.\d+/)[0];
  res.sendFile(__dirname + '/index.html')
});

io.on('connection', function (socket) {
  console.log('user connection', userIP);
  // 响应用户发送的信息
  socket.on('chat message', function (msg) {
    console.log('前', msg);
    const msg2 = Object.assign({}, msg, {cip: userIP})
    console.log('后', msg2);
    // 广播给所有人
    io.emit('chat message', msg2)
  });
  socket.on('disconnect', function () {
    console.log('user disconnect', userIP);
  })
});
http.listen(9000, function () {
  console.log('listen on 9000');
});
/**
 * 使用单文件fs储存聊天记录
 * 储存所有用户,修改用户名
 * 创建用户表和聊天记录表(搭建结构)
 * */
