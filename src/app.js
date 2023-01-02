const express = require('express')
const cors = require('cors')
// const expressValidator = require('express-validator')

const app = express()
const userRouter = require('./routers/users.router')

require('./databases/db')

app.use(express.json())
app.use(cors())
// app.use(expressValidator())

app.get('/', (req, res) => {
    res.send('No authorization')
})

app.use('/api/users', userRouter)

module.exports = app