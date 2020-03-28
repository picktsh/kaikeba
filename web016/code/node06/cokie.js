const http = require('http');
http.createServer((req, res) => {
  if (req.url === '/favicon.ico') {
    res.end('')
    return
  }
  
  // 设置cookie
  res.setHeader('Set-Cookie', 'cookie=abc');
  res.end('hello cookie');
})
  .listen(3000);
