const express = require('express')
const config = require('config')
const jsonServer = require('json-server')


const app = express()

app.use(express.json({extended: true}))

const PORT = config.get('port') || 5000

app.use('/api/auth', require('./routes/auth.routes'))

app.use('/api', jsonServer.router('db.json'))

app.listen(PORT, () => console.log(`start PORT ${PORT}`))