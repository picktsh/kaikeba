const callback = require('../index')

test('callback', done => {
  callback()
  // 延迟1s结束
  setTimeout(done, 1000)
})
