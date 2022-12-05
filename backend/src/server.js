const express = require('express')
var cors = require('cors')
//const { compute } = require('./index')
const {dockStart} = require("@nlpjs/basic");
const {GreenHomeComponent} = require('./utils/GreenHomeComponent')

const app = express()
const port = 3000
let dock

app.use(cors())

app.get('/', async (req, res) => {
  //const response = await compute(req.query.msg)
  const nlp = dock.get('nlp')
  const response = await nlp.process('en', req.query.msg);

  res.send(response.answer)
})

app.get('/offender', async (req, res) => {
  const ghc = new GreenHomeComponent()
  res.send(ghc.offender)
})

app.get('/treeLevel', async (req, res) => {
  const ghc = new GreenHomeComponent()
  res.send(ghc.treeLevel)
})

app.get('/goodBoy', async (req, res) => {
  const ghc = new GreenHomeComponent()
  res.send(ghc.goodBoy)
})

app.get('/instantTotalConsumption', async (req, res) => {
  const ghc = new GreenHomeComponent()
  res.send(ghc.getInstantTotalConsumption())
})

app.get('/greenDayStreak', async (req, res) => {
  const ghc = new GreenHomeComponent()
  res.send(ghc.greenStreak)
})

app.listen(port, async () => {
  console.log(`NLP server listening on port ${port}`)
  dock = await dockStart();
  const nlp = dock.get('nlp');
  await nlp.train();
})
