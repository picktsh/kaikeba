// websocket的应用
// 1.简易的聊天室
// 2.浏览器模仿控制台
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
// const uuid = require('uuid');
// console.log(uuid.v1());
// 请求根根路径
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
});

io.on('connection', function (socket) {
  console.log('a user connection');
  // 响应用户发送的信息
  socket.on('chat message', function (msg) {
    console.log(msg);
    // 广播给所有人
    io.emit('chat message', msg)
  });
  socket.on('disconnect', function () {
    console.log('user disconnect');
  })
});
http.listen(3001, function () {
  console.log('listen on 3001');
});
/**
 * 使用单文件fs储存聊天记录
 * 储存所有用户,修改用户名
 * 创建用户表和聊天记录表(搭建结构)
 * */
