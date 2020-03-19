const KKB = require('./KkB')
const app = new KKB()

app.use((req, res) => {
  res.writeHead(200)
  res.end('hi kkb')
})
app.listen(3000, () => {
  console.log('listen at 3000');
})
