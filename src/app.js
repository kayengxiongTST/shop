const express = require('express')
const cors = require('cors')

const app = express()
const userRouter = require('./routers/users.router')

require('./databases/db')

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('No authorization')
})

app.use('/api/users', userRouter)

module.exports = app