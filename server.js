const express= require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const { Image } = require('./images.models')
const app = express()
const PORT = 4000

app.use(cors())
app.use(express.json())


try {
    mongoose.connect('mongodb+srv://Richinbk:delladmin1@imagedatabase.fe0ef.mongodb.net/Main?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology:true})
    .then(() => console.log('connected to database'))
    .catch(() => console.log('Failed to connect to database'))
    
} catch (error) {
    console.log("Something in the databse broke")
}


app.get('/', (req,res) => {
    res.send('hello world!')
})

app.get('/hello', (req, res) => {
    res.send('Hello from the server')
})

app.get('/images', (req,res) => {
    try {
        Image.find({}, function(err, docs){
            if (err) res.send(err)
            console.log(docs)
            res.json(docs)
        })
    } catch (error) {
        console.log(error)
    }
})

app.post('/images/remove/:id', (req,res) => {
    console.log(req.params.id)
    Image.deleteOne({_id: req.params.id}, function(err){
        if (err) console.log(err)
    })
    res.send('asd')
})

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`)
})