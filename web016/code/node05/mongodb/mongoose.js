const mongoose = require('mongoose')

mongoose.connect('mongo://localhost27017')


conn.once('open', async () => {
  const Schema = mongoose.Schema({
    category: String,
    name: String,
  })
})
