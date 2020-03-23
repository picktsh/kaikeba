// websocket的应用
// 1.简易的聊天室
// 2.浏览器控制台
var app = require('express')();
var http = require('http').Server(app);

var io = require('socket.io')(http);
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
