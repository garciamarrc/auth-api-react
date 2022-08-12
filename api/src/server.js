const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const { login } = require('./controllers/login')
const { verifyToken } = require('./controllers/verifyToken')


const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.post('/api/login', login)

app.post('/api/verify-token', verifyToken)

app.listen(3000, () => {
    console.log('Listen')
})

module.exports = app