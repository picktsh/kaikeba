const http = require('http')
const server = http.createServer((req, res) => {
  Math.random() > 0.5 ? aa() : 2;
  res.end('Hello...')
})

// 这个模块还有没有复模块?
if (!module.parent) {
  server.listen(3000, () => {
    console.log('app start at localhost:3000')
  })
} else {
  module.exports = server
}
