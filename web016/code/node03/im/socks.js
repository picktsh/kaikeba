const net = require('net');
const chatServer = net.createServer();
const clineList = [];
chatServer.on('connection', client => {
  client.write('Hi\n');
  clineList.push(client);
  client.on('data', data => {
    console.log('receive', data.toString);
    clineList.forEach(v => {
      v.write(data)
    })
  })
});
chatServer.listen(9000);

// telnet localhost 9000
// 换行发送内容
