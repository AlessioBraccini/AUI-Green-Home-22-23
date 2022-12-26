const express = require('express')
var cors = require('cors')
const { fsmProcessState, FSM } = require('./index')
const {dockStart} = require("@nlpjs/basic");
const {GreenHomeComponent} = require('./utils/GreenHomeComponent')
//const {readJson} = require('./utils/readJson')

const app = express()
const port = 3000
let dock
const fsm = Object.create(FSM)

app.use(cors())

app.get('/', async (req, res) => {
  //const response = await compute(req.query.msg)
  const nlp = dock.get('nlp')
  const response = await nlp.process('en', req.query.msg);
  const fsmResp= await fsmProcessState(response, fsm, nlp);
  console.log(fsmResp)
  res.send(fsmResp)
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


//Da rifare in quest
app.get('/quest', async (req, res) => {
  const ghc = new GreenHomeComponent()
  res.send(ghc.getQuest())
})

app.post('/stepForwardDemo', async (req, res) => {
  const ghc = new GreenHomeComponent()
  ghc.stepForwardDemo()
  res.send()
})

app.post('/resetDemo', async (req, res) => {
  const ghc = new GreenHomeComponent()
  ghc.resetDemo()
  res.send()
})

app.listen(port, async () => {
  console.log(`NLP server listening on port ${port}`)
  dock = await dockStart();
  const nlp = dock.get('nlp');
  await nlp.train();
})
