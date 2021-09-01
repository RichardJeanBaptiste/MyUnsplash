const express= require('express')
const cors = require('cors')
const path = require('path')
const mongoose = require('mongoose')
const { Image } = require('./images.models')
const app = express()
const PORT = 4000

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'client/build')))


try {
    mongoose.connect('mongodb+srv://Richinbk:delladmin1@imagedatabase.fe0ef.mongodb.net/Main?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology:true})
    .then(() => console.log('connected to database'))
    .catch(() => console.log('Failed to connect to database'))
    
} catch (error) {
    console.log("Something in the databse broke")
}


app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname + 'client/build/index.html'))
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

app.post('/images/add', (req,res) => {

    Image.create({ name: req.body.name, link: req.body.link }, function (err) {
        if (err) return handleError(err);
        // saved!
    });
    //console.log(req.body.name)
    //console.log(req.body.link)
    res.send('abcdef')
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