const crypto = require('crypto')
const hash = (type, str) => crypto.createHash(type).update(str).digest()
const md5 = str => hash('md5', str)
const hash1 = str => hash('sha1', str)

const psw = '111111'

console.log('md5',md5(psw))
console.log('md5',hash1(psw))

// `彩虹表`

// 解决
// 加盐 salt
// 1.用户面膜强度; 2.加盐,追加一坨复杂字符
