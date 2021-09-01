const express= require('express')
const cors = require('cors')
const path = require('path')
const mongoose = require('mongoose')
const { Image } = require('./images.models')
const app = express()
const PORT = process.env.PORT || 4000

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

    try {
        Image.create({ name: req.body.name, link: req.body.link }, function (err) {
            if (err) return handleError(err);
            // saved!
        });
        res.send('Image Sent')
    } catch (error) {
        //console.log(error)
        res.send('Image failed to send')
    }
    
    
})

app.post('/images/remove/:id', (req,res) => {
    try {

        Image.deleteOne({_id: req.params.id}, function(err){
            if (err) console.log(err)
        })
        res.send('Image deleted')
        
    } catch (error) {
        //console.log(error)
        res.send('Image failed to delete')
    }

    
})

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`)
})