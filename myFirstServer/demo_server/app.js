const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {

});


const personModel = require('./PersonModule')
const store = require('./mongoDbTest')
const clientDir = __dirname + "\\client\\"

app.use(express.json())
app.use(express.urlencoded())

app.get('/', (req, res) => res.sendFile(clientDir + "index.html"))
app.get('/', (req, res) => {
    res.sendFile(clientDir + "styleIndex.css")
})
app.get('/zombies', (req, res) => {
    res.sendFile(clientDir + "zombie.png")
  })

app.post('/', (req, res)  =>  {
    let person = personModel.createPerson(req.body.name, req.body.email, req.body.age)
    person.store();
    res.redirect('/')
    
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

