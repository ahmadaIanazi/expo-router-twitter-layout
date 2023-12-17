const express = require('express')
const cors = require('cors')

const api = express()
api.use(cors({ origin: true }))

api.post('/health', (req, res) => {
  res.send({ status: 'ok' })
})

module.exports = api
