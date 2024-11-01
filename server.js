

const express = require('express')
const app = express()

const productRoute = require('./routes/product')


app.get('/',(req,res)=>{
    res.send('<h1>this is page 1</h1>')
})


app.use('/product',productRoute)


const port = 3000

app.listen(port,()=>{
    console.log('Express server running')
})