const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
const personModel = require('./PersonModule')
const store = require('./mongoDb')
const clientDir = __dirname + "\\client\\"


app.use(express.json())
app.use(express.urlencoded())
app.use(express.static(clientDir))

app.set("view engine", "ejs")

app.get('/', (req, res) => res.sendFile(clientDir + "index.ejs"))

app.app.post('/', function (req, res) {
  res.send('POST request to the homepage')
})

app.post('/', (req, res)  =>  {
    let person = personModel.createPerson(req.body.name, req.body.email, req.body.age)
    person.store()
    res.redirect('/')
    
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))