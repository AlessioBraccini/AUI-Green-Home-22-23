const express = require('express')
var cors = require('cors')
const { compute } = require('./index')

const app = express()
const port = 3000

app.use(cors())

app.get('/', async (req, res) => {
  const response = await compute(req.query.msg)

  res.send(response)
})

app.listen(port, () => {
  console.log(`NLP server listening on port ${port}`)
})
