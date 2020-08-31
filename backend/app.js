require('dotenv').config({ path: __dirname+'/./../.env' })
const express = require('express')
const app = express()
const port = process.env.REST_API_PORT || 5000


const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/users', usersRouter)

app.listen(port, function () {
    console.log(`Server listening on port ${port}...`)
})

module.exports = app
