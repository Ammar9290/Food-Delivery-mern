const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://ammar:ammar@cluster0.6ogbnoh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db