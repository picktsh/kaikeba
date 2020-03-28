const http = require('http');
const session = {};
http.createServer((req, res) => {
  if (req.url === '/favicon.ico') {
    res.end('');
    return
  }
  
  // 设置cookie
  // res.setHeader('Set-Cookie', 'cookie=abc');
  // res.end('hello cookie');
  
  const sessionKey = 'sid';
  const cookie = req.headers.cookie;
  if (cookie && cookie.indexOf(sessionKey) > -1) {
    res.end('Come Back');
    const pattern = new RegExp(`${sessionKey}=([^;]+);?\s*`);
    const sid = pattern.exec(cookie)[1];
    console.log(`session`, sid, session, session[sid])
  } else {
    const sid = (Math.random() * 99999).toFixed(); // 有几率重复,这里为了演示方便
    // 设置cookie
    res.setHeader('Set-Cookie', `${session}=${sid}`);
    session[sid] = {name: 'laowang'}
    res.end('Hello')
  }
})
  .listen(3000);
