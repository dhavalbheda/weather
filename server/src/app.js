const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')


app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(require('./routers/router'))

module.exports = app
