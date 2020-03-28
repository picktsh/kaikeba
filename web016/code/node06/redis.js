/**
 * 键值服务器
 * 早期出现,现在已经用的比较少了
 */
const redis = require('redis')
const client = redis.createClient(6379,'localhost')

client.set('hello','hahaha')
client.get('hello',function(err,v){
  console.log('redis key:',v)
})
