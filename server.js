const express= require('express')
const app = express()
const PORT = 4000

app.get('/', (req,res) => {
    res.send('hello world!')
})

app.get('/hello', (req, res) => {
    res.send('Hello from the server')
})

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`)
})