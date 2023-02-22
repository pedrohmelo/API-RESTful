//configuração inicial
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()

//forma de ler JSON / middlewares
app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json())

//rotas da API
const personRoutes = require('./routes/personRoutes')

app.use('/person', personRoutes)

//roda inicial / endpoint
app.get('/', (req, res) => {

    //mostrar req

    res.json({message: 'PEDRO MELO IS THE TRUE FULLSTACK DEV'})

})

//entregar uma porta pra ter acesso ao código
const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)

mongoose
.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.i262hlp.mongodb.net/?retryWrites=true&w=majority` 
)
.then(() => {
    console.log('Conectamos ao MongoDB!')
    app.listen(3000)
})
.catch((err) => console.log(err))

