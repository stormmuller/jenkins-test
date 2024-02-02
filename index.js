const express = require('express')
const { generateMessage } = require('./generate-message')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(generateMessage('World'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})