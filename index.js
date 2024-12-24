


const express = require('express')
const mongoose = require('mongoose')
const app = express()

const studentrouter = require("./routes/student");

const url = `mongodb+srv://${process.env.MONGODBDB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.jcvtn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
mongoose.connect(url, {})
const con = mongoose.connection;

app.use(express.json())


try {
    con.on('open', () => {
        console.log('mongodb connected')
    })

} catch (error) {
    console.log('Error connection: ' + error)
}

app.use('/students', studentrouter)

const port = process.env.PORT || 3000

const server = app.listen(port, '0.0.0.0', () => {
    console.log('Server started on port=>' + port)
})

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;


