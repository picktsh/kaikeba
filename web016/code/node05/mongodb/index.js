const app = require('express')()
const path = require('path')
const mongo = require('./models/db')

app.get('/', (req, res) => {
  res.sendFile(path.relative('./index.html'))
})

app.get('api/list', async (req, res) => {
  // 分页查询
  const {page, category, keyword} = req.query
  
  // 构造查询条件
  const condition = {}
  if (category) {
    condition.category = category
  }
  if (keyword) {
    condition.name = {$regex: new RegExp(keyword)}
  }
  const col = await mongo.col('fruits')
  const total = await col.find().count()
  const fruits = await col.find()
    .skip((page - 1) * 5)
    .limit(5)
    .toArray()
  res.json({
    ok: 1,
    data: {
      fruits,
      pagination: {total, page}
    }
  })
})
app.get('/api/category', async (req, res) => {
  const col = mongo.col('fruits')
  const data = await col.distinct('category')
  res.json({ok: 1, data})
})

app.listen(9001)
