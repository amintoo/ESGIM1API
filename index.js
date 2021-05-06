const express = require('express')
const mongoose = require('mongoose')
const routerUsers = require('./routers/users.router')
const app = express()

mongoose.Promise = Promise
mongoose.connect('mongodb+srv://dbuser:NdkrLAha6IHTGR4s@cluster0.nycfo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser:true, useUnifiedTopology:true})

const db = mongoose.connection
db.on('error', console.error.bind(console,'connection error:'))
db.once('open', ()=>console.log('db connection:', db.states[db._readyState]))

app.use(express.json())
app.use('/users', routerUsers)

app.listen(3001)