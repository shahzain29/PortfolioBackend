
// mongodbUser= shahzainsohail29
// mongodbPassword= jb9qHISW8n2Nhx9j

const express = require('express')
const mongoose = require('mongoose')
const app = express()

const studentrouter = require("./routes/student");

const url = "mongodb+srv://shahzainsohail29:jb9qHISW8n2Nhx9j@cluster0.jcvtn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
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

const port = 9000

app.listen(port, () => {
    console.log('SErver started on port=>' + port)
})

