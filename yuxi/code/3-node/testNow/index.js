const path = require('path')
const fs = require('fs')
module.exports = class TestNow {
  genJestSource(sourcePath = path.resolve('./')) {
    const testPath = `${sourcePath}/__test__`
    if (!fs.existsSync(testPath)) {
      fs.mkdirSync(testPath)
    }
    // 遍历代码文件
    let list = fs.readdirSync(sourcePath)
    list
      // 添加完整路径
      .map(v => `${sourcePath}/${v}`)
      // 过滤文件
      .filter(v => fs.stateSync(v).isFile())
      // 排除测试代码
      .filter(v => v.indexOf('.spec') === -1)
      .map(v => this.genTestFile(v))
  }
  
  genTestFile(filename) {
    console.log('filename', filename);
    const testFileName = this.genTestFileName(filename)
    // 判断此文件是否存在
    if (fs.existsSync(testFileName)) {
      console.log('该测试代码已存在', testFileName);
      return undefined;
    }
    const mod = require(filename)
    let source;
    if (typeof mod === 'object') {
      source = Object.keys(mod)
        .map(v => this.genJestSource(v, path.baseName(filename), true))
        .join('\n')
    } else if (typeof mod === 'function') {
      const basename = path.basename(filename)
      source = this.getTestSource(basename.replace('.js', ''), basename)
    }
    fs.writeFileSync(testFileName, source)
  }
  
  getTestSource(methodName, classFile, isClass = false) {
    console.log('getTestSource', methodName);
    return `
    test('${'TEST' + methodName}',() => {
      const ${isClass ? '{' + methodName + '}' : methodName} = require('${'../' + classFile}')
      const ret = ${methodName}()
    })
    `
  }
}
