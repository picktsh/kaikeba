const fs = require('fs')
test('集成测试 测试生成测试代码文件', () => {
// 准备环境
//  删除测试文件夹
  fs.rmdirSync(__dirname + '/data/__test__', {
    recursive: true
  })
  const src = require('../index')()
  src.genJestSource(__dirname + '/data')
})
